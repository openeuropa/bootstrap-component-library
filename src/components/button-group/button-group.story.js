import { withDesign } from "storybook-addon-designs";
import demoData from "@oe/data-button-group/data";
import toolbarData from "@oe/data-button-group/toolbarData";
import inputGroupData from "@oe/data-button-group/inputGroupData";
import buttonGroup from "./button-group.html.twig";

const getArgTypes = (data) => {
  return {
    role: {
      name: "role of the container",
      type: { name: "select" },
      description: "Describe the role of container for assistive technologies",
      defaultValue: "group",
      control: {
        type: "select",
        options: ["group", "toolbar"],
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "group" },
        category: "Content",
      },
    },
    aria_label: {
      name: "label of the aria content",
      description:
        "Describe the label of the aria used for assistive technologies",
      type: { name: "string" },
      defaultValue: "",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    toolbar: {
      type: { name: "boolean" },
      description:
        "Enables support for multiple button groups in a toolbar style",
      defaultValue: data.toolbar,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Content",
      },
    },
    toolbar_aria_label: {
      name: "toolbar aria label",
      description: "Toolbar wrapper aria label",
      type: { name: "string" },
      defaultValue: data.toolbar_aria_label,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    size: {
      type: { name: "select" },
      description: "Size of the button group",
      defaultValue: "md",
      control: {
        type: "select",
        options: { small: "sm", medium: "md", large: "lg" },
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "md" },
        category: "Style",
      },
    },
    vertical: {
      type: { name: "boolean" },
      description: "Enable the vertical state",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
  };
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: "Components/Button Group",
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2724%3A54",
    },
  },
};

export const Default = (args) => buttonGroup(applyArgs(demoData, args));

Default.argTypes = getArgTypes(demoData);

export const InputGroup = (args) =>
  buttonGroup(applyArgs(inputGroupData, args));

InputGroup.storyName = "Input group";
InputGroup.argTypes = getArgTypes(inputGroupData);

export const Toolbar = (args) => buttonGroup(applyArgs(toolbarData, args));

Toolbar.storyName = "Toolbar";
Toolbar.argTypes = getArgTypes(toolbarData);
