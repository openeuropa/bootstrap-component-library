import dataDefault from "@openeuropa/bcl-timeline/data";
import timeline from "@openeuropa/bcl-timeline/timeline.html.twig";
import defaultSprite from "@openeuropa/bcl-theme-default/icons/bcl-default-icons.svg";

const getArgs = (data) => {
  return {
    title: "",
    title_tag: "h2",
    from: data.hide.from,
    to: data.hide.to,
  };
};

const getArgTypes = (data) => {
  return {
    from: {
      type: { name: "number" },
      name: "hide from",
      description: "Item index after which to start hiding timeline items",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "" },
        category: "Display",
      },
    },
    to: {
      type: { name: "number" },
      name: "hide to",
      description: "Item index after which to resume displaying timeline items",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "" },
        category: "Display",
      },
    },
    title: {
      type: { name: "string" },
      description: "Title of the block",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    title_tag: {
      name: "title tag",
      type: { name: "string" },
      description: "Html tag of the title",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "h2" },
        category: "Content",
      },
    },
  };
};

const applyArgs = (data, args) => {
  if (data.icon_path) {
    data.icon_path = defaultSprite;
  }
  data.hide.from = args.from;
  data.hide.to = args.to;

  return Object.assign(data, args);
};

export default {
  title: "Paragraphs/Timeline",
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=6017%3A70268",
      },
    ],
  },
};

export const Default = (args) => timeline(applyArgs(dataDefault, args));

Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);
