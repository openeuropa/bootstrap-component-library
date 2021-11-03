import demoData from "@openeuropa/bcl-fact-figures/data/data.js";
import factFigures from "@openeuropa/bcl-fact-figures/fact-figures.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

demoData.icons_path = defaultSprite;

const linkMore = { ...demoData.link_more };
const getArgs = (data) => {
  return {
    variant: "default",
    title: data.title,
    responsive_columns: 3,
    responsiveness: "md",
    more: true,
    display_icons: true,
  };
};

const getArgTypes = (data) => {
  return {
    variant: {
      type: { name: "select" },
      options: ["default", "block", "block-primary"],
      description: "Variant of the composition",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
        category: "Content",
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
    display_icons: {
      name: "icons visibility",
      type: { name: "boolean" },
      description: "Toggle icon visibility",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Content",
      },
    },
    more: {
      name: "link in the footer",
      type: { name: "boolean" },
      description: "Toggle visibility of the more link",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
        category: "Content",
      },
    },
    responsive_columns: {
      name: "columns number",
      type: { name: "select" },
      options: [1, 2, 3],
      description: "One two or three columns layout",
      table: {
        type: { summary: "integer" },
        defaultValue: { summary: 3 },
        category: "Style",
      },
    },
    responsiveness: {
      name: "breakpoint",
      type: { name: "select" },
      options: ["xs", "sm", "md", "xl"],
      description: "Breakpoint to limit the columns layout to",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "md" },
        category: "Style",
      },
    },
  };
};

const applyArgs = (data, args) => {
  data.attributes.removeClass([
    `bcl-fact-figures--${data.variant}`,
    "text-primary",
  ]);

  if (!args.more) {
    delete data.link_more;
    delete args.more;
  } else {
    if (!data.link_more) {
      data.link_more = linkMore;
    }
  }

  return Object.assign(data, args);
};

export default {
  title: "Paragraphs/Fact & Figures",
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=1126%3A38732",
      },
    ],
  },
};

export const Default = (args) => factFigures(applyArgs(demoData, args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);
