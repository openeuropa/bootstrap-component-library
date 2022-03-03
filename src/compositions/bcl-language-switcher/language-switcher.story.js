import { correctPaths } from "@openeuropa/bcl-story-utils";
import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-language-switcher/data/data.js";
import languageSwitcher from "@openeuropa/bcl-language-switcher/language-switcher.html.twig";

export default {
  title: "Compositions/Language Switcher",
  decorators: [withDesign],
  parameters: {
    badges: ["stable"],
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
