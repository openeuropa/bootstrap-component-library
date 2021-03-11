import header from "./header.html.twig";

// Controls

// Stories
export default {
  title: "Components/Header",
};

export const Header = (args) => header(args);

Header.storyName = "default";
Header.argTypes = {};
Header.parameters = {
  cssresources: [
    {
      id: "oe",
      code: `<link rel="stylesheet" type="text/css" href="css/oe.min.css" />`,
      picked: true,
      hideCode: true,
    },
  ],
};

const HeaderECLArgs = {
  logo: {
    src: "https://ec.europa.eu/info/sites/info/themes/europa/images/svg/logo/logo--en.svg",
    width: "240",
    height: "60",
  },
  navbar: {
    color_set: "dark",
  },
};
export const HeaderECL = (args) => header(HeaderECLArgs);

HeaderECL.storyName = "ECL branding";
HeaderECL.argTypes = {};
HeaderECL.parameters = {
  cssresources: [
    {
      id: "oe-ecl",
      code: `<link rel="stylesheet" type="text/css" href="css/oe-ecl.min.css" />`,
      picked: true,
      hideCode: true,
    },
  ],
};
