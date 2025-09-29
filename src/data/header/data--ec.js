const drupalAttribute = require("drupal-attribute");

const languageList = require("@openeuropa/bcl-language-list/data/data-modal");
const breadcrumbs = require("@openeuropa/bcl-data-breadcrumb/data");
const navbarTop = require("@openeuropa/bcl-data-header/data--top-navbar");
const navbar = require("@openeuropa/bcl-data-header/data--navbar");
const modals = require("@openeuropa/bcl-data-header/data--modals");

module.exports = {
  variant: "ec",
  navbar_id: "header-navbar",
  site_name: "Project name",
  project_logo: {
    path: "https://inno-ecl.s3.amazonaws.com/media/examples/placeholder.svg",
    classes: "d-none d-lg-inline-block",
    alt: "project logo",
  },
  project_link: "/example.html",
  head: {
    attributes: new drupalAttribute()
      .addClass(["w-100", "shadow-sm", "bcl-header__top-navbar"])
      .setAttribute("aria-label", "Top Navigation"),
    brand: {
      link: "/example.html",
      logos: [
        {
          src: "https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.0.2/ec/images/logo/logo-ec--en.svg",
          alt: "european commission logo",
        },
      ],
    },
    navigation: {
      items: navbarTop,
    },
  },
  navbar,
  modals,
  language_modal: { ...languageList, variant: "ec" },
  breadcrumbs: {
    ...breadcrumbs,
    attributes: new drupalAttribute().addClass(["mt-3"]),
  },
};
