import {
  initListings,
  initBadges,
  correctPaths,
} from "@openeuropa/bcl-story-utils";
import isChromatic from "chromatic/isChromatic";
import { withDesign } from "storybook-addon-designs";
import header from "@openeuropa/bcl-data-header/data--no-form";
import footer from "@openeuropa/bcl-data-footer/data";
import dataListingTemplate from "@openeuropa/bcl-data-templates/listing/data--template";
import drupalAttribute from "drupal-attribute";

import demoData from "@openeuropa/bcl-search/data/dataSearch.js";
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
  header: header,
  footer: {
    ...footer,
    attributes: new drupalAttribute().addClass("mt-4"),
  },
  with_banner: true,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
  ...dataListingTemplate,
  ...demoData,
};

export default {
  title: "Features/Search",
  decorators: [withDesign, initListings, initBadges],
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
