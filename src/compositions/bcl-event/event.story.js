import {
  initScrollspy,
  initBadges,
  correctPaths,
} from "@openeuropa/bcl-story-utils";
import {
  demoData,
  demoDateData,
  demoListing,
} from "@openeuropa/bcl-event/data/data";

import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";
import event from "@openeuropa/bcl-event/event.html.twig";

const getArgs = () => ({
  toggleText: false,
  toggleImage: false,
});

const getArgTypes = () => ({
  toggleText: {
    name: "text in the page banner",
    type: { name: "boolean" },
    description: "Toggle text in the page banner",
  },
  toggleImage: {
    name: "image in the page banner",
    type: { name: "boolean" },
    description: "Toggle iamge in the page banner",
  },
});

export default {
  title: "Features/Event",
  parameters: {
    layout: "fullscreen",
    badges: ["stable", "deprecated"],
    badgesConfig: {
      stable: {
        title: "v1.2",
      },
    },
    controls: {
      disable: true,
    },
  },
};

const applyArgs = (data, args) => {
  if (args.toggleText) {
    data.banner.content = demoData.banner.content;
    data.banner.attributes.removeClass(["pb-4", "mb-0"]);
  } else {
    data.banner.content = "";
    if (!args.toggleImage) {
      data.banner.attributes.addClass(["pb-4", "mb-0"]);
    }
  }
  if (args.toggleImage) {
    data.banner.image_size = "sm";
    data.banner.image = demoData.banner.image;
    data.banner.attributes.removeClass(["pb-4", "mb-0"]);
  } else {
    data.banner.image = "";
    if (!args.toggleText) {
      data.banner.attributes.addClass(["pb-4", "mb-0"]);
    }
  }

  return data;
};

export const FullPage = () => event(correctPaths(demoData));

FullPage.storyName = "Event page";
FullPage.decorators = [initScrollspy];
FullPage.parameters = {
  design: [
    {
      name: "Mockup - Desktop",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10377%3A236492",
    },
    {
      name: "Mockup - Mobile",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10377%3A236626",
    },
  ],
};

export const FullPage1 = () => event(correctPaths(demoDateData));

FullPage1.storyName = "Event page with date";
FullPage1.decorators = [initScrollspy];
FullPage1.parameters = {
  design: [
    {
      name: "Mockup - Desktop",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10377%3A236508",
    },
    {
      name: "Mockup - Mobile",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10377%3A236637",
    },
  ],
};

export const Listing = (args) =>
  listingPage(applyArgs(correctPaths(demoListing), args));

Listing.storyName = "Event listing";
Listing.decorators = [initBadges];
Listing.args = getArgs();
Listing.argTypes = getArgTypes();
Listing.parameters = {
  design: [
    {
      name: "Mockup - Desktop",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10377%3A236436",
    },
    {
      name: "Mockup - Mobile",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10377%3A236574",
    },
  ],
};
