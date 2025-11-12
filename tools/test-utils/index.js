const path = require("path");
const prettyFormat = require("pretty-format");
const { DrupalAttribute: BaseDrupalAttribute } = require("drupal-attribute");
const twing = require("../../.storybook/environment");
const { StorybookDrupalAttribute } = require(
  path.resolve(__dirname, "../../.storybook/drupal-attribute"),
);

const { DOMElement, DOMCollection } = prettyFormat.plugins;
const PRE_FORMATTED_TAGS = new Set(["PRE", "TEXTAREA"]);
const TEXT_NODE = 3;
const ELEMENT_NODE = 1;
const BOOLEAN_ATTRIBUTES = new Set([
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "scoped",
  "selected",
]);

/**
 * ---------------------------------------------------------------------------
 * DOM helpers
 * ---------------------------------------------------------------------------
 */

const trimBoundaryWhitespace = (value) => {
  if (!value) {
    return value;
  }

  let start = 0;
  let seenLineBreak = false;

  while (start < value.length) {
    const char = value[start];

    if (char === "\n" || char === "\r") {
      seenLineBreak = true;
      start += 1;
      continue;
    }

    if (seenLineBreak && (char === " " || char === "\t")) {
      start += 1;
      continue;
    }

    break;
  }

  let end = value.length - 1;
  seenLineBreak = false;

  while (end >= start) {
    const char = value[end];

    if (char === "\n" || char === "\r") {
      seenLineBreak = true;
      end -= 1;
      continue;
    }

    if (seenLineBreak && (char === " " || char === "\t")) {
      end -= 1;
      continue;
    }

    break;
  }

  return value.slice(start, end + 1);
};

const cleanWhitespace = (node) => {
  for (let child = node.firstChild; child; ) {
    const next = child.nextSibling;

    if (child.nodeType === TEXT_NODE) {
      if (!child.textContent.trim()) {
        child.parentNode.removeChild(child);
      } else {
        const parentName = child.parentNode?.nodeName?.toUpperCase();
        if (!parentName || !PRE_FORMATTED_TAGS.has(parentName)) {
          const trimmed = trimBoundaryWhitespace(child.textContent);
          if (trimmed) {
            child.textContent = trimmed;
          } else {
            child.parentNode.removeChild(child);
          }
        }
      }
    } else if (child.nodeType === ELEMENT_NODE) {
      cleanWhitespace(child);
    }

    child = next;
  }
};

/**
 * ---------------------------------------------------------------------------
 * Option cloning
 * ---------------------------------------------------------------------------
 */

const isPlainObject = (value) =>
  Object.prototype.toString.call(value) === "[object Object]";

const cloneValue = (value) => {
  if (value === null || value === undefined) {
    return value;
  }

  if (value instanceof StorybookDrupalAttribute) {
    return value;
  }

  if (value instanceof BaseDrupalAttribute) {
    const clone = new StorybookDrupalAttribute();
    for (const [key, attributeValue] of value.entries()) {
      clone.set(key, cloneValue(attributeValue));
    }
    return clone;
  }

  if (Array.isArray(value)) {
    return value.map((item) => cloneValue(item));
  }

  if (isPlainObject(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, cloneValue(item)]),
    );
  }

  return value;
};

const prepareOptions = (options = {}, reset = false) => {
  if (reset) {
    return {
      ...(isPlainObject(options) ? options : {}),
      attributes: new StorybookDrupalAttribute(),
    };
  }

  if (isPlainObject(options)) {
    return cloneValue(options);
  }

  return options;
};

/**
 * ---------------------------------------------------------------------------
 * Snapshot formatting
 * ---------------------------------------------------------------------------
 */

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const countValuelessAttributes = (markup) => {
  const counts = new Map();
  const tagRegex = /<([A-Za-z][^\s/>]*)([^>]*)>/g;

  let tagMatch;
  while ((tagMatch = tagRegex.exec(markup)) !== null) {
    const attributesChunk = tagMatch[2];

    if (!attributesChunk) {
      continue;
    }

    const attributeRegex =
      /([^\s=\/>]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'=<>`]+))?/g;

    let attributeMatch;
    while ((attributeMatch = attributeRegex.exec(attributesChunk)) !== null) {
      const [fullAttribute, attributeName] = attributeMatch;

      if (attributeName && !fullAttribute.includes("=")) {
        counts.set(attributeName, (counts.get(attributeName) ?? 0) + 1);
      }
    }
  }

  return counts;
};

const restoreValuelessAttributes = (snapshot, counts) => {
  if (!counts || counts.size === 0) {
    return snapshot;
  }

  let result = snapshot;

  for (const [attributeName, occurrences] of counts.entries()) {
    const pattern = new RegExp(`${escapeRegExp(attributeName)}=""`, "g");
    let remaining = occurrences;

    result = result.replace(pattern, (match) => {
      if (remaining > 0) {
        remaining -= 1;
        return attributeName;
      }
      return match;
    });
  }

  return result;
};

const normalizeAttributeQuotes = (snapshot) =>
  snapshot.replace(
    /([^\s=]+)="((?:[^"\\]|\\.)*)"/g,
    (fullMatch, name, value) =>
      value.includes('\\"')
        ? `${name}="${value.replace(/\\"/g, '"')}"`
        : fullMatch,
  );

const normalizeBooleanAttributes = (snapshot) =>
  snapshot.replace(/([^\s=\/>]+)="\1"/g, (match, name) => {
    if (BOOLEAN_ATTRIBUTES.has(name.toLowerCase())) {
      return name;
    }
    return match;
  });

const formatSnapshot = (jest, counts) => {
  const raw = prettyFormat.format(jest, {
    plugins: [DOMElement, DOMCollection],
  });

  return normalizeBooleanAttributes(
    normalizeAttributeQuotes(restoreValuelessAttributes(raw, counts)),
  );
};

if (
  typeof expect !== "undefined" &&
  typeof expect.addSnapshotSerializer === "function"
) {
  expect.addSnapshotSerializer({
    test(val) {
      return Boolean(val && val.__storybookDrupalHtml);
    },
    print(val) {
      return val.__storybookDrupalHtml;
    },
  });
}

/**
 * ---------------------------------------------------------------------------
 * Public API
 * ---------------------------------------------------------------------------
 */

const renderTwigFileAsNode = async (file, options = {}, reset = false) => {
  const renderOptions = prepareOptions(options, reset);
  const html = await twing.render(file, renderOptions);
  const markup = html.trim();
  const valuelessCounts = countValuelessAttributes(markup);

  const jest = document.createElement("jest");
  jest.innerHTML = markup;
  cleanWhitespace(jest);

  Object.defineProperty(jest, "__storybookDrupalHtml", {
    value: formatSnapshot(jest, valuelessCounts),
    configurable: true,
  });

  return jest;
};

const renderTwigFileAsHtml = async (file, options = {}, main = false) => {
  const renderOptions = prepareOptions(options);
  const html = await twing.render(file, renderOptions);

  if (!main) {
    return html;
  }

  const landmark = document.createElement("main");
  landmark.innerHTML = html.trim();

  return landmark;
};

const getVariants = (outline, add) => {
  let variants = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];

  if (outline) {
    variants = [
      ...variants,
      ...variants.map((variant) => `outline-${variant}`),
    ];
  }

  if (add) {
    variants = [...variants, ...add];
  }

  return variants;
};

module.exports = {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
  getVariants,
  DrupalAttribute: StorybookDrupalAttribute,
};
