import { withDesign } from "storybook-addon-designs";
import isChromatic from "chromatic/isChromatic";
import {
  initBadges,
  correctPaths,
  initScrollspy,
} from "@openeuropa/bcl-story-utils";
import drupalAttribute from "drupal-attribute";
import header from "@openeuropa/bcl-data-header/data--simple";
import dataListing from "@openeuropa/bcl-project/data/data_listing";
import dataContent from "@openeuropa/bcl-project/data/ucpkn/data";
import dataStatus from "@openeuropa/bcl-project/data/ucpkn/data_status";
import dataExtraDetails from "@openeuropa/bcl-project/data/ucpkn/data_extra_details";
import footer from "@openeuropa/bcl-data-footer/data";
import detailsPage from "@openeuropa/bcl-project/project.html.twig";
import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";

if (isChromatic()) {
  dataContent.gallery.listing.forEach((item) => {
    item.attributes = new drupalAttribute().addClass("chromatic-ignore");
  });
  dataExtraDetails.banner.image.classes = "chromatic-ignore";
  dataListing.listing.items.forEach((item) => {
    if (item.image) {
      item.image.classes = item.image.classes
        ? `${item.image.classes} chromatic-ignore`
        : "chromatic-ignore";
    }
  });
}

const baseData = {
  content_type: "listing",
  page_title: "Projects",
  header: header,
  footer: {
    ...footer,
    attributes: new drupalAttribute().addClass("mt-5"),
  },
  with_header: true,
  with_footer: true,
  with_sidebar: true,
};

const demoPage = {
  ...baseData,
  ...dataContent,
  ...dataExtraDetails,
  social_block: true,
};

const ongoingDemo = {
  ...demoPage,
  project_status: {
    ...dataStatus,
    status: "ongoing",
    badge: "Ongoing",
    progress: 25,
  },
};

const closedDemo = {
  ...demoPage,
  project_status: {
    ...dataStatus,
    status: "closed",
    badge: "Closed",
    progress: 100,
  },
};

const plannedDemo = {
  ...demoPage,
  project_status: {
    ...dataStatus,
    status: "planned",
    badge: "Not started",
    progress: 0,
  },
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
    badges: ["stable"],
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

export const Ongoing = () => detailsPage(correctPaths(ongoingDemo, "default"));
Ongoing.storyName = "Project page (ongoing)";

export const Closed = () => detailsPage(correctPaths(closedDemo, "default"));
Closed.storyName = "Project page (closed)";

export const Planned = () => detailsPage(correctPaths(plannedDemo, "default"));
Planned.storyName = "Project page (planned)";
