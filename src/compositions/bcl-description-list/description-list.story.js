import demoData from "@openeuropa/bcl-description-list/data.js";
import descriptionList from "@openeuropa/bcl-description-list/description-list.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

const getArgs = (data) => {
  return {
    horizontal: data.horizontal || false,
  };
};

const getArgTypes = () => {
  return {
    horizontal: {
      name: "horizontal",
      type: { name: "boolean" },
      description: "Description list on horizontal layout",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
        category: "Style",
      },
    },
  };
};

const applyArgs = (data, args) => {
  if (data.icon) {
    data.icon.path = defaultSprite;
  }
  return Object.assign(data, args);
};

export default {
  title: "Paragraphs/Description List",
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=5976%3A68483",
      },
    ],
  },
};

export const Default = (args) => descriptionList(applyArgs(demoData, args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes();
