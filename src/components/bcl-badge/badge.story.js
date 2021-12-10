import { withDesign } from "storybook-addon-designs";
import { initBadges } from "@openeuropa/bcl-story-utils";
import demoData from "@openeuropa/bcl-data-badge/data.js";
import badge from "@openeuropa/bcl-badge/badge.html.twig";
import { getVariants } from "@openeuropa/bcl-story-utils";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";
import drupalAttribute from "drupal-attribute";

const getArgs = (data) => {
  return {
    label: data.label,
    url: "",
    title: data.label,
    background: data.background || "primary",
    rounded_pill: false,
    dismissible: false,
    outline: false,
    assistive_text: "",
  };
};

const getArgTypes = (data) => {
  return {
    label: {
      type: { name: "string" },
      description: "Label of the badge",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    url: {
      type: { name: "string" },
      description: "If you want the badge to be a link",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    dismissible: {
      type: { name: "boolean" },
      description: "Dismissible badge",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Content",
      },
    },
    title: {
      type: { name: "string" },
      description: "Title attribute if it's a link",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    background: {
      type: { name: "select" },
      options: getVariants(),
      description: "Background color of the badge",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
        category: "Style",
      },
    },
    rounded_pill: {
      type: { name: "boolean" },
      description: "Mane the badge a rounded pill",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    outline: {
      type: { name: "boolean" },
      description: "Outline",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    assistive_text: {
      name: "assistive text",
      type: { name: "string" },
      description: "hidden text, for accessibility",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Accessibility",
      },
    },
  };
};

const resetAttrs = (data) => {
  data.attributes.removeClass(`bg-${data.background}`);
  data.attributes.removeClass("rounded-pill");
};

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }
  resetAttrs(data);
  data.icons_path = defaultSprite;
  return Object.assign(data, args);
};

export default {
  title: "Components/Badge",
  decorators: [withDesign, initBadges],
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=1%3A527",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.1/components/badge/",
      },
    ],
  },
};

export const Primary = (args) => badge(applyArgs(demoData, args));

Primary.storyName = "Primary (default)";
Primary.args = getArgs(demoData);
Primary.argTypes = getArgTypes(demoData);

const dataSecondary = { ...demoData, background: "secondary" };
export const Secondary = (args) => badge(applyArgs(dataSecondary, args));

Secondary.storyName = "Secondary";
Secondary.args = getArgs(dataSecondary);
Secondary.argTypes = getArgTypes(dataSecondary);

const dataSuccess = { ...demoData, background: "success" };
export const Success = (args) => badge(applyArgs(dataSuccess, args));

Success.storyName = "Success";
Success.args = getArgs(dataSuccess);
Success.argTypes = getArgTypes(dataSuccess);

const dataWarning = { ...demoData, background: "warning" };
export const Warning = (args) => badge(applyArgs(dataWarning, args));

Warning.storyName = "Warning";
Warning.args = getArgs(dataWarning);
Warning.argTypes = getArgTypes(dataWarning);

const dataDanger = { ...demoData, background: "danger" };
export const Danger = (args) => badge(applyArgs(dataDanger, args));

Danger.storyName = "Danger";
Danger.args = getArgs(dataDanger);
Danger.argTypes = getArgTypes(dataDanger);

const dataInfo = { ...demoData, background: "info" };
export const Info = (args) => badge(applyArgs(dataInfo, args));

Info.storyName = "Info";
Info.args = getArgs(dataInfo);
Info.argTypes = getArgTypes(dataInfo);

const dataLight = { ...demoData, background: "light" };
export const Light = (args) => badge(applyArgs(dataLight, args));

Light.storyName = "Light";
Light.args = getArgs(dataLight);
Light.argTypes = getArgTypes(dataLight);

const dataDark = { ...demoData, background: "dark" };
export const Dark = (args) => badge(applyArgs(dataDark, args));

Dark.storyName = "Dark";
Dark.args = getArgs(dataDark);
Dark.argTypes = getArgTypes(dataDark);
