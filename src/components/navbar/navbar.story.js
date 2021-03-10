import navbar from "./navbar.html.twig";

export default {
  title: "Components/Navbar",
};

export const Navbar = (args) => navbar(args);

Navbar.storyName = "default";
Navbar.parameters = {
  cssresources: [
    {
      id: "oe",
      code: `<link rel="stylesheet" type="text/css" href="css/oe.min.css" />`,
      picked: true,
      hideCode: true,
    },
  ],
};

export const NavbarECL = (args) => navbar(args);

NavbarECL.args = {
  logo_src:
    "https://ec.europa.eu/info/sites/info/themes/europa/images/svg/logo/logo--en.svg",
  logo_width: "240",
  logo_height: "60",
  navbar_variant: "navbar-dark",
};
NavbarECL.storyName = "ECL branding";
NavbarECL.parameters = {
  cssresources: [
    {
      id: "oe-ecl",
      code: `<link rel="stylesheet" type="text/css" href="css/oe-ecl.min.css" />`,
      picked: true,
      hideCode: true,
    },
  ],
};
