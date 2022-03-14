import { initScrollspy, correctPaths } from "@openeuropa/bcl-story-utils";
import { withDesign } from "storybook-addon-designs";
import isChromatic from "chromatic/isChromatic";
import header from "@openeuropa/bcl-data-header/data--simple";
import footer from "@openeuropa/bcl-data-footer/data";
import blockquote from "@openeuropa/bcl-data-blockquote/data";
import banner from "@openeuropa/bcl-content-banner/data/data";
import featuredItem from "@openeuropa/bcl-featured-media/data/data--featured-item";
import accordion from "@openeuropa/bcl-data-accordion/data";
import timeline from "@openeuropa/bcl-timeline/data";
import simpleBanner from "@openeuropa/bcl-content-banner/data/data--simple";
import pageBanner from "@openeuropa/bcl-banner/data/data--image";
import file from "@openeuropa/bcl-file/data/data";
import fileThumbnail from "@openeuropa/bcl-file/data/data--card";
import drupalAttribute from "drupal-attribute";

import listing from "@openeuropa/bcl-page/data/data--listing";
import listingDefault from "@openeuropa/bcl-page/data/data--listing-default";
import sidebar from "@openeuropa/bcl-page/data/data--sidebar";
import page from "@openeuropa/bcl-page/page.html.twig";

if (isChromatic()) {
  banner.image.classes = "chromatic-ignore";
  featuredItem.embedded_media =
    '<iframe class="chromatic-ignore" title="New digital strategy" width="350" height="197" src="https://www.youtube.com/embed/fgi-GSCB6ho" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>';
}

const files = [
  { ...file, attributes: new drupalAttribute().addClass(["mb-3"]) },
  { ...file, attributes: new drupalAttribute().addClass(["mb-3"]) },
];
const filesThumbnail = [
  { ...fileThumbnail, attributes: new drupalAttribute().addClass(["mb-3"]) },
  { ...fileThumbnail, attributes: new drupalAttribute().addClass(["mb-3"]) },
];

delete banner.service_buttons;
delete featuredItem.title;

const baseData = {
  content_type: "page",
  header: header,
  footer: {
    ...footer,
    attributes: new drupalAttribute().addClass("mt-3-5"),
  },
  sidebar: sidebar,
  with_banner: true,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
};

const demoData = {
  ...baseData,
  featured_item: featuredItem,
  blockquote: blockquote,
  page_banner: pageBanner,
  banner: banner,
  files: files,
};

const demoData1 = {
  ...baseData,
  banner: simpleBanner,
  listing: listing,
  files: files,
  listing: listing,
  accordion: {
    ...accordion,
    attributes: new drupalAttribute().addClass(["pb-4"]),
  },
};

const demoData2 = {
  ...baseData,
  banner: {
    ...simpleBanner,
    background: "gray",
  },
  listing: listingDefault,
  files: filesThumbnail,
  timeline: timeline,
};

export default {
  title: "Features/Page",
  decorators: [withDesign, initScrollspy],
  parameters: {
    a11y: {
      config: {
        rules: [{ id: "frame-tested", enabled: false }],
      },
    },
    badges: ["stable"],
    layout: "fullscreen",
    controls: {
      disable: true,
    },
    design: [
      {
        name: "Mockup - Page (desktop)",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=3962%3A141999",
      },
      {
        name: "Mockup -Page (mobile)",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=3962%3A142115",
      },
    ],
  },
};

export const FullPage = () => page(correctPaths({ ...demoData }));

FullPage.storyName = "Full article (example 1)";

export const FullPage1 = () => page(correctPaths({ ...demoData1 }));

FullPage1.storyName = "Full article (example 2)";

export const FullPage2 = () => page(correctPaths({ ...demoData2 }));

FullPage2.storyName = "Full article (example 3)";
