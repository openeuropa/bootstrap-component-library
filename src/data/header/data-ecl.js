const demoData = require("./data.js");
const drupalAttribute = require("drupal-attribute");

module.exports = {
  logo: {
    src: "https://ec.europa.eu/info/sites/info/themes/europa/images/svg/logo/logo--en.svg",
    width: "240",
    height: "60",
  },
  navbar: {
    color_set: "dark",
    collapse_id: "navbarNavDropdown",
    extra_classes: "oe-header__navbar",
    navigation: {
      navbar: true,
      items: [
        {
          label: "Home",
          path: "/example",
          active: true,
          attributes: new drupalAttribute().setAttribute(
            "aria-current",
            "page"
          ),
        },
        {
          label: "Item 01",
          path: "/example",
        },
        {
          label: "Item 02",
          path: "/example",
        },
        {
          id: "navbarDropdownMenuLink",
          link: true,
          dropdown: true,
          trigger: {
            label: "Dropdown link",
            path: "#",
            attributes: new drupalAttribute().addClass("nav-link"),
          },
          items: [
            {
              label: "Action",
              path: "/example.html",
            },
            {
              label: "Another action",
              path: "/example.html",
            },
            {
              label: "Something else here",
              path: "/example.html",
            },
          ],
        },
      ],
    },
  },
  login: demoData.login,
  language: demoData.language,
};
