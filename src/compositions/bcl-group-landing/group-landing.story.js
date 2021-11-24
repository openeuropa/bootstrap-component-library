import { withDesign } from "storybook-addon-designs";
import headerData from "@openeuropa/bcl-data-header/data.js";
import footerData from "@openeuropa/bcl-data-footer/data.js";
import groupLanding from "@openeuropa/bcl-group-landing/group-landing.html.twig";
import demoData from "@openeuropa/bcl-group-landing/data";
import { correctPaths } from "@openeuropa/bcl-story-utils";

export default {
  title: "Compositions/Group/Landing",
  decorators: [withDesign],
  parameters: {
    layout: "fullscreen",
    design: [
      {
        name: "Mockup - Group",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=482%3A2559",
      },
    ],
    controls: {
      disable: true,
    },
  },
};

export const Default = () => groupLanding(correctPaths(demoData));
