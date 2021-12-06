import { initScrollspy } from "@openeuropa/bcl-story-utils";
import dataDefault from "@openeuropa/bcl-inpage-navigation/dataDefault.js";
import dataNested from "@openeuropa/bcl-inpage-navigation/dataNested.js";
import inpage from "@openeuropa/bcl-inpage-navigation/inpage-navigation.html.twig";

export default {
  title: "Compositions/Inpage navigation",
  decorators: [initScrollspy],
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
        url: "https://getbootstrap.com/docs/5.0/components/scrollspy/",
      },
    ],
  },
};

export const Default = () => inpage(dataDefault);

export const NestedLists = () => inpage(dataNested);
