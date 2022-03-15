import { withDesign } from "storybook-addon-designs";
import dataDefault from "@openeuropa/bcl-gallery/dataDefault.js";
import gallery from "@openeuropa/bcl-gallery/gallery.html.twig";

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

export const Default = () => gallery(dataDefault);
