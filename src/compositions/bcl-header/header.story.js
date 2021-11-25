import { withDesign } from "storybook-addon-designs";
import headerData from "@openeuropa/bcl-data-header/data";
import headerDataEC from "@openeuropa/bcl-data-header/data-ec";
import headerDataUCPKN from "@openeuropa/bcl-data-header/data-ucpkn";
import header from "@openeuropa/bcl-header/header.html.twig";
import { correctPaths } from "@openeuropa/bcl-story-utils";
import "!!null-loader!@openeuropa/bcl-theme-default/src/scss/_header.scss";
import ucpknLogo from "@openeuropa/bcl-theme-ucpkn/logo/ucpkn_logo.svg";

headerDataUCPKN.project_logo.path = ucpknLogo;

const getArgs = (data) => {
  return {
    light: data.light || false,
  };
};

const getArgTypes = () => {
  return {
    light: {
      name: "light",
      type: { name: "boolean" },
      description: "Enable light mode for project bar",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
  };
};

const applyArgs = (data, args) => {
  correctPaths(data);

  return Object.assign(data, args);
};

export default {
  title: "Compositions/Header",
  decorators: [withDesign],
  parameters: {
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

export const Header = (args) => header(applyArgs(headerData, args));

Header.storyName = "Header EU";
Header.args = getArgs(headerData);
Header.argTypes = getArgTypes(headerData);

export const HeaderEC = (args) => header(applyArgs(headerDataEC, args));

HeaderEC.storyName = "Header EC";
HeaderEC.args = getArgs(headerDataEC);
HeaderEC.argTypes = getArgTypes(headerDataEC);
