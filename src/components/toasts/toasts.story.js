import { withDesign } from "storybook-addon-designs";
import demoSingle from "@oe/data-toasts/data.js";
import demoMultiple from "@oe/data-toasts/data-multiple.js";
import toasts from "./toasts.html.twig";

const getArgTypes = (data) => {
  return {
    with_wrapper: {
      name: "with a wrapper",
      type: { name: "boolean" },
      description: "With an external wrapper",
      defaultValue: data.with_wrapper,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Wrapper",
      },
    },
    wrapper_classes: {
      name: "classes for the wrapper",
      type: { name: "string" },
      description: "External wrapper classes, if any.",
      defaultValue: data.wrapper_classes,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Wrapper",
      },
    },
    wrapper_aria_live: {
      name: "aria live for the wrapper",
      type: { name: "string" },
      description: "aria-live attribute to be set on the wrapper",
      defaultValue: data.wrapper_aria_live,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Wrapper",
      },
    },
    with_container: {
      name: "with a container",
      type: { name: "boolean" },
      description: "With a container for multiple toasts",
      defaultValue: data.with_container,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Container",
      },
    },
    container_classes: {
      type: { name: "string" },
      name: "classes for the container",
      description: "Container classes, if any.",
      defaultValue: data.container_classes,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Container",
      },
    },
    toasts: {
      type: { name: "object" },
      description: "Toasts",
      defaultValue: data.toasts,
      table: {
        type: { summary: "object" },
        category: "Content",
      },
    },
  };
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

// Stories
export default {
  title: "Components/Toasts",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=3087%3A0",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/components/toasts/",
      },
    ],
  },
};

export const Toast = (args) => toasts(applyArgs(demoSingle, args));

Toast.storyName = "Single toast";
Toast.argTypes = getArgTypes(demoSingle);

export const Toasts = (args) => toasts(applyArgs(demoMultiple, args));

Toasts.storyName = "Multiple toasts";
Toasts.argTypes = getArgTypes(demoMultiple);
