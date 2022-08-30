import registerAddonCode from "@whitespace/storybook-addon-code/register";
import { addons } from "@storybook/addons";
import browserUpdate from "browser-update";
import { create } from "@storybook/theming";
import { version } from "../../../../../lerna.json";
import project from "../.project.js";

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: "bottom",
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  theme: create({
    base: "light",
    brandTitle: `OE-BCL ${project} v${version}`,
    brandUrl: "https://github.com/openeuropa/bootstrap-component-library",
    brandImage: undefined,
  }),
  selectedPanel: "controls",
  initialActive: "sidebar",
  sidebar: {
    showRoots: false,
  },
});

browserUpdate({
  required: {
    i: 11,
    e: -4,
    f: -4,
    c: -4,
    s: -2,
  },
  text: {
    msg: 'This websites uses <a href="http://storybook.js.org" title="storybook ui">storybook<a> which doesn\'t fully support <b>{brow_name}</b>.',
    msgmore:
      "(supported browsers are: chrome latest 5, firefox latest 5, safari latest 3, Edge latest 5)",
  },
  text_for_i: {
    msg: "Sorry, the minimal required version of Internet Explorer is 11 on this website",
    msgmore: "",
  },
  noclose: false,
  no_permanent_hide: false,
});

registerAddonCode({
  tabs: [
    { label: "Twig", lang: "html.twig" },
    { label: "Data", lang: "js" },
  ],
});
