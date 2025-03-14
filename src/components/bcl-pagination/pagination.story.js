import { correctPaths } from "@openeuropa/bcl-story-utils";

import demoData from "@openeuropa/bcl-data-pagination/data.js";
import pagination from "@openeuropa/bcl-pagination/pagination.html.twig";

const getArgs = () => ({
  size: "default",
  alignment: "default",
  enable_prev_next_icon: false,
  enable_first_last_icon: true,
  ellipsis_before: false,
  ellipsis_after: false,
  icon_path: false,
});

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
    ellipsis_before: {
      name: "enable ellipsis before",
      type: { name: "boolean" },
      description: "Enable ellipsis icon before elements",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    ellipsis_after: {
      name: "enable ellipsis after",
      type: { name: "boolean" },
      description: "Enable ellipsis icon after elements",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    icon_path: {
      name: "path to bcl sprite file (icon_path)",
      type: { name: "boolean" },
      description: `items like prev, next, first, last
        will be rendered as icons instead of html entities, it is also
        possible to pass icon objects along those items to use custom icons.`,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
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
        defaultValue: { summary: "true" },
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

  if (args.icon_path) {
    args.icon_path = "/icons.svg";
  } else {
    args.icon_path = "";
  }

  return Object.assign(data, correctPaths(args));
};

export default {
  title: "Components/Pagination",
  parameters: {
    badges: ["deprecated"],
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=42%3A58",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.2/components/pagination/",
      },
    ],
  },
};

export const Default = (args) =>
  pagination(applyArgs(correctPaths(demoData), args));
Default.args = getArgs();
Default.argTypes = getArgTypes(demoData);
