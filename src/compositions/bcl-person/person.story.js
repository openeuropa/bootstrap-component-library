import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import { initBadges, correctPaths } from "@openeuropa/bcl-story-utils";
import isChromatic from "chromatic/isChromatic";
import {
  headerSimple,
  footer,
} from "@openeuropa/bcl-base-templates/data/layout";
import {
  filterButton,
  pagination,
  sortSelect,
  listingProfiles,
} from "@openeuropa/bcl-base-templates/data/listing-page";
import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";

import dataListing from "@openeuropa/bcl-person/data/data--listing";
import dataDetails from "@openeuropa/bcl-person/data/data--details";
import detailsPage from "@openeuropa/bcl-person/person.html.twig";

const baseData = {
  content_type: "listing",
  page_title: "People",
  header: headerSimple,
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
  pagination: pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
  listing: listingProfiles,
};

if (isChromatic()) {
  dataDetails.banner.image.classes = "chromatic-ignore";
  listingProfiles.items.forEach((item) => {
    item.image.classes = item.image.classes
      ? `${item.image.classes} chromatic-ignore`
      : "chromatic-ignore";
  });
}

export default {
  title: "Features/Person",
  decorators: [withCode, withDesign],
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
