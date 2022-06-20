import { initScrollspy } from "@openeuropa/bcl-story-utils";
import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";

import demoData from "@openeuropa/bcl-inpage-navigation/data/data.js";
import inpage from "@openeuropa/bcl-inpage-navigation/inpage-navigation.html.twig";

const insideSidebar = (story) => {
  const demo = story();
  return `<div class="bcl-sidebar">${demo}</div>`;
};

export default {
  title: "Paragraphs/Inpage navigation",
  decorators: [withCode, withDesign, initScrollspy, insideSidebar],
  parameters: {
    controls: { disable: true },
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=4195%3A41188",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.1/components/scrollspy/",
      },
    ],
  },
};

export const Default = () => inpage(demoData);
