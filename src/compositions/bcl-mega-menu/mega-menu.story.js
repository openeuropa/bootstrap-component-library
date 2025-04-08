import { correctPaths } from "@openeuropa/bcl-story-utils";

import demoData from "@openeuropa/bcl-mega-menu/data.js";
import megaMenu from "@openeuropa/bcl-mega-menu/mega-menu.html.twig";

export default {
  title: "Compositions/Mega Menu",
};

const applyArgs = (data) => {
  data.icon_path = "/icons.svg";

  return Object.assign(correctPaths(data));
};

export const Default = () => megaMenu(applyArgs(demoData));
