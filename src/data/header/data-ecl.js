const demoData = require("./data.js");
const drupalAttribute = require("drupal-attribute");

module.exports = {
  // logo: {
  //   src: "https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.0.2/eu/images/logo/standard-version/positive/logo-eu--en.svg",
  //   width: "240",
  //   height: "60",
  // },
  navbar_settings: {
    attributes: new drupalAttribute().addClass("w-100"),
    disable_collapse: true,
    brand: {
      src: "https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.0.2/eu/images/logo/standard-version/positive/logo-eu--en.svg",
    },
    navigation: {
      items: [
        {
          label: "Link",
          icon_position: "before",
          icon: {
            name: "link",
            path: "static/media/bootstrap/bootstrap-icons.svg",
          }
        },
        {
          label: "Link",
          icon_position: "before",
          icon: {
            name: "link",
            path: "static/media/bootstrap/bootstrap-icons.svg",
          }
        },
        {
          label: "English",
          icon_position: "before",
          icon: {
            name: "chat-left-dots-fill",
            path: "static/media/bootstrap/bootstrap-icons.svg",
            size: "xs",
          }
        },
        {
          label: "Log in",
        },
      ],
    },
  },
  navbar: {
    color_set: "dark",
    collapse_id: "navbarNavDropdown",
    attributes: new drupalAttribute().addClass("oe-header__navbar"),
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
