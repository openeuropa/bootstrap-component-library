import { initScrollspy, correctPaths } from "@openeuropa/bcl-story-utils";

import { demoData, demoData1, demoData2 } from "@openeuropa/bcl-page/data/data";
import page from "@openeuropa/bcl-page/page.html.twig";

export default {
  title: "Features/Page",
  decorators: [initScrollspy],
  parameters: {
    a11y: {
      config: {
        rules: [{ id: "frame-tested", enabled: false }],
      },
    },
    badges: ["stable", "deprecated"],
    badgesConfig: {
      stable: {
        title: "v1",
      },
    },
    layout: "fullscreen",
    controls: {
      disable: true,
    },
  },
};

export const FullPage = () => page(correctPaths(demoData));

FullPage.storyName = "Full article (example 1)";

export const FullPage1 = () => page(correctPaths(demoData1));

FullPage1.storyName = "Full article (example 2)";

export const FullPage2 = () => page(correctPaths(demoData2));

FullPage2.storyName = "Full article (example 3)";
