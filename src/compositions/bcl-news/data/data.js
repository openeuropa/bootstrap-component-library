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
import layout from "@openeuropa/bcl-base-templates/data/layout";
import isChromatic from "chromatic/isChromatic";

import dataListing from "@openeuropa/bcl-news/data/data--listing";
import content from "@openeuropa/bcl-news/data/data--content";

const chromatic = process.env.STORYBOOK_ENV;

if (isChromatic() || chromatic) {
  banner.image.classes = "chromatic-ignore";
  dataListing.listing.items.forEach((item) => {
    item.image.classes = item.image.classes
      ? `${item.image.classes} chromatic-ignore`
      : "chromatic-ignore";
  });
}

const header =
  layout[`header_${process.env.STORYBOOK_THEME}`] || layout.headerSimple;

const baseData = {
  content_type: "news",
  header: header,
  footer: layout.footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
};

const demoData = {
  ...baseData,
  banner: banner,
  content: content,
  share: share,
};

const demoListing = {
  ...baseData,
  ...dataListing,
  title: "Results",
  pagination: pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
  with_sidebar: true,
  banner: {
    ...pageTitleBanner,
    title: "News",
    title_tag: "h1",
  },
};

export { demoData, demoListing };
