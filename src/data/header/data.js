const { DrupalAttribute } = require("drupal-attribute");

const languageList = require("@openeuropa/bcl-language-list/data/data-modal");
const breadcrumbs = require("@openeuropa/bcl-data-breadcrumb/data");
const navbarTop = require("@openeuropa/bcl-data-header/data--top-navbar");
const navbar = require("@openeuropa/bcl-data-header/data--navbar");
const modals = require("@openeuropa/bcl-data-header/data--modals");

module.exports = {
  navbar_id: "header-navbar",
  variant: "eu",
  site_name: "Project name",
  project_logo: {
    path: "https://inno-ecl.s3.amazonaws.com/media/examples/placeholder.svg",
    classes: "d-none d-lg-inline-block",
    alt: "project logo",
  },
  head: {
    attributes: new DrupalAttribute()
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
          alt: "desktop project logo",
        },
        {
          class: "d-lg-none",
          src: "https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.0.2/eu/images/logo/condensed-version/positive/logo-eu--en.svg",
          alt: "mobile project logo",
        },
      ],
    },
    navigation: {
      items: navbarTop,
    },
  },
  navbar,
  modals,
  language_modal: { ...languageList, variant: "eu" },
  breadcrumbs: {
    ...breadcrumbs,
    attributes: new DrupalAttribute().addClass(["mt-3"]),
  },
};
