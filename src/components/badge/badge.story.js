import { withDesign } from "storybook-addon-designs";
import demoData from "@oe/data-badge/data.js";
import badge from "./badge.html.twig";
import { getVariants } from "@oe/story-utils";

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
      defaultValue: data.background,
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
    hidden_text: {
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

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: "Components/badge",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2714%3A0",
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
