import { getByTestId, userEvent } from "@storybook/testing-library";
import dataDefault from "@openeuropa/bcl-gallery/data/data";
import gallery from "@openeuropa/bcl-gallery/gallery.html.twig";
import isChromatic from "chromatic/isChromatic";
import { correctPaths } from "@openeuropa/bcl-story-utils";

const chromatic = process.env.STORYBOOK_ENV;

export default {
  title: "Paragraphs/Gallery",
  parameters: {
    badges: ["deprecated"],
  },
};

export const Modal = () => gallery(correctPaths(dataDefault));

Modal.storyName = "Modal opened";

if (isChromatic() || chromatic) {
  Modal.play = async () => {
    const container = document.querySelector(
      ".bcl-gallery__grid:first-child li:nth-child(2) a"
    );
    const thumbnail = container.querySelector(".bcl-gallery__item-overlay");
    thumbnail.dataset.testid = "thumb-test";
    const link = getByTestId(container, "thumb-test");
    await userEvent.click(link);
  };
}
