import { withDesign } from "storybook-addon-designs";
import {
  initScrollspy,
  initBadges,
  correctPaths,
} from "@openeuropa/bcl-story-utils";
import header from "@openeuropa/bcl-data-header/data--simple";
import listing from "@openeuropa/bcl-listing/data/listing--date.js";
import dataListing from "@openeuropa/bcl-event/data/data-listing.js";
import dataPage from "@openeuropa/bcl-event/data/data-page.js";
import footer from "@openeuropa/bcl-data-footer/data";
import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";
import event from "@openeuropa/bcl-event/event.html.twig";
import file from "@openeuropa/bcl-file/data.js";
import drupalAttribute from "drupal-attribute";

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
    },
  },
  files: files,
};

const demoListing = {
  ...baseData,
  ...dataListing,
  listing: {
    ...listing,
    variant: "default-1-col",
    link: false,
    title: false,
  },
};

export default {
  title: "Content types/Event",
  decorators: [withDesign],
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true,
    },
    design: [
      {
        name: "Mockup - Event (desktop)",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=3962%3A138013",
      },
      {
        name: "Mockup - Event (mobile)",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=3962%3A138148",
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
