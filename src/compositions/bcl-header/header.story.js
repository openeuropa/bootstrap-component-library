import { withDesign } from "storybook-addon-designs";
import headerData from "@openeuropa/bcl-data-header/data";
import headerDataEC from "@openeuropa/bcl-data-header/data-ec";
import header from "@openeuropa/bcl-header/header.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";
import "!!null-loader!@openeuropa/bcl-theme-default/src/scss/_header.scss";

const getArgs = () => {
  return {
    light: false,
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

const correctPaths = (data) => {
  data.head.navigation.items.forEach((item) => {
    if (item.icon) {
      item.icon.path = defaultSprite;
    }
  });
  data.navbar.form.submit.icon.path = defaultSprite;
  data.breadcrumbs.icons_path = defaultSprite;
  return data;
};

const applyArgs = (data, args) => {
  correctPaths(data, args);
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
