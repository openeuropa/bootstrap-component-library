import { correctPaths, getTitleControls } from "@openeuropa/bcl-story-utils";

import dataDefault from "@openeuropa/bcl-gallery/data/data.js";
import gallery from "@openeuropa/bcl-gallery/gallery.html.twig";

const getArgs = (data) => ({
  title: data.title,
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
  title: "Paragraphs/Gallery",
  parameters: {
    badges: ["deprecated"],
  },
};

export const Default = (args) => gallery(applyArgs(dataDefault, args));

Default.storyName = "Default";
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes();
