const path = require("path");
const prettyFormat = require("pretty-format");
const { DrupalAttribute: BaseDrupalAttribute } = require("drupal-attribute");
const twing = require("../../.storybook/environment");
const { StorybookDrupalAttribute } = require(
  path.resolve(__dirname, "../../.storybook/drupal-attribute"),
);

const { DOMElement, DOMCollection } = prettyFormat.plugins;

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const isPlainObject = (value) =>
  Object.prototype.toString.call(value) === "[object Object]";

function cloneValue(value) {
  if (value === null || value === undefined) {
    return value;
  }

  if (value instanceof StorybookDrupalAttribute) {
    return value;
  }

  if (value instanceof BaseDrupalAttribute) {
    const converted = new StorybookDrupalAttribute();

    for (const [key, attributeValue] of value.entries()) {
      converted.set(key, cloneValue(attributeValue));
    }

    return converted;
  }

  if (Array.isArray(value)) {
    return value.map((item) => cloneValue(item));
  }

  if (isPlainObject(value)) {
    return Object.entries(value).reduce((accumulator, [key, item]) => {
      accumulator[key] = cloneValue(item);
      return accumulator;
    }, {});
  }

  return value;
}

function normalizeOptions(options) {
  if (options === null || options === undefined) {
    return options;
  }

  return cloneValue(options);
}

// Track attributes rendered without explicit values so snapshots can mirror
// Drupal's boolean attribute output.
const getValuelessAttributeCounts = (markup) => {
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

      if (!attributeName) {
        continue;
      }

      const hasAssignment = fullAttribute.includes("=");
      if (!hasAssignment) {
        counts.set(attributeName, (counts.get(attributeName) ?? 0) + 1);
      }
    }
  }

  return counts;
};

// Re-apply valueless attributes within the pretty-printed DOM snapshot string.
const applyValuelessAttributes = (snapshot, counts) => {
  if (!counts || counts.size === 0) {
    return snapshot;
  }

  let result = snapshot;

  for (const [attributeName, occurrences] of counts.entries()) {
    if (!occurrences) {
      continue;
    }

    const escapedName = escapeRegExp(attributeName);
    const pattern = new RegExp(`${escapedName}=""`, "g");
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

// Remove escape sequences inside attribute values so JSON-like payloads render
// with plain double quotes, matching the Twig templates.
const normalizeAttributeQuotes = (snapshot) =>
  snapshot.replace(
    /([^\s=]+)="((?:[^"\\]|\\.)*)"/g,
    (fullMatch, name, value) => {
      if (!value.includes('\\"')) {
        return fullMatch;
      }

      const unescaped = value.replace(/\\"/g, '"');

      return `${name}="${unescaped}"`;
    },
  );

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

const renderTwigFileAsNode = async (file, options = {}, reset) => {
  let baseOptions = options;

  if (reset) {
    baseOptions = {
      ...(isPlainObject(options) ? options : {}),
      attributes: new StorybookDrupalAttribute(),
    };
  } else if (isPlainObject(options)) {
    baseOptions = { ...options };
  }

  const renderOptions = normalizeOptions(baseOptions);

  const html = await twing.render(file, renderOptions);
  const markup = html.trim();
  const valuelessCounts = getValuelessAttributeCounts(markup);

  const jest = document.createElement("jest");
  jest.innerHTML = markup;

  const prettySnapshot = prettyFormat.format(jest, {
    plugins: [DOMElement, DOMCollection],
  });
  const snapshotHtml = normalizeAttributeQuotes(
    applyValuelessAttributes(prettySnapshot, valuelessCounts),
  );

  Object.defineProperty(jest, "__storybookDrupalHtml", {
    value: snapshotHtml,
    configurable: true,
  });

  return jest;
};

const renderTwigFileAsHtml = async (file, options = {}, main) => {
  const renderOptions = normalizeOptions(options);
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
    variants = [...variants, ...variants.map((el) => `outline-${el}`)];
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
