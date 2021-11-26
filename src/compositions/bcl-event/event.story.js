import { withDesign } from "storybook-addon-designs";
import { initBadges, correctPaths } from "@openeuropa/bcl-story-utils";
import sidebar from "@openeuropa/bcl-event/data/event-sidebar.js";
import header from "@openeuropa/bcl-data-header/data--simple";
import dataListing from "@openeuropa/bcl-news/data/data_listing.js";
import footer from "@openeuropa/bcl-data-footer/data";
import content from "@openeuropa/bcl-news/data/data_content.js";
import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";
import eventCt from "@openeuropa/bcl-event/event.html.twig";
import file from "@openeuropa/bcl-file/data.js";
import drupalAttribute from "drupal-attribute";

delete file.translation;
const files = [file, file];

const baseData = {
  title:
    "Translation, Interpreting, Culture 2: Human Factor in translation Technologies",
  content_type: "event",
  header: header,
  footer: footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
};

const demoData = {
  ...baseData,
  sidebar: sidebar,
  with_sidebar: true,
  files: files,
};

const demoListing = {
  ...baseData,
  ...dataListing,
  with_sidebar: true,
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
        name: "Mockup -Event (mobile)",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=3962%3A138148",
      },
    ],
  },
};

export const FullPage = () => eventCt(correctPaths(demoData));

FullPage.storyName = "Event page";

export const Listing = () => listingPage(correctPaths(demoListing));

Listing.storyName = "Event listing";
Listing.decorators = [initBadges];
