import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import { correctPaths } from "@openeuropa/bcl-story-utils";

import footer from "@openeuropa/bcl-footer/footer.html.twig";
import footerData from "@openeuropa/bcl-data-footer/data.js";

export default {
  title: "Compositions/Footer",
  decorators: [withCode, withDesign],
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

export const Default = () => footer(correctPaths(footerData));
