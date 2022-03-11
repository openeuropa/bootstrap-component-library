import { withDesign } from "storybook-addon-designs";
import { initBadges, correctPaths } from "@openeuropa/bcl-story-utils";
import isChromatic from "chromatic/isChromatic";
import header from "@openeuropa/bcl-data-header/data--simple";
import footer from "@openeuropa/bcl-data-footer/data";
import dataListingTemplate from "@openeuropa/bcl-data-templates/listing/data--template";
import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";
import news from "@openeuropa/bcl-base-templates/content-type.html.twig";
import banner from "@openeuropa/bcl-content-banner/data/data.js";

import dataListing from "@openeuropa/bcl-news/data/data_listing.js";
import content from "@openeuropa/bcl-news/data/data_content.js";
const feedback = `<div class="bg-lighter py-4 mt-md-4-5 mt-4 text-center">Feedback module here</div>`;
const share = `<div class="bg-gray-200 py-4 text-center">Share module here</div>`;

if (isChromatic()) {
  banner.image.classes = "chromatic-ignore";
  dataListing.listing.items.forEach((item) => {
    item.image.classes = item.image.classes
      ? `${item.image.classes} chromatic-ignore`
      : "chromatic-ignore";
  });
}

const baseData = {
  content_type: "news",
  page_title: "News",
  header: header,
  footer: footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
};

const demoData = {
  ...baseData,
  banner: banner,
  content: content,
  feedback: feedback,
  share: share,
};

const demoListing = {
  ...baseData,
  ...dataListing,
  ...dataListingTemplate,
  with_sidebar: true,
};

export default {
  title: "Features/News",
  decorators: [withDesign],
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true,
    },
    badges: ["stable"],
    design: [
      {
        name: "Mockup - News (desktop)",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=3504%3A123262",
      },
      {
        name: "Mockup - News (mobile)",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=3378%3A107467",
      },
    ],
  },
};

export const FullPage = () => news(correctPaths(demoData, "default"));

FullPage.storyName = "News page";

export const Listing = () => listingPage(correctPaths(demoListing, "listing"));

Listing.storyName = "News listing";
Listing.decorators = [initBadges];
