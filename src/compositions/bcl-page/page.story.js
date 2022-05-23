import { initScrollspy, correctPaths } from "@openeuropa/bcl-story-utils";
import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";

import { demoData, demoData1, demoData2 } from "@openeuropa/bcl-page/data/data";

import page from "@openeuropa/bcl-page/page.html.twig";

export default {
  title: "Features/Page",
  decorators: [withCode, withDesign, initScrollspy],
  parameters: {
    a11y: {
      config: {
        rules: [{ id: "frame-tested", enabled: false }],
      },
    },
    badges: ["stable"],
    badgesConfig: {
      stable: {
        title: "v1",
      },
    },
    layout: "fullscreen",
    controls: {
      disable: true,
    },
    design: [
      {
        name: "Mockup - Page (desktop)",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=3962%3A141999",
      },
      {
        name: "Mockup -Page (mobile)",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=3962%3A142115",
      },
    ],
  },
};

export const FullPage = () => page(correctPaths(demoData));

FullPage.storyName = "Full article (example 1)";

export const FullPage1 = () => page(correctPaths(demoData1));

FullPage1.storyName = "Full article (example 2)";

export const FullPage2 = () => page(correctPaths(demoData2));

FullPage2.storyName = "Full article (example 3)";
