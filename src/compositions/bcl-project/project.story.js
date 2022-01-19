import { withDesign } from "storybook-addon-designs";
import { initBadges, correctPaths } from "@openeuropa/bcl-story-utils";
import header from "@openeuropa/bcl-data-header/data--simple";
import dataListing from "@openeuropa/bcl-project/data/data_listing.js";
import footer from "@openeuropa/bcl-data-footer/data";
import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";
import drupalAttribute from "drupal-attribute";

const baseData = {
  content_type: "listing",
  page_title: "Projects",
  header: header,
  footer: {
    ...footer,
    attributes: new drupalAttribute().addClass("mt-4"),
  },
  with_header: true,
  with_footer: true,
};

const demoListing = {
  ...baseData,
  ...dataListing,
  with_sidebar: true,
};

export default {
  title: "Pages/Project",
  decorators: [withDesign],
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true,
    },
  },
};

export const Listing = () => listingPage(correctPaths(demoListing));

Listing.storyName = "Listing";
Listing.decorators = [initBadges];
