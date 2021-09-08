import { withDesign } from "storybook-addon-designs";
import headerECLData from "@openeuropa/bcl-data-header/data-ecl";
import header from "@openeuropa/bcl-header/header.html.twig";
import "!!null-loader!@openeuropa/bcl-theme-default/src/scss/_header.scss";

export default {
  title: "Compositions/Header",
  decorators: [withDesign],
  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const Header = () => header(headerECLData);

Header.storyName = "default";
Header.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2881%3A68",
  },
};
