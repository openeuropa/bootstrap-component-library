import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import drupalAttribute from "drupal-attribute";

import demoData from "@openeuropa/bcl-data-list-group/data.js";
import actionableDemoData from "@openeuropa/bcl-data-list-group/data--actionable";
import orderedData from "@openeuropa/bcl-data-list-group/data--ordered";
import listGroup from "@openeuropa/bcl-list-group/list-group.html.twig";

const getArgs = () => ({
  flush: false,
  horizontal: "none",
});

const getArgTypes = () => ({
  flush: {
    type: { name: "boolean" },
    description: "Remove borders",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
      category: "Style",
    },
  },
  horizontal: {
    type: { name: "select" },
    description: "Horizontal style for each media query",
    options: [
      "none",
      "horizontal",
      "horizontal-sm",
      "horizontal-md",
      "horizontal-lg",
      "horizontal-xl",
      "horizontal-xxl",
    ],
    control: {
      type: "select",
      labels: {
        none: "none",
        horizontal: "horizontal",
        "horizontal-sm": "horizontal small",
        "horizontal-md": "horizontal medium",
        "horizontal-lg": "horizontal large",
        "horizontal-xl": "horizontal extra large",
        "horizontal-xxl": "horizontal extra extra large",
      },
    },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Style",
    },
  },
});

const resetAttrs = (data) => {
  data.attributes.removeClass([
    "list-group-flush",
    `list-group-${data.horizontal}`,
  ]);
};

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }

  if (args.horizontal === "none") {
    args.horizontal = "";
  }

  resetAttrs(data, args);

  return Object.assign(data, args);
};

export default {
  title: "Components/List Group",
  decorators: [withCode, withDesign],
  parameters: {
    badges: ["deprecated"],
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=53%3A62",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.2/components/list-group/",
      },
    ],
  },
};

export const Unordered = (args) => listGroup(applyArgs(demoData, args));

Unordered.args = getArgs(demoData);
Unordered.argTypes = getArgTypes(demoData);

export const Ordered = (args) => listGroup(applyArgs(orderedData, args));
Ordered.args = getArgs(orderedData);
Ordered.argTypes = getArgTypes(orderedData);

export const Actionable = (args) =>
  listGroup(applyArgs(actionableDemoData, args));
Actionable.args = getArgs(actionableDemoData);
Actionable.argTypes = getArgTypes(actionableDemoData);
