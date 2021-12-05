import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-data-navigation/data.js";
import demoTabsData from "@openeuropa/bcl-data-navigation/dataTabs.js";
import demoDataCustom from "@openeuropa/bcl-data-navigation/dataCustom.js";
import demoDataMultiple from "@openeuropa/bcl-data-navigation/dataMultiple.js";
import navigation from "@openeuropa/bcl-navigation/navigation.html.twig";
import drupalAttribute from "drupal-attribute";

const getArgs = (data, type) => {
  let args = {
    full_width: false,
    alignment: "",
  };
  if (type === "default") {
    args.pills = data.pills;
    args.vertical = false;
  }

  return args;
};

const getArgTypes = (data, type) => {
  let argTypes = {
    full_width: {
      name: "full width",
      type: { name: "boolean" },
      description: "Full width menu",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    alignment: {
      type: { name: "select" },
      description: "Alignment menu",
      options: ["", "start", "center", "end"],
      control: {
        type: "select",
        labels: {
          "": "none",
          start: "left",
          center: "center",
          end: "right",
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
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    };
    argTypes.vertical = {
      type: { name: "boolean" },
      description: "Vertical menu",
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
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=53%3A78",
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

Default.args = getArgs(demoData, "default");
Default.argTypes = getArgTypes(demoData, "default");

export const Tabs = (args) => navigation(applyArgs(demoTabsData, args));

Tabs.args = getArgs(demoTabsData);
Tabs.argTypes = getArgTypes(demoTabsData);

export const CustomTabs = (args) => navigation(applyArgs(demoDataCustom, args));

CustomTabs.args = getArgs(demoDataCustom);
CustomTabs.argTypes = getArgTypes(demoDataCustom);

export const Multiple = (args) => navigation(applyArgs(demoDataMultiple, args));

Multiple.args = getArgs(demoDataMultiple);
Multiple.argTypes = getArgTypes(demoDataMultiple);
Multiple.parameters = {
  controls: {
    disable: true,
  },
};
