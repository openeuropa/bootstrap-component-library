import navbar from "./navbar.html.twig";
import "!!null-loader!./navbar.scss";

// Controls
const getArgTypes = (data) => {
  return {
    color_set: {
      name: "color set",
      type: { name: "select" },
      defaultValue: "light",
      description: "Available set of color",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "light" },
        category: "Style",
      },
      control: {
        type: "select",
        options: ["light", "dark"],
      },
    },
  };
};

// Decoration
const darkMode = (story, controls) => {
  const demo = story();
  return controls.args.color_set === "dark"
    ? `<div class="bg-dark">${demo}</div>`
    : demo;
};

// Stories
export default {
  title: "Components/Navbar",
};

export const Navbar = (args) => navbar(args);

Navbar.storyName = "default";
Navbar.argTypes = getArgTypes();
Navbar.decorators = [darkMode];
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

const NavbarECLArgs = {
  logo_src:
    "https://ec.europa.eu/info/sites/info/themes/europa/images/svg/logo/logo--en.svg",
  logo_width: "240",
  logo_height: "60",
  color_set: "dark",
};
export const NavbarECL = (args) => navbar(NavbarECLArgs);

NavbarECL.storyName = "ECL branding";
NavbarECL.argTypes = {};
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
