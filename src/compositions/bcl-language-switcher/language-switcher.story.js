import { correctPaths } from "@openeuropa/bcl-story-utils";

import demoData from "@openeuropa/bcl-language-switcher/data.js";
import languageSwitcher from "@openeuropa/bcl-language-switcher/language-switcher.html.twig";

export default {
  title: "Compositions/Language Switcher",
  parameters: {
    badges: ["stable", "deprecated"],
    layout: "padded",
    controls: { disable: true },
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit---Components?node-id=0%3A1",
      },
    ],
  },
};

export const Default = () => languageSwitcher(correctPaths(demoData));
