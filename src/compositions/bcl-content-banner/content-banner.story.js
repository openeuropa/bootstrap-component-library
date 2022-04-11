import withCode from "@openeuropa/storybook-addon-code";
import { withDesign } from "storybook-addon-designs";

import isChromatic from "chromatic/isChromatic";
import drupalAttribute from "drupal-attribute";
import { correctPaths } from "@openeuropa/bcl-story-utils";

import dataDefault from "@openeuropa/bcl-content-banner/data/data.js";
import dataLinks from "@openeuropa/bcl-content-banner/data/data--links.js";
import dataActionButton from "@openeuropa/bcl-content-banner/data/data--action-button";
import contentBanner from "@openeuropa/bcl-content-banner/content-banner.html.twig";

const button = { ...dataActionButton.action_button };
const links = [...dataLinks.links];
const badges = [...dataDefault.badges];

const getArgs = () => {
  return {
    background: "gray",
    image_size: "md",
    badges: true,
    action_button: false,
    links: false,
  };
};

const getArgTypes = () => {
  return {
    background: {
      type: { name: "select" },
      options: ["white", "gray"],
      description: "White or gray background",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "white" },
      },
    },
    action_button: {
      name: "action button",
      type: { name: "boolean" },
      description: "Toggle button",
      table: {
        type: { summary: "object" },
        defaultValue: { summary: "{}" },
      },
    },
    links: {
      type: { name: "boolean" },
      description: "Toggle links",
      table: {
        type: { summary: "array" },
        defaultValue: { summary: "[]" },
      },
    },
    badges: {
      type: { name: "boolean" },
      description: "Toggle badges",
      table: {
        type: { summary: "array" },
        defaultValue: { summary: "[]" },
      },
    },
    image_size: {
      name: "image size",
      type: { name: "select" },
      options: ["sm", "md", "lg"],
      description: "Size of the image",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "md" },
      },
    },
  };
};

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }
  if (args.action_button) {
    data.action_button = button;
  } else {
    delete data.action_button;
  }
  if (args.links) {
    data.links = links;
  } else {
    delete data.links;
  }
  if (!args.badges) {
    delete data.badges;
  } else {
    if (!data.badges) {
      data.badges = badges;
    }
  }

  if (data.image && isChromatic()) {
    data.image.classes = "chromatic-ignore";
  }

  data.background = args.background;
  data.image_size = args.image_size;
  correctPaths(data);

  return data;
};

export default {
  title: "Compositions/Content banner",
  decorators: [withCode, withDesign],
  parameters: {
    layout: "fullscreen",
    design: [
      {
        name: "Mockup - Content banner",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit---Components?node-id=9664%3A107055",
      },
    ],
    badges: ["stable"],
  },
};

export const Default = (args) => contentBanner(applyArgs(dataDefault, args));
Default.args = getArgs();
Default.argTypes = getArgTypes();
