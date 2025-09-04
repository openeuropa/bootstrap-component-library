import { correctPaths } from "@openeuropa/bcl-story-utils";

import demoData from "@openeuropa/bcl-language-switcher/data.js";
import languageSwitcher from "@openeuropa/bcl-language-switcher/language-switcher.html.twig";

export default {
  title: "Compositions/Language Switcher",
  parameters: {
    badges: ["stable", "deprecated"],
    layout: "padded",
    controls: { disable: true },
  },
};

export const Default = () => languageSwitcher(correctPaths(demoData));
