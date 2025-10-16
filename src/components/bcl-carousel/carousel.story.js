import { correctPaths, getTitleControls } from "@openeuropa/bcl-story-utils";
import { DrupalAttribute } from "drupal-attribute";

import demoData from "@openeuropa/bcl-data-carousel/data.js";
import carousel from "@openeuropa/bcl-carousel/carousel.html.twig";

const getArgs = (data) => ({
  title: "",
  title_tag: "h2",
  items: data.items,
  autoplay: true,
  disable_touch: false,
  rounded_indicators: false,
  with_controls: true,
  prev_label: data.prev_label,
  next_label: data.next_label,
  with_indicators: data.with_indicators,
  fade: false,
  dark: false,
});

const getArgTypes = () => ({
  ...getTitleControls(),
  items: {
    type: { name: "object", required: true },
    description: "Carousel items",
    table: {
      type: { summary: "array of objects" },
      category: "Content",
    },
  },
  autoplay: {
    name: "automatic sliding",
    type: { name: "boolean" },
    description: "If set to false the carousel won't slide automatically",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "true" },
      category: "Behaviour",
    },
  },
  disable_touch: {
    name: "disable touch swiping",
    type: { name: "boolean" },
    description: "If set to true the swipe behaviour is disabled",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
      category: "Behaviour",
    },
  },
  rounded_indicators: {
    name: "rounded indicators",
    type: { name: "boolean" },
    description: "If set to true the indicators would be circles",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
      category: "Style",
    },
  },
  with_controls: {
    name: "controls",
    type: { name: "boolean" },
    description: "Enable the controls (prev and next buttons)",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "true" },
      category: "Content",
    },
  },
  prev_label: {
    name: "label for the prev button",
    type: { name: "string" },
    description: "The label is for accessibility, it's hidden",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Content",
    },
  },
  next_label: {
    name: "label for the next button",
    type: { name: "string" },
    description: "The label is for accessibility, it's hidden",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Content",
    },
  },
  with_indicators: {
    name: "Indicators",
    type: { name: "boolean" },
    description: "Enable the slides indicators",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
      category: "Content",
    },
  },
  fade: {
    name: "fade",
    type: { name: "boolean" },
    description: "Enable fading transition",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
      category: "Behaviour",
    },
  },
  dark: {
    name: "dark",
    type: { name: "boolean" },
    description: "Enable dark variant",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
      category: "Style",
    },
  },
});

const resetAttrs = (data, args) => {
  data.attributes.removeClass("carousel-fade");
  data.attributes.removeClass("carousel-dark");
  if (!args.disable_touch) {
    data.attributes.removeAttribute("data-bs-touch");
  }
  if (args.autoplay) {
    data.attributes.removeAttribute("data-bs-interval");
  }
};

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new DrupalAttribute();
  }
  correctPaths(data);
  resetAttrs(data, args);

  return Object.assign(data, args);
};

export default {
  title: "Paragraphs/Carousel",
  parameters: {
    badges: ["deprecated"],
    viewport: {
      defaultViewport: "tablet",
    },
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=16%3A25",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.2/components/carousel/",
      },
    ],
  },
};

export const Default = (args) => carousel(applyArgs(demoData, args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);
