import {
  banner,
  fileThumbnail,
  featuredItem,
  accordion,
  timeline,
  simpleBanner,
  pageBanner,
  blockquote,
} from "@openeuropa/bcl-base-templates/data/content-page";
import layout from "@openeuropa/bcl-base-templates/data/layout";
import drupalAttribute from "drupal-attribute";

import listing from "@openeuropa/bcl-page/data/data--listing";
import files from "@openeuropa/bcl-page/data/data--files";
import listingDefault from "@openeuropa/bcl-page/data/data--listing-default";
import sidebar from "@openeuropa/bcl-page/data/data--sidebar";

const header = layout[`header_default`] || layout.headerSimple;

const filesThumbnail = [
  { ...fileThumbnail, attributes: new drupalAttribute().addClass(["mb-3"]) },
  { ...fileThumbnail, attributes: new drupalAttribute().addClass(["mb-3"]) },
];

delete banner.service_buttons;
delete featuredItem.title;

const baseData = {
  content_type: "page",
  header,
  footer: layout.footer,
  sidebar,
  with_banner: true,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
};

const demoData = {
  ...baseData,
  featured_item: featuredItem,
  blockquote,
  page_banner: pageBanner,
  banner,
  files,
};

const demoData1 = {
  ...baseData,
  banner: simpleBanner,
  listing,
  files,
  accordion: {
    ...accordion,
    attributes: new drupalAttribute().addClass(["pb-4"]),
  },
};

const demoData2 = {
  ...baseData,
  banner: {
    ...simpleBanner,
    background: "gray",
  },
  listing: listingDefault,
  files: filesThumbnail,
  timeline,
};

export { demoData, demoData1, demoData2 };
