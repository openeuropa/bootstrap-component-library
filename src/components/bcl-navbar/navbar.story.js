import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import { getVariants, correctPaths } from "@openeuropa/bcl-story-utils";
import drupalAttribute from "drupal-attribute";

import demoData from "@openeuropa/bcl-data-navbar/data.js";
import navbar from "@openeuropa/bcl-navbar/navbar.html.twig";

const getArgs = () => ({
  color_set: "light",
  expand: "lg",
});

const getArgTypes = () => ({
  color_set: {
    name: "color set",
    type: { name: "select" },
    description: "Available set of color",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "light" },
      category: "Style",
    },
    options: ["light", "dark"],
  },
  background: {
    name: "background",
    type: { name: "select" },
    options: getVariants(),
    description: "Background of navbar",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Style",
    },
  },
  expand: {
    name: "expand",
    type: { name: "select" },
    options: ["sm", "md", "lg"],
    description: "Expand breakpoint of menu",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "lg" },
      category: "Style",
    },
  },
});

const resetAttrs = (data) => {
  data.attributes.removeClass(`navbar-${data.color_set}`);
  data.attributes.removeClass(`bg-${data.background}`);
  data.attributes.removeClass(`navbar-expand-${data.expand}`);
};

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }
  resetAttrs(data);
  if (args.background === "dark") {
    args.color_set = "dark";
  }
  if (args.background === "light") {
    args.color_set = "light";
  }
  return Object.assign(correctPaths(data), args);
};

// Stories
export default {
  title: "Components/Navbar",
  decorators: [withCode, withDesign],
  parameters: {
    badges: ["deprecated"],
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=30%3A10",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.2/components/navbar/",
      },
    ],
  },
};

export const Navbar = (args) => navbar(applyArgs(demoData, args));

Navbar.storyName = "Default";
Navbar.args = getArgs(demoData);
Navbar.argTypes = getArgTypes(demoData);
