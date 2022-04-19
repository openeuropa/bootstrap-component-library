import withCode from "@openeuropa/storybook-addon-code";
import { withDesign } from "storybook-addon-designs";
import isChromatic from "chromatic/isChromatic";

import {
  initListings,
  initBadges,
  correctPaths,
} from "@openeuropa/bcl-story-utils";
import layout from "@openeuropa/bcl-base-templates/data/layout";
import {
  filterButton,
  pagination,
  sortSelect,
} from "@openeuropa/bcl-base-templates/data/listing-page";
import drupalAttribute from "drupal-attribute";

import demoData from "@openeuropa/bcl-search/data/data--search";
import search from "@openeuropa/bcl-search/search.html.twig";

if (isChromatic()) {
  demoData.listing.items.forEach((item) => {
    item.image.classes = item.image.classes
      ? `${item.image.classes} chromatic-ignore`
      : `chromatic-ignore`;
  });
}

const dataListing = {
  page_title: "Search results",
  content_type: "search",
  header: layout.headerNoForm,
  footer: {
    ...layout.footer,
    attributes: new drupalAttribute().addClass("mt-4"),
  },
  with_banner: true,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
  pagination: pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
  ...demoData,
};

export default {
  title: "Features/Search",
  decorators: [withCode, withDesign, initListings, initBadges],
  parameters: {
    a11y: {
      config: {
        rules: [
          { id: "landmark-unique", enabled: false },
          { id: "aria-input-field-name", enabled: false },
        ],
      },
    },
    badges: ["stable"],
    layout: "fullscreen",
    controls: { disable: true },
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=43%3A0",
      },
    ],
  },
};

export const Default = () => search(correctPaths(dataListing));
