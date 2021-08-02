import { withDesign } from "storybook-addon-designs";
import demoSingle from "@openeuropa/bcl-data-toasts/data.js";
import demoMultiple from "@openeuropa/bcl-data-toasts/data-multiple.js";
import toasts from "./toasts.html.twig";

const getArgs = (data) => {
  return {
    with_wrapper: data.with_wrapper,
    wrapper_classes: data.wrapper_classes,
    wrapper_aria_live: data.wrapper_aria_live,
    with_container: data.with_container,
    container_classes: data.container_classes,
    toasts: data.toasts,
  };
};

const getArgTypes = (data) => {
  return {
    with_wrapper: {
      name: "with a wrapper",
      type: { name: "boolean" },
      description: "With an external wrapper",
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
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Container",
      },
    },
    toasts: {
      type: { name: "object" },
      description: "Toasts",
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
        url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=3087%3A0",
      },
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=53%3A110",
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
Toast.args = getArgs(demoSingle);
Toast.argTypes = getArgTypes(demoSingle);

export const Toasts = (args) => toasts(applyArgs(demoMultiple, args));

Toasts.storyName = "Multiple toasts";
Toasts.args = getArgs(demoMultiple);
Toasts.argTypes = getArgTypes(demoMultiple);
