import { withDesign } from "storybook-addon-designs";
import file from "@openeuropa/bcl-file/file.html.twig";
import demoData from "@openeuropa/bcl-file/data";
import demoCardData from "@openeuropa/bcl-file/dataCard";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

const getArgs = (data) => {
  return {
    inline_download: data.inline_download || true,
  };
};

const getArgTypes = () => {
  return {
    inline_download: {
      name: "inline download",
      type: { name: "boolean" },
      description: "Inline download button",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
  };
};

export default {
  title: "Paragraphs/File",
  decorators: [withDesign],
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
    design: [
      {
        name: "Mockup - File",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=6818%3A91821",
      },
    ],
  },
};

const correctPaths = (data) => {
  if (data.icon) {
    data.icon.path = defaultSprite;
  }
  data.download.icon.path = defaultSprite;
  data.translation.label.icon.path = defaultSprite;
  data.translation.items.forEach((item) => {
    if (item.type != "content") {
      item.download.icon.path = defaultSprite;
    }
  });

  return data;
};

const applyArgs = (data, args) => {
  correctPaths(data);
  return Object.assign(data, args);
};

export const Default = (args) => file(applyArgs(demoData, args));
Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);

export const Card = (args) => file(applyArgs(demoCardData, args));
Card.args = getArgs(demoCardData);
Card.argTypes = getArgTypes(demoCardData);
