import { withDesign } from "storybook-addon-designs";
import { correctPaths } from "@openeuropa/bcl-story-utils";
import demoData from "@openeuropa/bcl-language-list/data/data--neutral.js";
import demoDataEU from "@openeuropa/bcl-language-list/data/data--eu";
import demoDataEC from "@openeuropa/bcl-language-list/data/data--ec";
import language from "@openeuropa/bcl-language-list/language-list.html.twig";

export default {
  title: "Compositions/Language List",
  decorators: [withDesign],
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=5568%3A231237",
      },
    ],
    badges: ["stable"],
  },
};

export const Language = () => language(correctPaths(demoData));
Language.storyName = "Neutral";

export const LanguageEU = () =>
  language(correctPaths({ ...demoDataEU, variant: "eu" }));
LanguageEU.storyName = "EU";

export const LanguageEC = () =>
  language(correctPaths({ ...demoDataEC, variant: "ec" }));
LanguageEC.storyName = "EC";
