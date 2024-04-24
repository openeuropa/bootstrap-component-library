import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import { userEvent, within } from "@storybook/testing-library";
import isChromatic from "chromatic/isChromatic";
import { correctPaths, getTitleControls } from "@openeuropa/bcl-story-utils";

import file from "@openeuropa/bcl-file/file.html.twig";
import demoData from "@openeuropa/bcl-file/data/data.js";
import demoCardData from "@openeuropa/bcl-file/data/data--card";

const chromatic = process.env.STORYBOOK_ENV;

const getArgs = () => ({
  title: "",
  title_tag: "h2",
});

const getArgTypes = () => ({
  ...getTitleControls(),
});

const applyArgs = (data, args) => {
  correctPaths(data);

  return Object.assign(data, args);
};

export default {
  title: "Paragraphs/File",
  decorators: [withCode, withDesign],
  parameters: {
    badges: ["deprecated"],
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

export const Default = (args) => file(applyArgs(demoData, args));

Default.args = getArgs();
Default.argTypes = getArgTypes();

export const Card = (args) => file(applyArgs(demoCardData, args));

Card.args = getArgs();
Card.argTypes = getArgTypes();

if (isChromatic() || chromatic) {
  Card.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const languages = canvas.getByText("Other languages (3)");
    await userEvent.click(languages);
  };
}
