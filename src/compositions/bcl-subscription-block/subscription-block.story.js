import { correctPaths } from "@openeuropa/bcl-story-utils";

import subscriptionBlock from "@openeuropa/bcl-subscription-block/subscription-block.html.twig";
import demoData from "@openeuropa/bcl-subscription-block/data.js";

export default {
  title: "Compositions/Subscription Block",
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    badges: ["stable", "deprecated"],
  },
};

export const Default = () => subscriptionBlock(correctPaths(demoData));
