import navbar from "./navbar.html.twig";

export default {
  title: "Components/Navbar",
};

export const Navbar = (args) => navbar(args);

Navbar.storyName = "default";

export const NavbarECL = (args) => navbar(args);

NavbarECL.args = {
  logo_src: 'https://ec.europa.eu/info/sites/info/themes/europa/images/svg/logo/logo--en.svg',
  logo_width: '240',
  logo_height: '60',
  navbar_variant: 'navbar-dark',
};
NavbarECL.storyName = "ECL branding";
