import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-data-accordion/data.js";
import accordion from "./accordion.html.twig";
import drupalAttribute from "drupal-attribute";

const getArgTypes = (data) => {
  return {
    toggle1: {
      name: `toggle 1`,
      type: { name: "string", required: true },
      defaultValue: data.items[0].title,
      description: `Text of the first accordion toggler`,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
      control: {
        type: "text",
      },
    },
    content1: {
      name: `content 1`,
      type: { name: "string", required: true },
      defaultValue: data.items[0].content,
      description: "Text of the first accordion item content",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
      control: {
        type: "text",
      },
    },
    flush: {
      type: { name: "boolean" },
      description: "Variant of the accordion",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
        category: "Style",
      },
    },
  };
};

const resetAttrs = (data) => {
  data.attributes.removeClass("accordion-flush");
};

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }
  resetAttrs(data);
  data.items[0].title = args[`toggle1`];
  data.items[0].content = args[`content1`];
  return Object.assign(data, args);
};

export default {
  title: "Components/Accordion",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2892%3A13354",
      },
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=2872%3A412",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/components/accordion/",
      },
    ],
  },
};

export const Default = (args) => accordion(applyArgs(demoData, args));

Default.argTypes = getArgTypes(demoData);
