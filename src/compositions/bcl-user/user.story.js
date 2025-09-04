import { correctPaths, initBadges } from "@openeuropa/bcl-story-utils";

import {
  dataListing,
  dataUser,
  dataTerms,
  demoDataCompact,
} from "@openeuropa/bcl-user/data/data";

import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";
import user from "@openeuropa/bcl-user/user.html.twig";
import userCompact from "@openeuropa/bcl-user/user-compact.html.twig";
import userTerms from "@openeuropa/bcl-user/user-terms.html.twig";

const initMultiselect = (story) => {
  const demo = story();
  return `
    <script>
      if (document.querySelector(".multi-select")) {
        new SlimSelect({
          select: ".multi-select",
          selectByGroup: true,
          placeholder: "Please select a value",
        });
      }
    </script>
  ${demo}`;
};

const cancelTab = (story) => {
  const demo = story();
  return `
    <script>
      document.getElementById("cancel-btn").onclick = function () {
        var cancelTrigger = document.querySelector('[data-bs-target="#cancel"]');
        var cancelTab = new bootstrap.Tab(cancelTrigger);
      
        cancelTab.show();
      };
    </script>
  ${demo}`;
};

export default {
  title: "Features/Users",
  decorators: [initMultiselect, cancelTab],
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    badges: ["stable", "deprecated"],
    a11y: {
      config: {
        rules: [
          { id: "aria-required-parent", enabled: false },
          { id: "nested-interactive", enabled: false },
        ],
      },
    },
  },
};

export const Default = () => user(correctPaths(dataUser));

export const Listing = () => listingPage(correctPaths(dataListing));

Listing.decorators = [initBadges];

export const Compact = () => userCompact(demoDataCompact);

export const Terms = () => userTerms(dataTerms);
Terms.storyName = "Terms and conditions";
