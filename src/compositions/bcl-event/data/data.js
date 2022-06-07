import isChromatic from "chromatic/isChromatic";
import {
  filterButton,
  pagination,
  sortSelect,
  listingDate,
} from "@openeuropa/bcl-base-templates/data/listing-page";
import {
  file,
  pageTitleBanner,
} from "@openeuropa/bcl-base-templates/data/content-page";
import date from "@openeuropa/bcl-date-block/data/data";
import layout from "@openeuropa/bcl-base-templates/data/layout";
import drupalAttribute from "drupal-attribute";

import dataListing from "@openeuropa/bcl-event/data/data--listing";
import dataPage from "@openeuropa/bcl-event/data/data--page";

const chromatic = process.env.STORYBOOK_ENV;

const header =
  layout[`header_${process.env.STORYBOOK_THEME}`] || layout.headerSimple;

if (isChromatic() || chromatic) {
  dataPage.banner.image.classes = "chromatic-ignore";
}

let simpleFile = { ...file };

delete simpleFile.translation;
simpleFile.attributes = new drupalAttribute().addClass(["mb-3-5"]);
const files = [simpleFile, simpleFile];

const baseData = {
  content_type: "event",
  header: header,
  footer: layout.footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
};

let banner_simple = {
  ...dataPage.banner,
};
delete banner_simple.image;

const demoData = {
  ...baseData,
  ...dataPage,
  files: files,
};

const demoDateData = {
  ...baseData,
  ...dataPage,
  banner: {
    ...dataPage.banner,
    image: {},
    date,
  },
  files: files,
};

const demoListing = {
  ...baseData,
  ...dataListing,
  title: "Results",
  pagination: pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
  listing: {
    ...listingDate,
    variant: "default-1-col",
    link: false,
    title: false,
  },
  banner: {
    ...pageTitleBanner,
    title: "Event",
    title_tag: "h1",
  },
};

export { demoData, demoDateData, demoListing };
