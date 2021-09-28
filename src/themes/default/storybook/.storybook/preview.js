import { addParameters } from "@storybook/html";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

addParameters({
  a11y: {
    element: "#root",
    config: {},
    options: {
      checks: { "color-contrast": { options: { noScroll: true } } },
      restoreScroll: true,
    },
    manual: false,
  },
  controls: { expanded: true },
  layout: "padded",
  viewport: {
    defaultViewport: "responsive",
    viewports: {
      responsive: {
        name: "responsive",
        styles: {
          width: "100%",
          height: "100%",
          border: 0,
          margin: 0,
          boxShadow: "none",
          borderRadius: 0,
          position: "absolute",
        },
      },
      ...MINIMAL_VIEWPORTS,
      "1366x768": {
        name: "1366x768",
        styles: {
          width: "1366px",
          height: "768px",
        },
        type: "desktop",
      },
      "1920x1080": {
        name: "1920x1080",
        styles: {
          width: "1920px",
          height: "1080px",
        },
        type: "desktop",
      },
    },
  },
});

export const parameters = {
  options: {
    storySort: {
      method: "alphabetical",
      order: ["Components", "Compositions"],
    },
  },
};
