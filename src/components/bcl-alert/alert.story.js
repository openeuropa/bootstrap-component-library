import {
  getVariants,
  getIconNames,
  correctPaths,
} from "@openeuropa/bcl-story-utils";
import drupalAttribute from "drupal-attribute";

import demoData from "@openeuropa/bcl-data-alert/data.js";
import alert from "@openeuropa/bcl-alert/alert.html.twig";

const getArgs = (data) => ({
  variant: data.variant || "primary",
  message: data.message,
  heading: data.heading,
  dismissible: true,
  animated_dismiss: true,
  icon: true,
});

const getArgTypes = () => ({
  message: {
    type: { name: "string" },
    description: "Content of the alert",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Content",
    },
  },
  heading: {
    type: { name: "string" },
    description: "Heading of the alert",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Content",
    },
  },
  dismissible: {
    type: { name: "boolean" },
    description: "Enable the close button",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "true" },
      category: "Content",
    },
  },
  variant: {
    type: { name: "select" },
    options: getVariants(),
    description: "Variant of the alert",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "primary" },
      category: "Style",
    },
  },
  animated_dismiss: {
    type: { name: "boolean" },
    description: "Enable the animation on dismiss",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "true" },
      category: "Style",
    },
  },
  icon: {
    type: { name: "boolean" },
    description: "Toggle icon visibility",
    table: {
      category: "Icon",
    },
  },
  icon_name: {
    name: "icon name",
    type: { name: "select" },
    options: getIconNames(),
    description: "Icon name (optional, to set a custom icon)",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Icon",
    },
  },
});

const applyArgs = (data, args) => {
  data.attributes = new drupalAttribute();
  data.icon_path = args.icon ? "/icons.svg" : "";
  if (args.icon_name === "none") {
    data.icon_path = "";
  }

  return Object.assign(correctPaths(data), args);
};

export default {
  title: "Components/Alert",
};

export const Primary = (args) => alert(applyArgs(demoData, args));

Primary.storyName = "Primary (default)";
Primary.args = getArgs(demoData);
Primary.argTypes = getArgTypes(demoData);

const dataSecondary = { ...demoData, variant: "secondary" };
export const Secondary = (args) => alert(applyArgs(dataSecondary, args));

Secondary.storyName = "Secondary";
Secondary.args = getArgs(dataSecondary);
Secondary.argTypes = getArgTypes(dataSecondary);

const dataSuccess = { ...demoData, variant: "success" };
export const Success = (args) => alert(applyArgs(dataSuccess, args));

Success.storyName = "Success";
Success.args = getArgs(dataSuccess);
Success.argTypes = getArgTypes(dataSuccess);

const dataWarning = { ...demoData, variant: "warning" };
export const Warning = (args) => alert(applyArgs(dataWarning, args));

Warning.storyName = "Warning";
Warning.args = getArgs(dataWarning);
Warning.argTypes = getArgTypes(dataWarning);

const dataDanger = { ...demoData, variant: "danger" };
export const Danger = (args) => alert(applyArgs(dataDanger, args));

Danger.storyName = "Danger";
Danger.args = getArgs(dataDanger);
Danger.argTypes = getArgTypes(dataDanger);

const dataInfo = { ...demoData, variant: "info" };
export const Info = (args) => alert(applyArgs(dataInfo, args));

Info.storyName = "Info";
Info.args = getArgs(dataInfo);
Info.argTypes = getArgTypes(dataInfo);

const dataLight = { ...demoData, variant: "light" };
export const Light = (args) => alert(applyArgs(dataLight, args));

Light.storyName = "Light";
Light.args = getArgs(dataLight);
Light.argTypes = getArgTypes(dataLight);

const dataDark = { ...demoData, variant: "dark" };
export const Dark = (args) => alert(applyArgs(dataDark, args));

Dark.storyName = "Dark";
Dark.args = getArgs(dataDark);
Dark.argTypes = getArgTypes(dataDark);
