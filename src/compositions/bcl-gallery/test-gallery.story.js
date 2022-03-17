import { getByRole, userEvent } from "@storybook/testing-library";
import dataDefault from "@openeuropa/bcl-gallery/data/data";
import gallery from "@openeuropa/bcl-gallery/gallery.html.twig";
import isChromatic from "chromatic/isChromatic";
import { correctPaths } from "@openeuropa/bcl-story-utils";

const chromatic = process.env.STORYBOOK_ENV;

export default {
  title: "Paragraphs/Gallery",
};

export const Modal = () => gallery(correctPaths(dataDefault));

Modal.storyName = "Modal opened";

if (isChromatic() || chromatic) {
  Modal.play = async () => {
    const thumbnail = document.querySelector(
      ".bcl-gallery__grid:first-child li:nth-child(2) a"
    );
    const link = getByRole(thumbnail, "img");
    await userEvent.click(link);
  };
}