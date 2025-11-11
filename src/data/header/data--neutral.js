const { DrupalAttribute } = require("drupal-attribute");

const languageList = require("@openeuropa/bcl-language-list/data/data-modal");
const breadcrumbs = require("@openeuropa/bcl-data-breadcrumb/data");
const navbarTop = require("@openeuropa/bcl-data-header/data--top-navbar");
const navbar = require("@openeuropa/bcl-data-header/data--navbar");
const modals = require("@openeuropa/bcl-data-header/data--modals");

module.exports = {
  navbar_id: "header-navbar",
  site_name: "Project name",
  site_name_classes: "h5 d-inline-block d-lg-none",
  head: {
    brand: {
      logos: [
        {
          src: "https://inno-ecl.s3.amazonaws.com/media/examples/placeholder.svg",
          alt: "project logo",
        },
      ],
      label: "Project name",
      link: "/example.html",
    },
    attributes: new DrupalAttribute()
      .addClass(["w-100", "bcl-header__top-navbar"])
      .setAttribute("aria-label", "Top Navigation"),
    disable_collapse: false,
    collapse_id: "topNavbarDropdown",
    navigation: {
      items: navbarTop,
    },
  },
  navbar,
  modals,
  language_modal: languageList,
  breadcrumbs: {
    ...breadcrumbs,
    attributes: new DrupalAttribute().addClass(["mt-3"]),
  },
};
