import { withDesign } from "storybook-addon-designs";
import { getByRole, userEvent } from "@storybook/testing-library";
import dataDefault from "./data/dataDefault.js";
import gallery from "@openeuropa/bcl-gallery/gallery.html.twig";
import isChromatic from "chromatic/isChromatic";
import { correctPaths } from "@openeuropa/bcl-story-utils";

const chromatic = process.env.STORYBOOK_ENV;

export default {
  title: "Paragraphs/Gallery",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit---Components?node-id=8654%3A83333",
      },
    ],
  },
};

export const Default = () => gallery(correctPaths(dataDefault));

if (isChromatic() || chromatic) {
  Default.play = async () => {
    const thumbnail = document.querySelector(
      ".bcl-gallery__grid:first-child li:nth-child(2) a"
    );
    const link = getByRole(thumbnail, "img");
    await userEvent.click(link);
  };
}
