import { initListings, initBadges, correctPaths } from "@openeuropa/bcl-story-utils";
import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-search/dataSearch.js";
import headerData from "@openeuropa/bcl-data-header/data.js";
import footerData from "@openeuropa/bcl-data-footer/data.js";
import search from "@openeuropa/bcl-search/search.html.twig";

demoData.data.header = headerData;
demoData.data.footer = footerData;

export default {
  title: "Compositions/Search",
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

export const Default = () => search(correctPaths(demoData));
