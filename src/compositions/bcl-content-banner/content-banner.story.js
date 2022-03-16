import isChromatic from "chromatic/isChromatic";
import drupalAttribute from "drupal-attribute";
import { correctPaths } from "@openeuropa/bcl-story-utils";

import dataDefault from "@openeuropa/bcl-content-banner/data/data";
import contentBanner from "@openeuropa/bcl-content-banner/content-banner.html.twig";

const button = { ...dataDefault.button };

const getArgs = () => {
  return {
    background: "gray",
    image_size: "lg",
    action_button: false,
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
    data.attributes.removeClass(["col-md-10"]);
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
};

export const Default = (args) => contentBanner(applyArgs(dataDefault, args));
Default.args = getArgs();
Default.argTypes = getArgTypes();
