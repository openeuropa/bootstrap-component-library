import dataDefault from "@openeuropa/bcl-gallery/data/data";
import gallery from "@openeuropa/bcl-gallery/gallery.html.twig";
import { correctPaths } from "@openeuropa/bcl-story-utils";

export default {
  title: "Paragraphs/Gallery",
  parameters: {
    badges: ["deprecated"],
  },
};

export const Modal = () => gallery(correctPaths(dataDefault));

Modal.storyName = "Modal opened";
