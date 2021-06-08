import { withDesign } from "storybook-addon-designs";
import demoData from "@oe/data-navbar/data.js";
import navbar from "./navbar.html.twig";
import { getVariants } from "@oe/story-utils";

// Controls
const getArgTypes = (data) => {
  return {
    brand: {
      name: "brand",
      type: { name: "object" },
      defaultValue: data.brand,
      description: "Logo as label or image",
      table: {
        type: { summary: "object" },
        defaultValue: { summary: "{}" },
        category: "Content",
      },
      control: {
        type: "object",
      },
    },
    navigation: {
      name: "navigation",
      type: { name: "object" },
      defaultValue: data.navigation,
      description: "Links and labels for navigation",
      table: {
        type: { summary: "object" },
        defaultValue: { summary: "{}" },
        category: "Content",
      },
      control: {
        type: "object",
      },
    },
    form: {
      name: "form",
      type: { name: "object" },
      defaultValue: data.form,
      description: "Input in navigation",
      table: {
        type: { summary: "object" },
        defaultValue: { summary: "{}" },
        category: "Content",
      },
      control: {
        type: "object",
      },
    },
    color_set: {
      name: "color set",
      type: { name: "select" },
      defaultValue: "light",
      description: "Available set of color",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "light" },
        category: "Style",
      },
      control: {
        type: "select",
        options: ["light", "dark"],
      },
    },
    background: {
      name: "background",
      type: { name: "select" },
      defaultValue: "",
      description: "Background of navbar",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
      control: {
        type: "select",
        options: getVariants(),
      },
    },
    expand: {
      name: "expand",
      type: { name: "select" },
      defaultValue: "lg",
      description: "Expand breakpoint of menu",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "lg" },
        category: "Style",
      },
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
  };
};

const applyArgs = (data, args) => {
  if (args.background == "dark") {
    args.color_set = "dark";
  }
  if (args.background == "light") {
    args.color_set = "light";
  }
  return Object.assign(data, args);
};

// Stories
export default {
  title: "Components/Navbar",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2896%3A0",
      },
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=30%3A10",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/components/navbar/",
      },
    ],
  },
};

export const Navbar = (args) => navbar(applyArgs(demoData, args));

Navbar.storyName = "Default";
Navbar.argTypes = getArgTypes(demoData);
