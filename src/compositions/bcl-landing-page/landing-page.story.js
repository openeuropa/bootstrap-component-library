import demoData from "@openeuropa/bcl-landing-page/data.js";
import header from "@openeuropa/bcl-data-header/data--simple";
import footer from "@openeuropa/bcl-data-footer/data";
import landingPage from "@openeuropa/bcl-landing-page/landing-page.html.twig";
import { correctPaths } from "@openeuropa/bcl-story-utils";

const dataLanding = {
  content_type: "landing-page",
  header: header,
  footer: footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  ...demoData,
};

export default {
  title: "Pages/Landing Page",
  parameters: {
    layout: "fullscreen",
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
