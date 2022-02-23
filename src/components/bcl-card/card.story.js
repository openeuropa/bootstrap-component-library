import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-data-card/data.js";
import demoDataHorizontal from "@openeuropa/bcl-data-card/dataHorizontal.js";
import card from "@openeuropa/bcl-card/card.html.twig";
import { getVariants } from "@openeuropa/bcl-story-utils";
import drupalAttribute from "drupal-attribute";
import isChromatic from "chromatic/isChromatic";

const withBodyPadding = (story) => {
  const demo = story();
  return `
    <div class="px-5">
      ${demo}
    </div>`;
};

const getArgs = (data, type) => {
  const args = {
    title: data.title,
    subtitle: data.subtitle,
    text: data.text,
    content: data.content || "",
    card_header: data.card_header || "",
    card_footer: data.card_footer || "",
    variant: data.variant,
    text_color: data.text_color,
    border_variant: data.border_variant,
  };
  if (type == "horizontal") {
    args.horizontal = data.horizontal;
    args.horizontal_grid = data.horizontal_grid;
  }

  return args;
};

const getArgTypes = (data, type) => {
  let argTypes = {
    title: {
      type: { name: "object" },
      description: "Title of the card",
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
      control: {
        type: "text",
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    card_header: {
      name: "header",
      type: { name: "text" },
      description: "Content of the card header",
      control: {
        type: "text",
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    card_footer: {
      name: "footer",
      type: { name: "text" },
      description: "Content of the card footer",
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
      options: getVariants(false),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
    },
    text_color: {
      name: "text color",
      type: { name: "select" },
      options: ["white", "dark"],
      description: "Text color of the card",
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
      options: getVariants(false),
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
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Layout",
      },
    };
    argTypes.horizontal_grid = {
      name: "grid of the horizontal card",
      type: { name: "object" },
      description: "Horizontal grid layout",
      control: {
        type: "object",
      },
      table: {
        type: { summary: "object" },
        defaultValue: { summary: "{}" },
        category: "Layout",
      },
    };
  } else {
    argTypes.image_position = {
      name: "position of the image",
      type: { name: "select" },
      options: ["bottom", "background", "top"],
      description: "Text color of the card",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
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

  if (data.image && isChromatic()) {
    image.classes = "chromatic-ignore";
  }

  data.image.position = args.image_position;
  // Reset header and footer when using image overlays.
  if (args.image_position === "background") {
    args.card_header = "";
    args.card_footer = "";
  }

  resetAttrs(data);

  return Object.assign(data, args);
};

export default {
  title: "Components/Card",
  decorators: [withDesign, withBodyPadding],
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=9%3A121",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.1/components/card/",
      },
    ],
  },
};

export const Default = (args) => card(applyArgs(demoData, args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);

export const Horizontal = (args) => card(applyArgs(demoDataHorizontal, args));

Horizontal.args = getArgs(demoDataHorizontal, "horizontal");
Horizontal.argTypes = getArgTypes(demoDataHorizontal, "horizontal");
