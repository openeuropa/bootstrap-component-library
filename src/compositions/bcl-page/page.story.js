import { initScrollspy, correctPaths } from "@openeuropa/bcl-story-utils";
import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import isChromatic from "chromatic/isChromatic";
import {
  banner,
  file,
  fileThumbnail,
  featuredItem,
  accordion,
  timeline,
  simpleBanner,
  pageBanner,
  blockquote,
} from "@openeuropa/bcl-base-templates/data/content-page";
import {
  headerSimple,
  footer,
} from "@openeuropa/bcl-base-templates/data/layout";
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
  header: headerSimple,
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
  decorators: [withCode, withDesign, initScrollspy],
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
