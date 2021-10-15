import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-data-button-group/data.js";
import toolbarData from "@openeuropa/bcl-data-button-group/toolbarData.js";
import inputGroupData from "@openeuropa/bcl-data-button-group/inputGroupData.js";
import buttonGroup from "@openeuropa/bcl-button-group/button-group.html.twig";
import drupalAttribute from "drupal-attribute";

const getArgs = (data) => {
  return {
    aria_label: "",
    toolbar: data.toolbar || false,
    toolbar_aria_label: data.toolbar_aria_label || "",
    size: "md",
    vertical: false,
  };
};

const getArgTypes = (data) => {
  return {
    toolbar: {
      type: { name: "boolean" },
      description:
        "Enables support for multiple button groups in a toolbar style",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Content",
      },
    },
    aria_label: {
      name: "label of the aria content",
      description:
        "Describe the label of the aria used for assistive technologies",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    toolbar_aria_label: {
      name: "toolbar aria label",
      description: "Toolbar wrapper aria label",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    size: {
      type: { name: "select" },
      description: "Size of the button group",
      options: { small: "sm", medium: "md", large: "lg" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "md" },
        category: "Style",
      },
    },
    vertical: {
      type: { name: "boolean" },
      description: "Enable the vertical state",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
  };
};

const resetAttrs = (data) => {
  data.attributes
    .removeClass([`btn-group-${data.size}`, "btn-group", "btn-group-vertical"])
    .removeAttribute("aria-label");
};

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }
  resetAttrs(data);
  return Object.assign(data, args);
};

export default {
  title: "Components/Button Group",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=8%3A111",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/components/button-group/",
      },
    ],
  },
};

export const Default = (args) => buttonGroup(applyArgs(demoData, args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);

export const InputGroup = (args) =>
  buttonGroup(applyArgs(inputGroupData, args));

InputGroup.storyName = "Input group";
InputGroup.args = getArgs(inputGroupData);
InputGroup.argTypes = getArgTypes(inputGroupData);

export const Toolbar = (args) => buttonGroup(applyArgs(toolbarData, args));

Toolbar.storyName = "Toolbar";
Toolbar.args = getArgs(toolbarData);
Toolbar.argTypes = getArgTypes(toolbarData);
