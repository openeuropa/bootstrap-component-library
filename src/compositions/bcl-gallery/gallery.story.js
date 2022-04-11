import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";

import dataDefault from "@openeuropa/bcl-gallery/data/data.js";
import gallery from "@openeuropa/bcl-gallery/gallery.html.twig";
import { correctPaths } from "@openeuropa/bcl-story-utils";

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

export const Default = () => gallery(correctPaths(dataDefault));
Default.storyName = "Default";
