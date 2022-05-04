import withCode from "@openeuropa/storybook-addon-code";
import { withDesign } from "storybook-addon-designs";
import isChromatic from "chromatic/isChromatic";

import { correctPaths, initBadges } from "@openeuropa/bcl-story-utils";
import layout from "@openeuropa/bcl-base-templates/data/layout";
import { pageTitleBanner } from "@openeuropa/bcl-base-templates/data/content-page";
import {
  filterButton,
  pagination,
  sortSelect,
  listingProfiles,
} from "@openeuropa/bcl-base-templates/data/listing-page";
import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";

import demoDataListing from "@openeuropa/bcl-user/data/data--user-listing";
import demoDataCompact from "@openeuropa/bcl-user/data/data--user-view-compact";
import demoData from "@openeuropa/bcl-user/data/data";

import user from "@openeuropa/bcl-user/user.html.twig";
import userCompact from "@openeuropa/bcl-user/user-view-compact.html.twig";

const header =
  layout[`header_${process.env.STORYBOOK_THEME}`] || layout.headerSimple;

if (isChromatic()) {
  demoDataViewCompact.picture.classes = "chromatic-ignore";
  demoData.view.banner.image.classes = demoData.view.banner.image.classes
    ? `${demoData.view.banner.image.classes} chromatic-ignore`
    : "chromatic-ignore";
  listingProfiles.items.forEach((item) => {
    item.image.classes = item.image.classes
      ? `${item.image.classes} chromatic-ignore`
      : "chromatic-ignore";
  });
}

const baseData = {
  with_header: true,
  with_footer: true,
  header: header,
  footer: layout.footer,
  content_type: "users",
};

const dataListing = {
  title: "users",
  with_banner: true,
  with_sidebar: true,
  ...demoDataListing,
  ...baseData,
  listing: listingProfiles,
  pagination: pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
  banner: {
    ...pageTitleBanner,
    title: "Users",
    title_tag: "h1",
  },
};

const dataUser = {
  ...baseData,
  content_type: "user",
  ...demoData,
};

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

export default {
  title: "Features/Users",
  decorators: [withCode, withDesign, initMultiselect],
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    badges: ["stable"],
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
Listing.parameters = {
  design: [
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=1122%3A33486",
    },
  ],
};

export const Compact = () => userCompact(demoDataCompact);

Compact.parameters = {
  layout: "padded",
  design: [
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=4362%3A43580",
    },
  ],
};
