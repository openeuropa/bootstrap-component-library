import { withDesign } from "storybook-addon-designs";
import {
  initBadges,
  correctPaths,
  initScrollspy,
} from "@openeuropa/bcl-story-utils";
import header from "@openeuropa/bcl-data-header/data--simple";
import dataListing from "@openeuropa/bcl-project/data/data_listing.js";
import dataDetails from "@openeuropa/bcl-details/data.js";
import dataExtraDetails from "@openeuropa/bcl-project/data/data_extra_details";
import footer from "@openeuropa/bcl-data-footer/data";
import detailsPage from "@openeuropa/bcl-project/details.html.twig";
import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";
import drupalAttribute from "drupal-attribute";

const share = `<div class="bg-gray-200 py-4 mt-4"><div class="container">Share module here</div></div>`;
const chart =
  "<img src='data:image/png;base64,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'>";

const baseData = {
  content_type: "listing",
  page_title: "Projects",
  header: header,
  footer: footer,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
};

const demoDetails = {
  ...baseData,
  ...dataExtraDetails,
  project_details: dataDetails,
  charts: chart,
  share: share,
};

const demoDetailsClosed = {
  ...baseData,
  ...dataExtraDetails,
  project_details: {
    ...dataDetails,
    status: {
      title: "Status",
      badge: {
        background: "dark",
        label: "Closed",
        attributes: new drupalAttribute().addClass(["mb-3", "mb-md-0"]),
      },
      progress: {
        progress: 100,
        variant: "dark",
        hidden_label: true,
      },
      start_date: `
      <p class="fw-bold">
        Start <br>
        <span class="fw-normal">19/12/2020</span>
      </p>`,
      end_date: `
      <p class="fw-bold text-end">
        End <br>
        <span class="fw-normal">19/12/2027</span>
      </p>`,
    },
  },
  charts: chart,
  share: share,
};

const demoDetailsNotStarted = {
  ...baseData,
  ...dataExtraDetails,
  project_details: {
    ...dataDetails,
    status: {
      title: "Status",
      badge: {
        background: "secondary",
        label: "Not started",
        attributes: new drupalAttribute().addClass(["mb-3", "mb-md-0"]),
      },
      progress: {
        progress: 0,
        variant: "secondary",
        hidden_label: true,
      },
      start_date: `
      <p class="fw-bold">
        Start <br>
        <span class="fw-normal">19/12/2020</span>
      </p>`,
      end_date: `
      <p class="fw-bold text-end">
        End <br>
        <span class="fw-normal">19/12/2027</span>
      </p>`,
    },
  },
  charts: chart,
};

const demoListing = {
  ...baseData,
  ...dataListing,
};

export default {
  title: "Features/Project",
  decorators: [withDesign, initScrollspy],
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true,
    },
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=4298%3A144965",
      },
    ],
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
