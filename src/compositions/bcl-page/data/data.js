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
import isChromatic from "chromatic/isChromatic";
import drupalAttribute from "drupal-attribute";

import listing from "@openeuropa/bcl-page/data/data--listing";
import files from "@openeuropa/bcl-page/data/data--files";
import listingDefault from "@openeuropa/bcl-page/data/data--listing-default";
import sidebar from "@openeuropa/bcl-page/data/data--sidebar";

const header =
  layout[`header_${process.env.STORYBOOK_THEME}`] || layout.headerSimple;

if (isChromatic()) {
  banner.image.classes = "chromatic-ignore";
  featuredItem.embedded_media =
    '<iframe class="chromatic-ignore" title="New digital strategy" width="350" height="197" src="https://www.youtube.com/embed/fgi-GSCB6ho" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>';
}

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
  attributes: new drupalAttribute().addClass("bcl-scrollspy-wrapper"),
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
