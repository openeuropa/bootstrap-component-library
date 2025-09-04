import { correctPaths } from "@openeuropa/bcl-story-utils";
import demoData from "@openeuropa/bcl-language-list/data/data--neutral";
import demoDataEU from "@openeuropa/bcl-language-list/data/data--eu";
import demoDataEC from "@openeuropa/bcl-language-list/data/data--ec";
import language from "@openeuropa/bcl-language-list/language-list.html.twig";

export default {
  title: "Compositions/Language List",
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    badges: ["stable", "deprecated"],
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
