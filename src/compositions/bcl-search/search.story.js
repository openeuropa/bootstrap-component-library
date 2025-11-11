import {
  initMultiselects,
  initBadges,
  correctPaths,
} from "@openeuropa/bcl-story-utils";
import dataListing from "@openeuropa/bcl-search/data/data";

import search from "@openeuropa/bcl-search/search.html.twig";

export default {
  title: "Features/Search",
  decorators: [initMultiselects, initBadges],
  parameters: {
    a11y: {
      config: {
        rules: [
          { id: "landmark-unique", enabled: false },
          { id: "aria-input-field-name", enabled: false },
        ],
      },
    },
    badges: ["stable", "deprecated"],
    layout: "fullscreen",
    controls: { disable: true },
    design: [
      {
        name: "Mockup - Desktop",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10377%3A265033",
      },
      {
        name: "Mockup - Mobile",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10377%3A265100",
      },
    ],
  },
};

export const Default = () => search(correctPaths(dataListing));
