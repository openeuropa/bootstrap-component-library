import { withDesign } from "storybook-addon-designs";
import { correctPaths } from "@openeuropa/bcl-story-utils";

import footer from "@openeuropa/bcl-footer/footer.html.twig";
import footerData from "@openeuropa/bcl-data-footer/data";
import footerDataEU from "@openeuropa/bcl-data-footer/data-eu";
import footerDataEC from "@openeuropa/bcl-data-footer/data-ec";

export default {
  title: "Compositions/Footer",
  decorators: [withDesign],
  parameters: {
    layout: "fullscreen",
    design: [
      {
        name: "Mockup - Footer Desktop",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=5118%3A65509",
      },
      {
        name: "Mockup - Footer Mobile",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=5222%3A62722",
      },
    ],
    controls: {
      disable: true,
    },
  },
};

export const NeutralFooter = () => footer(correctPaths(footerData));
NeutralFooter.storyName = "Neutral footer";

export const FooterEU = () => footer(correctPaths(footerDataEU));

FooterEU.storyName = "Footer EU";

export const FooterEC = (args) => footer(correctPaths(footerDataEC));

FooterEC.storyName = "Footer EC";
