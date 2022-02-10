import { withDesign } from "storybook-addon-designs";
import { correctPaths } from "@openeuropa/bcl-story-utils";
import subscriptionBlock from "@openeuropa/bcl-subscription-block/subscription-block.html.twig";
import demoData from "@openeuropa/bcl-subscription-block/data/data.js";

export default {
  title: "Compositions/Subscription Block",
  decorators: [withDesign],
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    badges: ["stable"],
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=5859%3A239083",
      },
    ],
  },
};

export const Default = () => subscriptionBlock(correctPaths(demoData));
