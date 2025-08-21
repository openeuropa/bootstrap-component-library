import drupalAttribute from "drupal-attribute";

import languageListMod from "@openeuropa/bcl-language-list/data/data-modal";
import breadcrumbsMod from "@openeuropa/bcl-data-breadcrumb/data";
import navbarTopMod from "@openeuropa/bcl-data-header/data--top-navbar";
import navbarMod from "@openeuropa/bcl-data-header/data--navbar";
import modalsMod from "@openeuropa/bcl-data-header/data--modals";

const languageList = languageListMod?.default ?? languageListMod;
const breadcrumbs = breadcrumbsMod?.default ?? breadcrumbsMod;
const navbarTop = navbarTopMod?.default ?? navbarTopMod;
const navbar = navbarMod?.default ?? navbarMod;
const modals = modalsMod?.default ?? modalsMod;

const data = {
  variant: "ec",
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
    disable_collapse: false,
    collapse_id: "topNavbarDropdown",
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

export default data;
