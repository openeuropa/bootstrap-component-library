import { withDesign } from "storybook-addon-designs";
import demoData from "@oe/data-blockquote/data";
import blockquote from "./blockquote.html.twig";

const getArgTypes = (data) => {
  return {
    quote: {
      type: { name: "string" },
      description: "Text of blockquote",
      defaultValue: data.quote,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    attribution: {
      type: { name: "string" },
      description: "Attribution of blockquote",
      defaultValue: data.attribution,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    cite: {
      type: { name: "string" },
      description: "Cite of attribution",
      defaultValue: data.cite,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    alignment: {
      type: { name: "select" },
      description: "Text alignment",
      defaultValue: "left",
      control: {
        type: "select",
        options: ["left", "center", "end"],
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "left" },
        category: "Style",
      },
    },
  };
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: "Components/Blockquote",
  decorators: [withDesign],
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2788%3A0",
  },
};

export const Default = (args) => blockquote(applyArgs(demoData, args));

Default.storyName = "Default";
Default.argTypes = getArgTypes(demoData);
