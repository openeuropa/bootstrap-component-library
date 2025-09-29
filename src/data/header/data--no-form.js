const drupalAttribute = require("drupal-attribute");

const modals = require("@openeuropa/bcl-data-header/data--modals");
const languageList = require("@openeuropa/bcl-language-list/data/data-modal");

module.exports = {
  variant: "eu",
  navbar_id: "header-navbar",
  head: {
    attributes: new drupalAttribute().addClass([
      "w-100",
      "shadow-sm",
      "bcl-header__top-navbar",
    ]),
    disable_collapse: false,
    collapse_id: "topNavbarDropdown",
    brand: {
      link: "/example.html",
      logos: [
        {
          class: "d-none d-lg-block",
          src: "https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.0.2/eu/images/logo/standard-version/positive/logo-eu--en.svg",
          alt: "desktop european union logo",
        },
        {
          class: "d-lg-none",
          src: "https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.0.2/eu/images/logo/condensed-version/positive/logo-eu--en.svg",
          alt: "mobile european union logo",
        },
      ],
    },
    navigation: {
      items: [
        {
          label: "English",
          path: "/example.html",
          icon_position: "before",
          remove_icon_spacers: true,
          icon: {
            name: "chat-left-dots-fill",
            size: "xs",
            path: "/icons.svg",
            attributes: new drupalAttribute().addClass("me-2-5"),
          },
          attributes: new drupalAttribute()
            .setAttribute("data-bs-toggle", "modal")
            .setAttribute("data-bs-target", "#languageModal")
            .addClass("text-center"),
        },
        {
          label: "Log in",
          path: "/example.html",
          icon_position: "before",
          remove_icon_spacers: true,
          icon: {
            name: "person-fill",
            size: "xs",
            path: "/icons.svg",
            attributes: new drupalAttribute().addClass("me-2-5"),
          },
          attributes: new drupalAttribute()
            .setAttribute("data-bs-toggle", "modal")
            .setAttribute("data-bs-target", "#loginModal")
            .addClass("text-center"),
        },
      ],
    },
  },
  navbar: {
    color_set: "dark",
    collapse_id: "navbarNavDropdown",
    attributes: new drupalAttribute().setAttribute(
      "aria-label",
      "Main Navigation",
    ),
    navigation: {
      navbar: true,
      attributes: new drupalAttribute().addClass("me-auto"),
      items: [
        {
          label: "Home",
          path: "/example.html",
          active: true,
          attributes: new drupalAttribute().setAttribute(
            "aria-current",
            "page",
          ),
        },
        {
          label: "Item 01",
          path: "/example.html",
        },
        {
          label: "Item 02",
          path: "/example.html",
        },
        {
          id: "navbarDropdownMenuLink",
          link: true,
          dropdown: true,
          trigger: {
            label: "Dropdown link",
            path: "/example.html",
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
  modals,
  language_modal: languageList,
  breadcrumbs: {
    attributes: new drupalAttribute().addClass(["mt-3"]),
    links: [
      { label: "Home", path: "/example.html" },
      {
        label: "European Union",
        path: "/example.html",
      },
      {
        label: "About the European Union",
        path: "/example.html",
      },
      { label: "News" },
    ],
    icon_path: "/icons.svg",
  },
};
