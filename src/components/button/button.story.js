import { withDesign } from "storybook-addon-designs";
import demoData from "@oe/data-button/data";
import button from "./button.html.twig";

const getArgTypes = (data) => {
  return {
    label: {
      type: { name: "string" },
      description: "Label of the button",
      defaultValue: data.label,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    type: {
      type: { name: "select" },
      description: "Type of the button",
      defaultValue: "button",
      control: {
        type: "select",
        options: {
          Button: 'button',
          Submit: 'submit',
          Reset: 'reset'
        },
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "button" },
        category: "Content",
      },
    },
    assistive_text: {
      type: { name: "string" },
      name: "Additional text visually hidden",
      description: "Text inside the button to be visible on assistive technologies",
      defaultValue: false,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    outline: {
      type: { name: "boolean" },
      description: "Enable outline style",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    variant: {
      type: { name: "select" },
      description: "Variant of the button",
      defaultValue: data.variant,
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
          "link"
        ],
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
        category: "Style",
      },
    },
    size: {
      type: { name: "select" },
      description: "Size of the button",
      defaultValue: "md",
      control: {
        type: "select",
        options: ['sm','md','lg'],
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "md" },
        category: "Style",
      },
    },
    disabled: {
      type: { name: "boolean" },
      description: "Enable the disabled state",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    toggle: {
      type: { name: "boolean" },
      description: "Enable the toggle state",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    text_nowrap: {
      type: { name: "boolean" },
      name: "Prevent label from wrapping",
      description: "Button text should not wrap",
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
  title: "Components/Button",
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: 'https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2624%3A0',
    },
  }
};

export const Primary = (args) => button(applyArgs(demoData, args));

Primary.storyName = "Default";
Primary.argTypes = getArgTypes(demoData);
