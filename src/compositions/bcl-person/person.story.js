import { withDesign } from "storybook-addon-designs";
import { initBadges, correctPaths } from "@openeuropa/bcl-story-utils";
import header from "@openeuropa/bcl-data-header/data--simple";
import dataListing from "@openeuropa/bcl-person/data/data--listing";
import dataDetails from "@openeuropa/bcl-person/data/data--details";
import footer from "@openeuropa/bcl-data-footer/data";
import detailsPage from "@openeuropa/bcl-person/person.html.twig";
import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";

const baseData = {
  content_type: "listing",
  page_title: "People",
  header: header,
  footer: footer,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
};

const demoDetails = {
  ...baseData,
  ...dataDetails,
};

const demoListing = {
  ...baseData,
  ...dataListing,
};

export default {
  title: "Features/Person",
  decorators: [withDesign],
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true,
    },
    badges: ["stable"],
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=7412%3A265333",
      },
    ],
  },
};

export const Listing = () => listingPage(correctPaths(demoListing));
Listing.decorators = [initBadges];

export const Details = () => detailsPage(correctPaths(demoDetails, "default"));
