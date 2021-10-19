import dataDefault from "@openeuropa/bcl-banner/dataDefault.js";
import dataPrimary from "@openeuropa/bcl-banner/dataPrimary.js";
import dataImage from "@openeuropa/bcl-banner/dataImage.js";
import dataShade from "@openeuropa/bcl-banner/dataShade.js";
import banner from "@openeuropa/bcl-banner/banner.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

const getArgs = (data) => {
  const args = {
    title: data.title,
    description: data.description,
    label: data.link.label,
    centered: true,
    hero: false,
    full_width: false,
  };
  if (data.image) {
    args.image = data.image || "";
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {
    title: {
      type: { name: "string", required: true },
      description: "Heading of the banner",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    description: {
      type: "string",
      description: "Sub-heading of the banner",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    label: {
      type: "string",
      description: "Label of the call to action link",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    centered: {
      type: "boolean",
      description: "Whether the content of the banner is centered or not",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
        category: "Display",
      },
    },
    hero: {
      type: "boolean",
      description: "Display banner as hero banner",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
        category: "Display",
      },
    },
    full_width: {
      name: "full-width",
      type: "boolean",
      description:
        "Possibility of having a full-width banner within a bootstrap container",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
        category: "Display",
      },
    },
  };
  if (data.image) {
    argTypes.image = {
      type: "string",
      description: "Path or Url of the background image",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    };
  }

  return argTypes;
};

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }
  data.title = args.title;
  data.description = args.description;
  data.link.label = args.label;
  if (data.link.icon) {
    data.link.icon.path = defaultSprite;
  }
  if (args.centered) {
    data.attributes.removeClass("text-center");
  } else {
    data.attributes.addClass("text-center");
  }
  if (args.hero) {
    data.attributes.removeClass("hero");
  } else {
    data.attributes.addClass("hero");
  }
  data.full_width = args.width === "inside";

  return Object.assign(data, args);
};

export default {
  title: "Paragraphs/Banners",
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=6194%3A73261",
      },
    ],
  },
};

export const Default = (args) => banner(applyArgs(dataDefault, args));

Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);

export const Primary = (args) => banner(applyArgs(dataPrimary, args));

Primary.args = getArgs(dataPrimary);
Primary.argTypes = getArgTypes(dataPrimary);

export const Image = (args) => banner(applyArgs(dataImage, args));

Image.storyName = "Image - text-block";
Image.args = getArgs(dataImage);
Image.argTypes = getArgTypes(dataImage);

export const Shade = (args) => banner(applyArgs(dataShade, args));

Shade.storyName = "Image - shade";
Shade.args = getArgs(dataShade);
Shade.argTypes = getArgTypes(dataShade);
