import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

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
    brandTitle: `OEC library`,
    brandUrl: "https://github.com/ec-europa/oec",
    brandImage: undefined,
  }),
  initialActive: "sidebar",
  showRoots: false,
});
