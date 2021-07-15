import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-data-badge/data.js";
import badge from "./badge.html.twig";
import { getVariants } from "@openeuropa/bcl-story-utils";
import drupalAttribute from "drupal-attribute";

const getArgTypes = (data) => {
  return {
    label: {
      type: { name: "string" },
      description: "Label of the badge",
      defaultValue: data.label,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    url: {
      type: { name: "string" },
      description: "If you want the badge to be a link",
      defaultValue: "",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    title: {
      type: { name: "string" },
      description: "Title attribute if it's a link",
      defaultValue: data.label,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    background: {
      type: { name: "select" },
      description: "Background color of the badge",
      defaultValue: "primary" || data.background,
      control: {
        type: "select",
        options: getVariants(),
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
        category: "Style",
      },
    },
    rounded_pill: {
      type: { name: "boolean" },
      description: "Mane the badge a rounded pill",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    assistive_text: {
      type: { name: "string" },
      description: "Assistive, hidden text",
      defaultValue: "",
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
  return Object.assign(data, args);
};

export default {
  title: "Components/Badge",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2714%3A0",
      },
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=1%3A527",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/components/badge/",
      },
    ],
  },
};

export const Primary = (args) => badge(applyArgs(demoData, args));

Primary.storyName = "Primary (default)";
Primary.argTypes = getArgTypes(demoData);

export const Secondary = (args) =>
  badge(applyArgs({ ...demoData, background: "secondary" }, args));

Secondary.storyName = "Secondary";
Secondary.argTypes = getArgTypes(demoData);

export const Success = (args) =>
  badge(applyArgs({ ...demoData, background: "success" }, args));

Success.storyName = "Success";
Success.argTypes = getArgTypes(demoData);

export const Warning = (args) =>
  badge(applyArgs({ ...demoData, background: "warning" }, args));

Warning.storyName = "Warning";
Warning.argTypes = getArgTypes(demoData);

export const Danger = (args) =>
  badge(applyArgs({ ...demoData, background: "danger" }, args));

Danger.storyName = "Danger";
Danger.argTypes = getArgTypes(demoData);

export const Info = (args) =>
  badge(applyArgs({ ...demoData, background: "info" }, args));

Info.storyName = "Info";
Info.argTypes = getArgTypes(demoData);

export const Light = (args) =>
  badge(applyArgs({ ...demoData, background: "light" }, args));

Light.storyName = "Light";
Light.argTypes = getArgTypes(demoData);

export const Dark = (args) =>
  badge(applyArgs({ ...demoData, background: "dark" }, args));

Dark.storyName = "Dark";
Dark.argTypes = getArgTypes(demoData);
