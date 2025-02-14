import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";

import demoData from "@openeuropa/bcl-mega-menu/data.js";
import megaMenu from "@openeuropa/bcl-mega-menu/mega-menu.html.twig";

export default {
  title: "Compositions/Mega Menu",
  decorators: [withCode, withDesign],
};

export const Default = () => megaMenu(demoData);
