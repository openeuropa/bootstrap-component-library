import { correctPaths } from "@openeuropa/bcl-story-utils";

import dataLanding from "@openeuropa/bcl-landing-page/data/data";
import landingPage from "@openeuropa/bcl-landing-page/landing-page.html.twig";

export default {
  title: "Features/Landing Page",
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    badges: ["stable", "deprecated"],
    badgesConfig: {
      stable: {
        title: "v1",
      },
    },
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/N0nAH22yz5vfDL6yx8yemr/UCPKN-Mockup?node-id=1024%3A125486",
      },
    ],
    a11y: {
      config: {
        rules: [{ id: "frame-tested", enabled: false }],
      },
    },
  },
};

export const Default = () => landingPage(correctPaths(dataLanding));
