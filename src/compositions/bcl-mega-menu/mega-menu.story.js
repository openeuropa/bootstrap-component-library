import { withDesign } from "storybook-addon-designs";
import { correctPaths } from "@openeuropa/bcl-story-utils";
import withCode from "@openeuropa/storybook-addon-code";

import demoData from "@openeuropa/bcl-mega-menu/data.js";
import megaMenu from "@openeuropa/bcl-mega-menu/mega-menu.html.twig";

export default {
  title: "Compositions/Mega Menu",
  decorators: [withCode, withDesign],
};

const applyArgs = (data) => {
  data.icon_path = "/icons.svg";

  return Object.assign(correctPaths(data));
};

export const Default = () => megaMenu(applyArgs(demoData));
