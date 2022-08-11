import { withDesign } from "storybook-addon-designs";
import { getTitleControls } from "@openeuropa/bcl-story-utils";
import drupalAttribute from "drupal-attribute";

import demoData from "@openeuropa/bcl-data-accordion/data.js";
import accordion from "@openeuropa/bcl-accordion/accordion.html.twig";

const getArgs = (data) => ({
  title: "",
  title_tag: "h2",
  toggle1: data.items[0].title,
  content1: data.items[0].content,
  flush: false,
});

const getArgTypes = () => ({
  ...getTitleControls(),
  toggle1: {
    name: `toggle 1`,
    type: { name: "string", required: true },
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
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: false },
      category: "Style",
    },
  },
});

const resetAttrs = (data) => {
  data.attributes.removeClass("accordion-flush");
};

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }
  resetAttrs(data);
  data.items[0].title = args.toggle1;
  data.items[0].content = args.content1;

  return Object.assign(data, args);
};

export default {
  title: "Paragraphs/Accordion",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=2872%3A412",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.2/components/accordion/",
      },
    ],
  },
};

export const Default = (args) => accordion(applyArgs(demoData, args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);
