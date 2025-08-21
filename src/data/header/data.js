import drupalAttribute from "drupal-attribute";

const asDefault = (m) => (m && "default" in m ? m.default : m);

import languageListMod from "@openeuropa/bcl-language-list/data/data-modal";
import breadcrumbsMod from "@openeuropa/bcl-data-breadcrumb/data";
import navbarTopMod from "@openeuropa/bcl-data-header/data--top-navbar";
import navbarMod from "@openeuropa/bcl-data-header/data--navbar";
import modalsMod from "@openeuropa/bcl-data-header/data--modals";

const languageList = asDefault(languageListMod);
const breadcrumbs = asDefault(breadcrumbsMod);
const navbarTop = asDefault(navbarTopMod);
const navbar = asDefault(navbarMod);
const modals = asDefault(modalsMod);

const data = {
  variant: "eu",
  site_name: "Project name",
  project_logo: {
    path: "https://inno-ecl.s3.amazonaws.com/media/examples/placeholder.svg",
    classes: "d-none d-lg-inline-block",
    alt: "project logo",
  },
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
    attributes: new drupalAttribute().addClass(["mt-3"]),
  },
};

export default data;
