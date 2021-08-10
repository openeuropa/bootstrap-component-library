import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-data-list-group/data.js";
import actionableDemoData from "@openeuropa/bcl-data-list-group/actionableData";
import orderedData from "@openeuropa/bcl-data-list-group/orderedData";
import listGroup from "@openeuropa/bcl-list-group/list-group.html.twig";
import drupalAttribute from "drupal-attribute";

const getArgs = () => {
  return {
    flush: false,
    horizontal: "",
  };
};

const getArgTypes = () => {
  return {
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
        "",
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
          "": "none",
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
  };
};

const resetAttrs = (data) => {
  data.attributes.removeClass("list-group-flush");
  data.attributes.removeClass(`list-group-${data.horizontal}`);
};

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }
  resetAttrs(data);
  return Object.assign(data, args);
};

export default {
  title: "Components/List Group",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2737%3A45",
      },
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=53%3A62",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/components/list-group/",
      },
    ],
  },
};

export const Unordered = (args) => listGroup(applyArgs(demoData, args));

Unordered.args = getArgs(demoData);
Unordered.argTypes = getArgTypes(demoData);

export const Ordered = (args) =>
  listGroup(applyArgs({ ...orderedData, type: "ordered" }, args));

Ordered.args = getArgs();
Ordered.argTypes = getArgTypes();

export const Actionable = (args) =>
  listGroup(applyArgs({ ...actionableDemoData, type: "actionable" }, args));

Actionable.args = getArgs();
Actionable.argTypes = getArgTypes();
