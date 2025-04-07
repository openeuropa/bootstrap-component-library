import layout from "@openeuropa/bcl-base-templates/data/layout";
import {
  filterButton,
  pagination,
  sortSelect,
} from "@openeuropa/bcl-base-templates/data/listing-page";
import {
  banner,
  pageTitleBanner,
  share,
} from "@openeuropa/bcl-base-templates/data/content-page";
import dataListing from "@openeuropa/bcl-publication/data/data--listing";
import dataExtraDetails from "@openeuropa/bcl-publication/data/data--extra-details";

const header =
  layout[`header_${process.env.STORYBOOK_THEME}`] || layout.headerSimple;

const baseData = {
  content_type: "listing",
  header,
  footer: layout.footer,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
};

const demoDetails = {
  ...baseData,
  ...dataExtraDetails,
  banner,
  social_block: true,
  share,
  authors: {
    title: "Authors",
    title_id: "authors",
    listing: ["José Luis Pabón Barrios", "Adjur Tichar"],
  },
};

const demoDetailsMultiple = {
  ...baseData,
  ...dataExtraDetails,
  banner,
  social_block: true,
  share,
  authors: {
    title: "Authors",
    listing: [
      "José Luis Pabón Barrios",
      "Adjur Tichar",
      "Szép Mara",
      "Aurelia Panicucci",
      "José Luis Pabón Barrios",
      "Adjur Tichar",
      "Szép Mara",
      "Aurelia Panicucci",
      "José Luis Pabón Barrios",
      "Adjur Tichar",
      "Szép Mara",
      "Aurelia Panicucci",
    ],
  },
};

const demoListing = {
  ...baseData,
  ...dataListing,
  title: "Results",
  pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
  banner: {
    ...pageTitleBanner,
    title: "Publications",
    title_tag: "h1",
  },
};

export { demoDetails, demoDetailsMultiple, demoListing };
