import { withDesign } from "storybook-addon-designs";
import { initBadges, correctPaths } from "@openeuropa/bcl-story-utils";
import header from "@openeuropa/bcl-data-header/data--simple";
import dataListing from "@openeuropa/bcl-project/data/data_listing.js";
import dataDetails from "@openeuropa/bcl-project/data/data_details.js";
import footer from "@openeuropa/bcl-data-footer/data";
import detailsPage from "@openeuropa/bcl-project/details.html.twig";
import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";
import drupalAttribute from "drupal-attribute";

const share = `<div class="bg-gray-200 py-4 mt-4"><div class="container">Share module here</div></div>`;

const baseData = {
  content_type: "listing",
  page_title: "Projects",
  header: header,
  footer: footer,
  with_header: true,
  with_footer: true,
};

const demoDetails = {
  ...baseData,
  ...dataDetails,
  share: share,
};

const demoDetailsClosed = {
  ...baseData,
  ...dataDetails,
  share: share,
  status_badge: {
    background: "dark",
    label: "Closed",
    attributes: new drupalAttribute().addClass(["mb-3", "mb-md-0"]),
  },
  progress: {
    progress: 100,
    variant: "dark",
    hidden_label: true,
  },
};

const demoDetailsNotStarted = {
  ...baseData,
  ...dataDetails,
  share: share,
  status_badge: {
    background: "secondary",
    label: "Not started",
    attributes: new drupalAttribute().addClass(["mb-3", "mb-md-0"]),
  },
  progress: {
    progress: 0,
    variant: "secondary",
    hidden_label: true,
  },
};

const demoListing = {
  ...baseData,
  ...dataListing,
  with_sidebar: true,
};

export default {
  title: "Content types/Project",
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

export const DetailsOngoing = () =>
  detailsPage(correctPaths(demoDetails, "default"));
DetailsOngoing.storyName = "Details Ongoing";

export const DetailsClosed = () =>
  detailsPage(correctPaths(demoDetailsClosed, "default"));
DetailsClosed.storyName = "Details Closed";

export const DetailsNotStarted = () =>
  detailsPage(correctPaths(demoDetailsNotStarted, "default"));
DetailsNotStarted.storyName = "Details Not Started";
