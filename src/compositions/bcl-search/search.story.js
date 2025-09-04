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
  },
};

export const Default = () => search(correctPaths(dataListing));
