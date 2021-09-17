import { withDesign } from "storybook-addon-designs";
import headerData from "@openeuropa/bcl-data-header/data";
import headerDataECL from "@openeuropa/bcl-data-header/data-ecl";
import header from "@openeuropa/bcl-header/header.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";
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

const correctPaths = (data) => {
  data.navbar_settings.navigation.items.forEach((item) => {
    if (item.icon) {
      item.icon.path = defaultSprite;
    }
  });
  data.navbar.form.submit.icon.path = defaultSprite;
  return data;
};

export const Header = () => header(correctPaths(headerData));

Header.storyName = "Header EU";

export const HeaderECL = () => header(correctPaths(headerDataECL));

HeaderECL.storyName = "Header ECL";
