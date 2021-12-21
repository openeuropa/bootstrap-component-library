import {
  initListings,
  initBadges,
  correctPaths,
} from "@openeuropa/bcl-story-utils";
import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-search/dataSearch.js";
import search from "@openeuropa/bcl-search/search.html.twig";
import header from "@openeuropa/bcl-data-header/data--simple";
import footer from "@openeuropa/bcl-data-footer/data";
import drupalAttribute from "drupal-attribute";

let simple_navbar = {
  ...header.navbar,
};
simple_navbar.form = null;

const dataListing = {
  page_title: "Search results",
  content_type: "search",
  header: {
    variant: {
      ...header.variant,
    },
    head: {
      ...header.head,
    },
    modals: {
      ...header.modals,
    },
    breadcrumbs: {
      ...header.breadcrumbs,
    },
    navbar: {
      ...simple_navbar,
    },
  },
  footer: {
    ...footer,
    attributes: new drupalAttribute().addClass("mt-4"),
  },
  with_banner: true,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
  ...demoData,
};

export default {
  title: "Pages/Search",
  decorators: [withDesign, initListings, initBadges],
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=43%3A0",
      },
    ],
  },
};

export const Default = () => search(correctPaths(dataListing));
