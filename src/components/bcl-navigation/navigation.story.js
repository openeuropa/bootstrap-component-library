import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-data-navigation/data.js";
import demoTabsData from "@openeuropa/bcl-data-navigation/dataTabs.js";
import navigation from "@openeuropa/bcl-navigation/navigation.html.twig";
import drupalAttribute from "drupal-attribute";

const getArgTypes = (data, type) => {
  let argTypes = {
    full_width: {
      name: "full width",
      type: { name: "boolean" },
      description: "Full width menu",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    alignment: {
      type: { name: "select" },
      description: "Alignment menu",
      defaultValue: "",
      control: {
        type: "select",
        options: {
          none: "",
          left: "start",
          center: "center",
          right: "end",
        },
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
    },
  };
  if (type === "default") {
    argTypes.pills = {
      type: { name: "boolean" },
      description: "Menu items as pills",
      defaultValue: data.pills,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    };
    argTypes.vertical = {
      type: { name: "boolean" },
      description: "Vertical menu",
      defaultValue: "",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    };
  }
  return argTypes;
};

const resetAttrs = (data) => {
  data.attributes.removeClass("nav-pills");
  data.attributes.removeClass("flex-column");
  data.attributes.removeClass("nav-fill");
  data.attributes.removeClass(`justify-content-${data.alignment}`);
};

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }
  resetAttrs(data);
  return Object.assign(data, args);
};

export default {
  title: "Components/Navigation",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2737%3A474",
      },
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=53%3A78",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/components/navs-tabs/",
      },
    ],
  },
};

export const Default = (args) => navigation(applyArgs(demoData, args));

Default.argTypes = getArgTypes(demoData, "default");

export const Tabs = (args) => navigation(applyArgs(demoTabsData, args));

Tabs.storyName = "Tabs";
Tabs.argTypes = getArgTypes(demoTabsData);
