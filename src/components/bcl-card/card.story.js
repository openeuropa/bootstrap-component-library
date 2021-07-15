import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-data-card/data.js";
import demoDataHorizontal from "@openeuropa/bcl-data-card/dataHorizontal.js";
import card from "./card.html.twig";
import { getVariants } from "@openeuropa/bcl-story-utils";
import drupalAttribute from "drupal-attribute";

const getArgTypes = (data, type) => {
  let argTypes = {
    title: {
      type: { name: "object" },
      description: "Title of the card",
      defaultValue: data.title,
      control: {
        type: "object",
      },
      table: {
        type: { summary: "object" },
        defaultValue: { summary: "{}" },
        category: "Content",
      },
    },
    subtitle: {
      type: { name: "object" },
      description: "Subtitle of the card",
      defaultValue: data.subtitle,
      control: {
        type: "object",
      },
      table: {
        type: { summary: "object" },
        defaultValue: { summary: "{}" },
        category: "Content",
      },
    },
    text: {
      type: { name: "object" },
      description: "Text of the card",
      defaultValue: data.text,
      control: {
        type: "object",
      },
      table: {
        type: { summary: "object" },
        defaultValue: { summary: "{}" },
        category: "Content",
      },
    },
    content: {
      type: { name: "string" },
      description: "Custom content of the card",
      defaultValue: data.content,
      control: {
        type: "text",
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    variant: {
      type: { name: "select" },
      description: "Variant of the card",
      defaultValue: data.variant,
      control: {
        type: "select",
        options: getVariants(false),
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
    },
    text_color: {
      name: "text color",
      type: { name: "select" },
      description: "Text color of the card",
      defaultValue: data.text_color,
      control: {
        type: "select",
        options: ["white", "dark"],
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
    },
    border_variant: {
      name: "border variant",
      type: { name: "select" },
      description: "Border Variant of the card",
      defaultValue: data.border_variant,
      control: {
        type: "select",
        options: getVariants(false),
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
    },
  };
  if (type == "horizontal") {
    argTypes.horizontal = {
      type: { name: "boolean" },
      description: "Horizontal style of card",
      defaultValue: data.horizontal,
      control: {
        type: "select",
        options: [data.horizontal],
      },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Layout",
      },
    };
    argTypes.horizontal_grid = {
      type: { name: "object" },
      description: "Horizontal grid layout",
      defaultValue: data.horizontal_grid,
      control: {
        type: "object",
      },
      table: {
        type: { summary: "object" },
        defaultValue: { summary: "{}" },
        category: "Layout",
      },
    };
  }
  return argTypes;
};

const resetAttrs = (data) => {
  data.attributes.removeClass(`bg-${data.variant}`);
  data.attributes.removeClass("text-dark").removeClass("text-white");
  data.attributes.removeClass(`border-${data.border_variant}`);
};

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }
  resetAttrs(data);
  return Object.assign(data, args);
};

export default {
  title: "Components/Card",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2788%3A0",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/components/card/",
      },
    ],
  },
};

export const Default = (args) => card(applyArgs(demoData, args));

Default.argTypes = getArgTypes(demoData);

export const Horizontal = (args) => card(applyArgs(demoDataHorizontal, args));

Horizontal.argTypes = getArgTypes(demoDataHorizontal, "horizontal");
