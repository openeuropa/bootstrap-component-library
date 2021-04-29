import { withDesign } from "storybook-addon-designs";
import demoData from "@oe/data-alert/data";
import alert from "./alert.html.twig";
import { getVariants } from "@oe/story-utils";

const getArgTypes = (data) => {
  return {
    variant: {
      type: { name: "select" },
      description: "Variant of the alert",
      defaultValue: data.variant,
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
    message: {
      type: { name: "string" },
      description: "Content of the alert",
      defaultValue: data.message,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    heading: {
      type: { name: "string" },
      description: "Heading of the alert",
      defaultValue: data.heading,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    dismissible: {
      type: { name: "boolean" },
      description: "Enable the close button",
      defaultValue: true,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Content",
      },
    },
    animated_dismiss: {
      type: { name: "boolean" },
      description: "Enable the animation on dismiss",
      defaultValue: true,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Style",
      },
    },
  };
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: "Components/Alert",
  decorators: [withDesign],
};

export const Primary = (args) => alert(applyArgs(demoData, args));

Primary.storyName = "Primary (default)";
Primary.argTypes = getArgTypes(demoData);
Primary.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2713%3A1",
  },
};

export const Secondary = (args) =>
  alert(applyArgs({ ...demoData, variant: "secondary" }, args));

Secondary.storyName = "Secondary";
Secondary.argTypes = getArgTypes(demoData);
Secondary.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2713%3A1",
  },
};

export const Success = (args) =>
  alert(applyArgs({ ...demoData, variant: "success" }, args));

Success.storyName = "Success";
Success.argTypes = getArgTypes(demoData);
Success.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2713%3A1",
  },
};

export const Warning = (args) =>
  alert(applyArgs({ ...demoData, variant: "warning" }, args));

Warning.storyName = "Warning";
Warning.argTypes = getArgTypes(demoData);
Warning.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2713%3A1",
  },
};

export const Danger = (args) =>
  alert(applyArgs({ ...demoData, variant: "danger" }, args));

Danger.storyName = "Danger";
Danger.argTypes = getArgTypes(demoData);
Danger.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2713%3A1",
  },
};

export const Info = (args) =>
  alert(applyArgs({ ...demoData, variant: "info" }, args));

Info.storyName = "Info";
Info.argTypes = getArgTypes(demoData);
Info.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2713%3A1",
  },
};

export const Light = (args) =>
  alert(applyArgs({ ...demoData, variant: "light" }, args));

Light.storyName = "Light";
Light.argTypes = getArgTypes(demoData);
Light.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2713%3A1",
  },
};

export const Dark = (args) =>
  alert(applyArgs({ ...demoData, variant: "dark" }, args));

Dark.storyName = "Dark";
Dark.argTypes = getArgTypes(demoData);
Dark.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2713%3A1",
  },
};
