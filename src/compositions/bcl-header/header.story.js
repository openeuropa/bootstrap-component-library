import { withDesign } from "storybook-addon-designs";
import { correctPaths } from "@openeuropa/bcl-story-utils";
import "!!null-loader!@openeuropa/bcl-theme-default/src/scss/_header.scss";

import headerData from "@openeuropa/bcl-data-header/data";
import headerDataEC from "@openeuropa/bcl-data-header/data--ec";
import headerDataNeutral from "@openeuropa/bcl-data-header/data--neutral.js";
import header from "@openeuropa/bcl-header/header.html.twig";

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

export const Neutral = (args) => header(applyArgs(headerDataNeutral, args));

Neutral.storyName = "Neutral header";
Neutral.args = getArgs(headerDataNeutral);
Neutral.argTypes = getArgTypes(headerDataNeutral);

export const HeaderEC = (args) => header(applyArgs(headerDataEC, args));

HeaderEC.storyName = "EC Header";
HeaderEC.args = getArgs(headerDataEC);
HeaderEC.argTypes = getArgTypes(headerDataEC);

export const Header = (args) => header(applyArgs(headerData, args));

Header.storyName = "EU Header";
Header.args = getArgs(headerData);
Header.argTypes = getArgTypes(headerData);
