import icons_list from "@openeuropa/bcl-icons-list/icons-list.html.twig";
import icons from "@openeuropa/bcl-theme-default/src/icons/icons";
import defaultSprite from "@openeuropa/bcl-theme-default/icons/bcl-default-icons.svg";

const list = icons.map((icon) => icon.substring(0, icon.length - 4));

export default {
  title: "Resources/Icons",
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    badges: ["deprecated"],
  },
};

export const Default = () => icons_list({ icons: list, path: defaultSprite });
