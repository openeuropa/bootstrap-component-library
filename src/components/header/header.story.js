import { withDesign } from "storybook-addon-designs";
import demoData from "@oe/data-header/data";
import headerECLData from "@oe/data-header/data-ecl";
import header from "./header.html.twig";
import "!!null-loader!@oe/theme-oe/scss/_header.scss";
import "!!null-loader!@oe/theme-ecl/scss/_header.scss";

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
      id: "oe",
      code: `<link rel="stylesheet" type="text/css" href="oe.min.css" />`,
      picked: true,
      hideCode: true,
    },
  ],
  design: {
    type: "figma",
    url: "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2536%3A0",
  },
};

export const HeaderECL = () => header(headerECLData);

HeaderECL.storyName = "ECL branding";
HeaderECL.parameters = {
  cssresources: [
    {
      id: "oe-ecl",
      code: `<link rel="stylesheet" type="text/css" href="oe-ecl.min.css" />`,
      picked: true,
      hideCode: true,
    },
  ],
  design: {
    type: "figma",
    url: "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2536%3A0",
  },
};
