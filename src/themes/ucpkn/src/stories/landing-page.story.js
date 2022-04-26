import withCode from "@openeuropa/storybook-addon-code";
import { withDesign } from "storybook-addon-designs";

import demoData from "@openeuropa/bcl-landing-page/data.js";
import layout from "@openeuropa/bcl-base-templates/data/layout";
import landingPage from "@openeuropa/bcl-landing-page/landing-page.html.twig";
import { correctPaths } from "@openeuropa/bcl-story-utils";

const dataLanding = {
  content_type: "landing-page",
  header: layout.header_ucpkn,
  footer: layout.footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  ...demoData,
};

export default {
  title: "Compositions/Landing Page",
  parameters: {
    layout: "fullscreen",
    decorators: [withCode, withDesign],
    controls: { disable: true },
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/N0nAH22yz5vfDL6yx8yemr/UCPKN-Mockup?node-id=1024%3A125486",
      },
    ],
  },
};

export const Default = () => landingPage(correctPaths(dataLanding));
