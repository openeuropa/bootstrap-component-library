import { withDesign } from "storybook-addon-designs";
import { correctPaths } from "@openeuropa/bcl-story-utils";

import demoData from "@openeuropa/bcl-data-pagination/data.js";
import pagination from "@openeuropa/bcl-pagination/pagination.html.twig";

const getArgs = (data) => {
  return {
    size: "default",
    alignment: "default",
    enable_prev_next_icon: data.enable_prev_next_icon,
    enable_first_last_icon: data.enable_first_last_icon,
  };
};

const getArgTypes = (data) => {
  const argTypes = {
    size: {
      type: { name: "select" },
      description: "size",
      options: ["default", "sm", "lg"],
      control: {
        type: "select",
        labels: {
          sm: "small",
          default: "default",
          lg: "large",
        },
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
    },
    alignment: {
      type: { name: "select" },
      description: "alignment",
      options: ["default", "center", "end"],
      control: {
        type: "select",
        labels: {
          default: "default",
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
    enable_prev_next_icon: {
      name: "enable previous and next icons",
      type: { name: "boolean" },
      description: "Enable icon for previous and next",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
  };
  if (data.last && data.first) {
    argTypes.enable_first_last_icon = {
      name: "enable first and last icons",
      type: { name: "boolean" },
      description: "Enable icon for first and last",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    };
  }

  return argTypes;
};

const applyArgs = (data, args) => {
  if (args.size === "default") {
    args.size = "";
  }

  if (args.alignment === "default") {
    args.alignment = "";
  }

  return Object.assign(data, args);
};

export default {
  title: "Components/Pagination",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=42%3A58",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.1/components/pagination/",
      },
    ],
  },
};

export const Default = (args) =>
  pagination(applyArgs(correctPaths(demoData), args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);
