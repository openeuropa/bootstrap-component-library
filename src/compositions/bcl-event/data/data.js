import isChromatic from "chromatic/isChromatic";
import drupalAttribute from "drupal-attribute";

import {
  filterButton,
  pagination,
  sortSelect,
  listingDate,
} from "@openeuropa/bcl-base-templates/data/listing-page";
import { file } from "@openeuropa/bcl-base-templates/data/content-page";

import {
  detailsListSingle,
  detailsListMultiple,
} from "@openeuropa/bcl-event/data/data--details";

import date from "@openeuropa/bcl-date-block/data/data";
import layout from "@openeuropa/bcl-base-templates/data/layout";

import dataListing from "@openeuropa/bcl-event/data/data--listing";
import dataPage from "@openeuropa/bcl-event/data/data--page";

const chromatic = process.env.STORYBOOK_ENV;

const header =
  layout[`header_${process.env.STORYBOOK_THEME}`] || layout.headerSimple;

if (isChromatic() || chromatic) {
  dataPage.banner.image.classes = "chromatic-ignore";
}

const simpleFile = { ...file };

delete simpleFile.translation;
simpleFile.attributes = new drupalAttribute().addClass(["mb-3-5"]);
const files = [simpleFile, simpleFile];

const baseData = {
  content_type: "event",
  header,
  footer: layout.footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
};

const banner_simple = {
  ...dataPage.banner,
};
delete banner_simple.image;

const demoData = {
  ...baseData,
  ...detailsListSingle,
  ...dataPage,
  files,
};

const demoDateData = {
  ...baseData,
  ...dataPage,
  ...detailsListMultiple,
  banner: {
    ...dataPage.banner,
    image: {},
    date,
  },
  files,
};

const demoListing = {
  ...baseData,
  ...dataListing,
  title: "Results",
  pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
  listing: {
    ...listingDate,
    variant: "default-1-col",
    link: false,
    title: false,
  },
  banner: {
    title: "Events",
    title_tag: "h1",
    attributes: new drupalAttribute(),
  },
};

export { demoData, demoDateData, demoListing };
