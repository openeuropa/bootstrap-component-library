import isChromatic from "chromatic/isChromatic";
import layout from "@openeuropa/bcl-base-templates/data/layout";
import {
  filterButton,
  pagination,
  sortSelect,
} from "@openeuropa/bcl-base-templates/data/listing-page";

import demoData from "@openeuropa/bcl-search/data/data--search";

const chromatic = process.env.STORYBOOK_ENV;

if (isChromatic() || chromatic) {
  demoData.listing.items.forEach((item) => {
    item.image.classes = item.image.classes
      ? `${item.image.classes} chromatic-ignore`
      : `chromatic-ignore`;
  });
}

const dataListing = {
  title: "Results",
  content_type: "search",
  header: layout.headerNoForm,
  footer: layout.footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
  pagination: pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
  ...demoData,
};

export { dataListing };
