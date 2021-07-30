import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-data-dropdown/data.js";
import dropdown from "@openeuropa/bcl-dropdown/dropdown.html.twig";
import drupalAttribute from "drupal-attribute";

const getArgs = (data) => {
  return {
    direction: "",
    dark: false,
  };
};

const getArgTypes = (data) => {
  return {
    direction: {
      type: { name: "select" },
      description: "Direction of dropdown menu",
      options: ["", "dropup", "dropend", "dropstart"],
      control: {
        type: "select",
        labels: {
          "": "dropdown",
          dropup: "dropup",
          dropend: "dropend",
          dropstart: "dropstart",
        },
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
    },
    dark: {
      type: { name: "boolean" },
      description: "Enables dark mode for dropdown menu",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
  };
};

const resetAttrs = (data) => {
  data.attributes.removeClass("dropdown-menu-dark");
};

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }
  resetAttrs(data);
  return Object.assign(data, args);
};

export default {
  title: "Components/Dropdown",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2726%3A46",
      },
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=21%3A16",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/components/dropdowns/",
      },
    ],
  },
};

export const Default = (args) => dropdown(applyArgs(demoData, args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);
