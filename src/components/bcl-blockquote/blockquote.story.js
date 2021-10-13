import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-data-blockquote/data.js";
import blockquote from "@openeuropa/bcl-blockquote/blockquote.html.twig";

const getArgs = (data) => {
  return {
    quote: data.quote,
    attribution: data.attribution,
    cite: data.cite,
    alignment: "left",
  };
};

const getArgTypes = (data) => {
  return {
    quote: {
      type: { name: "string" },
      description: "Text of blockquote",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    attribution: {
      type: { name: "string" },
      description: "Attribution of blockquote",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    cite: {
      type: { name: "string" },
      description: "Cite of attribution",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    alignment: {
      type: { name: "select" },
      options: ["left", "center", "end"],
      description: "Text alignment",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "left" },
        category: "Style",
      },
    },
  };
};

const applyArgs = (data, args) => {
  data.attributes.removeClass(["text-left", "text-end", "text-center"]);

  return Object.assign(data, args);
};

export default {
  title: "Components/Blockquote",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2884%3A544",
      },
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=2889%3A0",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/content/typography/#blockquotes",
      },
    ],
  },
};

export const Default = (args) => blockquote(applyArgs(demoData, args));

Default.storyName = "Default";
Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);
