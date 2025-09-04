import { correctPaths } from "@openeuropa/bcl-story-utils";

import demoDataListing from "@openeuropa/bcl-glossary/data/data--listing";
import demoDataDetails from "@openeuropa/bcl-glossary/data/data--detail";

import pageTemplate from "@openeuropa/bcl-glossary/glossary-detail.html.twig";
import listingPage from "@openeuropa/bcl-glossary/glossary-listing.html.twig";

export default {
  title: "Features/Glossary",
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true,
    },
    badges: ["stable", "deprecated"],
    badgesConfig: {
      stable: {
        title: "v1",
      },
    },
  },
};

export const Listing = () => listingPage(correctPaths(demoDataListing));

export const Details = () => pageTemplate(correctPaths(demoDataDetails));
