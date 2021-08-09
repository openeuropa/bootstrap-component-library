import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-data-header/data.js";
import headerECLData from "@openeuropa/bcl-data-header/data-ecl";
import header from "@openeuropa/bcl-header/header.html.twig";
import "!!null-loader!@openeuropa/bcl-theme-default/src/scss/_header.scss";
import "!!null-loader!@openeuropa/bcl-theme-ecl/src/scss/_header.scss";

export default {
  title: "Components/Header",
  decorators: [withDesign],
  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const Header = () => header(demoData);

Header.storyName = "default";
Header.parameters = {
  cssresources: [
    {
      id: "bcl-theme-default",
      code: `<link rel="stylesheet" type="text/css" href="oe-bcl-default.min.css" />`,
      picked: true,
      hideCode: true,
    },
  ],
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2881%3A68",
  },
};

export const HeaderECL = () => header(headerECLData);

HeaderECL.storyName = "ECL branding";
HeaderECL.parameters = {
  cssresources: [
    {
      id: "bcl-theme-ecl",
      code: `<link rel="stylesheet" type="text/css" href="oe-bcl-ecl.min.css" />`,
      picked: true,
      hideCode: true,
    },
  ],
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2881%3A68",
  },
};
