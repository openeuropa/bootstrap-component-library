const drupalAttribute = require("drupal-attribute");

const languageList = require("@openeuropa/bcl-language-list/data/data-modal");
const breadcrumbs = require("@openeuropa/bcl-data-breadcrumb/data");
const navbar = require("@openeuropa/bcl-data-header/data--navbar");
const modals = require("@openeuropa/bcl-data-header/data--modals");

module.exports = {
  variant: "eu",
  head: {
    attributes: new drupalAttribute()
      .addClass(["w-100", "shadow-sm", "bcl-header__top-navbar"])
      .setAttribute("aria-label", "Top Navigation"),
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
            .setAttribute("data-bs-target", "#languageModal"),
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
            .setAttribute("data-bs-target", "#loginModal"),
        },
      ],
    },
  },
  navbar,
  modals,
  language_modal: { ...languageList, variant: "eu" },
  breadcrumbs: {
    ...breadcrumbs,
    attributes: new drupalAttribute().addClass(["mt-3"]),
  },
};
