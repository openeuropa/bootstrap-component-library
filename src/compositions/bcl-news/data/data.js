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

import dataListing from "@openeuropa/bcl-news/data/data--listing";
import content from "@openeuropa/bcl-news/data/data--content";

const header = layout[`header_default`] || layout.headerSimple;

const baseData = {
  content_type: "news",
  header,
  footer: layout.footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
};

const demoData = {
  ...baseData,
  banner,
  content,
  share,
};

const demoListing = {
  ...baseData,
  ...dataListing,
  title: "Results",
  pagination,
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
