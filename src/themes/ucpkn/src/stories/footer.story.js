import { correctPaths } from "@openeuropa/bcl-story-utils";

import footer from "@openeuropa/bcl-footer/footer.html.twig";
import footerData from "@openeuropa/bcl-data-footer/data.js";

export default {
  title: "Compositions/Footer",
  parameters: {
    badges: ["deprecated"],
    layout: "fullscreen",
  },
};

export const Default = () => footer(correctPaths(footerData));
