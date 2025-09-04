import headerData from "@openeuropa/bcl-data-header/data--ucpkn";
import header from "@openeuropa/bcl-header/header.html.twig";
import { correctPaths } from "@openeuropa/bcl-story-utils";
import "@openeuropa/bcl-theme-default/src/scss/_header.scss";
import ucpknLogo from "@openeuropa/bcl-theme-ucpkn/logo/ucpkn_logo.svg";

headerData.project_logo.path = ucpknLogo;

export default {
  title: "Compositions/Header",
  parameters: {
    controls: { disable: true },
    badges: ["deprecated"],
    layout: "fullscreen",
  },
};

export const Default = () => header(correctPaths(headerData));
