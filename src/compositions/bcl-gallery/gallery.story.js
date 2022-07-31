import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";

import dataDefault from "@openeuropa/bcl-gallery/data/data";
import gallery from "@openeuropa/bcl-gallery/gallery.html.twig";
import { correctPaths, getTitleControls } from "@openeuropa/bcl-story-utils";

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
  decorators: [withCode, withDesign],
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

export const Default = (args) => gallery(applyArgs(dataDefault, args));

Default.storyName = "Default";
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes();
