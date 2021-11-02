import dataDefault from "@openeuropa/bcl-timeline/dataDefault.js";
import timeline from "@openeuropa/bcl-timeline/timeline.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

const applyArgs = (data, args) => {
  if (data.icon_path) {
    data.icon_path = defaultSprite;
  }

  return Object.assign(data, args);
};

export default {
  title: "Paragraphs/Timeline",
  parameters: {
    controls: { disable: true },
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=6017%3A70268",
      },
    ],
  },
};

export const Default = (args) => timeline(applyArgs(dataDefault, args));
