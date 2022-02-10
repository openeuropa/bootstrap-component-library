import { withDesign } from "storybook-addon-designs";
import { correctPaths, initScrollspy } from "@openeuropa/bcl-story-utils";
import subscriptionBlock from "@openeuropa/bcl-subscription-block/subscription-block.html.twig";
import blockData from "@openeuropa/bcl-subscription-block/data/data_block.js";

export default {
  title: "Compositions/Subscription",
  decorators: [withDesign, initScrollspy],
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=5859%3A239083",
      },
    ],
  },
};

export const Block = () => subscriptionBlock(correctPaths(blockData));
