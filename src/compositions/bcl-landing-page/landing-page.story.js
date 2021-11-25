import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-landing-page/data.js";
import headerData from "@openeuropa/bcl-data-header/data.js";
import footerData from "@openeuropa/bcl-data-footer/data.js";
import landingPage from "@openeuropa/bcl-landing-page/landing-page.html.twig";
import { correctPaths } from "@openeuropa/bcl-story-utils";

demoData.data.header = headerData;
demoData.data.footer = footerData;

export default {
  title: "Compositions/Landing Page",
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

export const Default = () => landingPage(correctPaths(demoData));
