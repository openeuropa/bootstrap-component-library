import { withDesign } from "storybook-addon-designs";
import headerData from "@openeuropa/bcl-data-header/data";
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

export const Header = () => header(headerData);
