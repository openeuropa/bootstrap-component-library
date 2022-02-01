import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-language/data/data--neutral.js";
import demoDataEU from "@openeuropa/bcl-language/data/data--eu.js";
import demoDataEC from "@openeuropa/bcl-language/data/data--ec.js";
import language from "@openeuropa/bcl-language/language.html.twig";

export default {
  title: "Compositions/Language Splash",
  decorators: [withDesign],
  parameters: {
    layout: "fullscreen",
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=5568%3A231237",
      },
    ],
  },
};

export const Language = () => language(demoData);
Language.storyName = "Neutral";

export const LanguageEU = () => language({ ...demoDataEU, variant: "eu" });
LanguageEU.storyName = "EU";

export const LanguageEC = () => language({ ...demoDataEC, variant: "ec" });
LanguageEC.storyName = "EC";
