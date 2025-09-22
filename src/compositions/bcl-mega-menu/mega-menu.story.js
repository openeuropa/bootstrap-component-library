import { correctPaths } from "@openeuropa/bcl-story-utils";

import megaMenu from "@openeuropa/bcl-mega-menu/mega-menu.html.twig";

export default {
  title: "Compositions/Mega Menu",
};

const load = (name) => {
  const data = require("@openeuropa/bcl-mega-menu/" + name);
  data.icon_path = "/icons.svg";
  const args = Object.assign(correctPaths(data));
  return () => megaMenu(args);
};

export const Default = load("data.js");
export const Short = load("data--short.js");
export const Nolink = load("data--nolink.js");
export const Shallow = load("data--shallow.js");
export const Active = load("data--active.js");
export const Attributes = load("data--attributes.js");
export const Xss = load("data--xss.js");
