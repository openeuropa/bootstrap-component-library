import { withDesign } from "storybook-addon-designs";
import headerData from "@openeuropa/bcl-data-header/data";
import headerDataECL from "@openeuropa/bcl-data-header/data-ecl";
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
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=5104%3A56210",
      },
    ],
  },
};

export const Header = (args) => header(applyArgs(headerData, args));

Header.storyName = "Header EU";
Header.args = getArgs(headerData);
Header.argTypes = getArgTypes(headerData);

export const HeaderECL = (args) => header(applyArgs(headerDataECL, args));

HeaderECL.storyName = "Header ECL";
HeaderECL.args = getArgs(headerDataECL);
HeaderECL.argTypes = getArgTypes(headerDataECL);
