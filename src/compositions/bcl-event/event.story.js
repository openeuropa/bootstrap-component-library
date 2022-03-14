import { withDesign } from "storybook-addon-designs";
import {
  initScrollspy,
  initBadges,
  correctPaths,
} from "@openeuropa/bcl-story-utils";
import header from "@openeuropa/bcl-data-header/data--simple";
import listing from "@openeuropa/bcl-listing/data/listing--date";
import footer from "@openeuropa/bcl-data-footer/data";
import file from "@openeuropa/bcl-file/data/data";
import banner from "@openeuropa/bcl-content-banner/data/data";
import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";
import filterButton from "@openeuropa/bcl-data-button/data--filter";
import pagination from "@openeuropa/bcl-data-pagination/data--listing";
import sortSelect from "@openeuropa/bcl-data-select/data--sort";
import drupalAttribute from "drupal-attribute";

import dataListing from "@openeuropa/bcl-event/data/data--listing";
import dataPage from "@openeuropa/bcl-event/data/data--page";
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

let banner_simple = {
  ...banner,
};
delete banner_simple.image;

const demoData = {
  ...baseData,
  ...dataPage,
  banner: banner_simple,
  files: files,
};

const demoData1 = {
  ...baseData,
  ...dataPage,
  banner: banner,
  files: files,
};

const demoListing = {
  ...baseData,
  ...dataListing,
  pagination: pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
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
