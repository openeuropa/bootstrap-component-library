const drupalAttribute = require("drupal-attribute");

module.exports = {
  variant: "ucpkn",
  site_name_classes: "pb-3 pb-lg-0",
  site_name: "Union Civil Protection Knowledge Network",
  light: true,
  project_logo: {
    path: "ucpkn_logo.svg",
    classes: "d-none d-lg-inline-block",
  },
  head: {
    attributes: new drupalAttribute().addClass(["w-100", "shadow-sm"]),
    disable_collapse: true,
    brand: {
      logos: [
        {
          class: "d-none d-lg-block",
          src: "https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.0.2/eu/images/logo/standard-version/positive/logo-eu--en.svg",
        },
        {
          class: "d-lg-none",
          src: "https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.0.2/eu/images/logo/condensed-version/positive/logo-eu--en.svg",
        },
      ],
    },
  },
};
