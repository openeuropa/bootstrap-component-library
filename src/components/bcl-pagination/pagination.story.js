import { withDesign } from "storybook-addon-designs";
import { correctPaths } from "@openeuropa/bcl-story-utils";

import demoData from "@openeuropa/bcl-data-pagination/data.js";
import demoCustomIconsData from "@openeuropa/bcl-data-pagination/data--custom-icons.js";
import pagination from "@openeuropa/bcl-pagination/pagination.html.twig";

const getArgs = (data) => {
  return {
    size: "default",
    alignment: "default",
    enable_icon: data.enable_icon,
  };
};

const getArgTypes = (data) => {
  return {
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
    enable_icon: {
      name: "enable icon",
      type: { name: "boolean" },
      description: "Enable icon for previous and next",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
  };
};

const applyArgs = (data, args) => {
  // if (data.next.icon) {
  //   data.next.icon.path = defaultSprite;
  //   data.next.icon.size = "m";
  // }

  // if (data.prev.icon) {
  //   data.prev.icon.path = defaultSprite;
  //   data.prev.icon.size = "m";
  // }

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

export const customIcons = (args) =>
  pagination(applyArgs(correctPaths(demoCustomIconsData), args));

customIcons.storyName = "With Custom Icons";
customIcons.args = getArgs(demoCustomIconsData);
customIcons.argTypes = getArgTypes(demoCustomIconsData);
