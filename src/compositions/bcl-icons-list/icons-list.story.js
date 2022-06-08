import { correctPaths } from "@openeuropa/bcl-story-utils";
import icons_list from "@openeuropa/bcl-icons-list/icons-list.html.twig";
import icons from "@openeuropa/bcl-theme-default/src/icons/icons.js";
import defaultSprite from "@openeuropa/bcl-theme-default/icons/bcl-default-icons.svg";

let list = icons.map((icon) => icon.substring(0, icon.length - 4));

console.log(list);

export default {
  title: "Resources/Icons",
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
  },
};

export const Default = () =>
  icons_list(correctPaths({ icons: list, path: defaultSprite }));
