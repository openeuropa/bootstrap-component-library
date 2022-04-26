import withCode from "@openeuropa/storybook-addon-code";
import { withDesign } from "storybook-addon-designs";
import isChromatic from "chromatic/isChromatic";
import {
  initBadges,
  correctPaths,
  initScrollspy,
} from "@openeuropa/bcl-story-utils";
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
import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";

import dataListing from "@openeuropa/bcl-publication/data/data--listing";
import dataContent from "@openeuropa/bcl-publication/data/data";
import dataExtraDetails from "@openeuropa/bcl-publication/data/data--extra-details";
import detailsPage from "@openeuropa/bcl-publication/publication.html.twig";

const header =
  layout[`header_${process.env.STORYBOOK_THEME}`] || layout.headerSimple;

if (isChromatic()) {
  banner.image.classes = "chromatic-ignore";
  dataListing.listing.items.forEach((item) => {
    if (item.image) {
      item.image.classes = item.image.classes
        ? `${item.image.classes} chromatic-ignore`
        : "chromatic-ignore";
    }
  });
}

const baseData = {
  content_type: "listing",
  page_title: "Projects",
  header: header,
  footer: layout.footer,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
};

const demoDetails = {
  ...baseData,
  ...dataContent,
  ...dataExtraDetails,
  banner: banner,
  social_block: true,
  share: share,
  authors: {
    title: "Authors",
    title_id: "authors",
    listing: ["José Luis Pabón Barrios", "Adjur Tichar"],
  },
};

const demoDetailsMultiple = {
  ...baseData,
  ...dataContent,
  ...dataExtraDetails,
  banner: banner,
  social_block: true,
  share: share,
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
  pagination: pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
  banner: {
    ...pageTitleBanner,
    title: {
      content: "Publications",
      tag: "h1",
    },
  },
};

export default {
  title: "Features/Publication",
  decorators: [withCode, withDesign, initScrollspy],
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true,
    },
    badges: ["stable"],
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=4298%3A144965",
      },
    ],
  },
};

export const Listing = () => listingPage(correctPaths(demoListing));
Listing.decorators = [initBadges];

export const Details = () => detailsPage(correctPaths(demoDetails));

export const DetailsMultiple = () =>
  detailsPage(correctPaths(demoDetailsMultiple));
DetailsMultiple.storyName = "Details (multiple authors)";
