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
    attributes: new drupalAttribute()
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
    attributes: new drupalAttribute().addClass(["mt-3"]),
  },
};

export default data;
