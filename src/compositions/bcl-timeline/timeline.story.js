import withCode from "@openeuropa/storybook-addon-code";
import { withDesign } from "storybook-addon-designs";
import { correctPaths, getTitleControls } from "@openeuropa/bcl-story-utils";

import dataDefault from "@openeuropa/bcl-timeline/data";
import timeline from "@openeuropa/bcl-timeline/timeline.html.twig";

const getArgs = (data) => ({
  title: "",
  title_tag: "h2",
  from: data.hide.from,
  to: data.hide.to,
});

const getArgTypes = () => ({
  ...getTitleControls(),
  from: {
    type: { name: "number" },
    name: "hide from",
    description: "Item index after which to start hiding timeline items",
    table: {
      type: { summary: "number" },
      defaultValue: { summary: "" },
      category: "Display",
    },
  },
  to: {
    type: { name: "number" },
    name: "hide to",
    description: "Item index after which to resume displaying timeline items",
    table: {
      type: { summary: "number" },
      defaultValue: { summary: "" },
      category: "Display",
    },
  },
});

const applyArgs = (data, args) => {
  data.hide.from = args.from;
  data.hide.to = args.to;

  return Object.assign(correctPaths(data), args);
};

export default {
  title: "Paragraphs/Timeline",
  decorators: [withCode, withDesign],
  parameters: {
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

Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);
