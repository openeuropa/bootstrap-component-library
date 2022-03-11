import { withDesign } from "storybook-addon-designs";
import {
  initScrollspy,
  initBadges,
  correctPaths,
} from "@openeuropa/bcl-story-utils";
import isChromatic from "chromatic/isChromatic";
import header from "@openeuropa/bcl-data-header/data--simple";
import listing from "@openeuropa/bcl-listing/data/listing--date.js";
import footer from "@openeuropa/bcl-data-footer/data";
import file from "@openeuropa/bcl-file/data.js";
import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";
import dataListingTemplate from "@openeuropa/bcl-data-templates/listing/data--template";
import drupalAttribute from "drupal-attribute";

import dataListing from "@openeuropa/bcl-event/data/data-listing.js";
import dataPage from "@openeuropa/bcl-event/data/data-page.js";
import event from "@openeuropa/bcl-event/event.html.twig";

delete file.translation;
file.attributes = new drupalAttribute().addClass(["mb-3-5"]);
const files = [file, file];

const baseData = {
  content_type: "event",
  header: header,
  footer: {
    ...footer,
    attributes: new drupalAttribute().addClass("mt-4"),
  },
  with_banner: true,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
};

const demoData = {
  ...baseData,
  ...dataPage,
  files: files,
};

const demoData1 = {
  ...baseData,
  ...dataPage,
  banner: {
    ...dataPage.banner,
    image: {
      path: "https://picsum.photos/255/255?random=6",
      alt: "alt img",
      classes: isChromatic() ? "chromatic-ignore" : "",
    },
  },
  files: files,
};

const demoListing = {
  ...baseData,
  ...dataListingTemplate,
  ...dataListing,
  listing: {
    ...listing,
    variant: "default-1-col",
    link: false,
    title: false,
  },
};

export default {
  title: "Features/Event",
  decorators: [withDesign],
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true,
    },
    badges: ["stable"],
    badgesConfig: {
      stable: {
        title: "v1.1",
      },
    },
    design: [
      {
        name: "Mockup - Event (desktop)",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=5343%3A242940",
      },
      {
        name: "Mockup - Event (mobile)",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=5343%3A243030",
      },
    ],
  },
};

export const FullPage = () => event(correctPaths(demoData));

FullPage.storyName = "Event page";
FullPage.decorators = [initScrollspy];

export const FullPage1 = () => event(correctPaths(demoData1));

FullPage1.storyName = "Event page with image";
FullPage1.decorators = [initScrollspy];

export const Listing = () => listingPage(correctPaths(demoListing));

Listing.storyName = "Event listing";
Listing.decorators = [initBadges];
