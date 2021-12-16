import { withDesign } from "storybook-addon-designs";
import headerData from "@openeuropa/bcl-data-header/data-ucpkn";
import header from "@openeuropa/bcl-header/header.html.twig";
import { correctPaths } from "@openeuropa/bcl-story-utils";
import "!!null-loader!@openeuropa/bcl-theme-default/src/scss/_header.scss";
import ucpknLogo from "@openeuropa/bcl-theme-ucpkn/logo/ucpkn_logo.svg";

headerData.project_logo.path = ucpknLogo;

export default {
  title: "Compositions/Header",
  decorators: [withDesign],
  parameters: {
    controls: { disable: true },
    layout: "fullscreen",
    design: [
      {
        name: "Mockup - Header Desktop",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=5104%3A56210",
      },
      {
        name: "Mockup - Header Mobile",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=5180%3A61165",
      },
    ],
  },
};

export const Default = () => header(correctPaths(headerData));
