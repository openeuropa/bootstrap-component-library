import dataDefault from "@openeuropa/bcl-content-banner/data/data.js";
import contentBanner from "@openeuropa/bcl-content-banner/content-banner.html.twig";

const button = { ...dataDefault.button };

const getArgs = (data) => {
  return {
    background: "gray",
    button: false,
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
    button: {
      type: { name: "boolean" },
      description: "Toggle button",
      table: {
        type: { summary: "object" },
        defaultValue: { summary: "{}" },
      },
    },
  };
};

const applyArgs = (data, args) => {
  if (args.button) {
    data.button = button;
  } else {
    delete data.button;
    data.attributes.removeClass(["col-md-10"]);
  }
  data.background = args.background;

  return data;
};

export default {
  title: "Compositions/Content banner",
};

export const Default = (args) => contentBanner(applyArgs(dataDefault, args));

Default.args = getArgs();
Default.argTypes = getArgTypes();
