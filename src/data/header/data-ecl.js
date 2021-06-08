const demoData = require("./data.js");

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
          extra_attributes: [{ name: "aria-current", value: "page" }],
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
            extra_classes: "nav-link",
            path: "#",
            extra_attributes: [
              {
                name: "aria-expanded",
                value: "false",
              },
              {
                name: "autocomplete",
                value: "off",
              },
              {
                name: "data-bs-toggle",
                value: "dropdown",
              },
            ],
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
