import {
  correctPaths,
  initBadges,
  initListings,
} from "@openeuropa/bcl-story-utils";
import isChromatic from "chromatic/isChromatic";
import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import layout from "@openeuropa/bcl-base-templates/data/layout";
import { pageTitleBanner } from "@openeuropa/bcl-base-templates/data/content-page";
import {
  filterButton,
  pagination,
  sortSelect,
  listingProfiles,
} from "@openeuropa/bcl-base-templates/data/listing-page";
import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";

import groupListing from "@openeuropa/bcl-group/group.html.twig";
import groupLanding from "@openeuropa/bcl-group/group-landing.html.twig";
import demoData from "@openeuropa/bcl-group/data/data";
import demoDataList from "@openeuropa/bcl-group/data/data--list";
import demoDataListContent from "@openeuropa/bcl-group/data/data--list-content";
import demoDataListMember from "@openeuropa/bcl-group/data/data--list-member";
import demoDataLanding from "@openeuropa/bcl-group/data/data--landing";

const header =
  layout[`header_${process.env.STORYBOOK_THEME}`] || layout.headerSimple;

if (isChromatic()) {
  demoDataListContent.listing.items.forEach((item) => {
    item.image.classes = item.image.classes
      ? `${item.image.classes} chromatic-ignore`
      : "chromatic-ignore";
  });
  listingProfiles.items.forEach((item) => {
    item.image.classes = item.image.classes
      ? `${item.image.classes} chromatic-ignore`
      : "chromatic-ignore";
  });
  demoDataList.listing.items.forEach((item) => {
    item.image.classes = item.image.classes
      ? `${item.image.classes} chromatic-ignore`
      : "chromatic-ignore";
  });
  demoDataLanding.members.profiles.forEach((item) => {
    item.picture.classes = item.picture.classes
      ? `${item.picture.classes} chromatic-ignore`
      : "chromatic-ignore";
  });
  demoDataLanding.contact.profiles.forEach((item) => {
    item.picture.classes = item.picture.classes
      ? `${item.picture.classes} chromatic-ignore`
      : "chromatic-ignore";
  });
  demoDataLanding.recent.block_data.activities.forEach((item, i) => {
    item.image = `<img class="rounded-circle chromatic-ignore me-3-5" alt='alt-img-${i}' src="https://picsum.photos/50/50?random=${i}" />`;
  });
  demoDataLanding.contributions.listing.items.forEach((item) => {
    item.image.classes = item.image.classes
      ? `${item.image.classes} chromatic-ignore`
      : "chromatic-ignore";
  });
}

let baseData = {
  content_type: "group",
  header: header,
  footer: layout.footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
  ...demoData,
  pagination: pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
};

const dataListingContent = {
  title: "Content in the group",
  ...baseData,
  ...demoDataListContent,
};

const dataListingMember = {
  title: "Group members",
  ...baseData,
  ...demoDataListMember,
  listing: listingProfiles,
};

const dataListing = {
  title: "Results",
  ...baseData,
  ...demoDataList,
  banner: {
    ...pageTitleBanner,
    title: "Groups",
    title_tag: "h1",
  },
};

const dataLanding = {
  title: "Group members",
  content_type: "group",
  header: header,
  footer: layout.footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  ...demoDataLanding,
};

export default {
  title: "Features/Group",
  decorators: [withCode, withDesign, initBadges, initListings],
  parameters: {
    layout: "fullscreen",
    a11y: {
      config: {
        rules: [{ id: "aria-input-field-name", enabled: false }],
      },
    },
    design: [
      {
        name: "Mockup - Group",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=482%3A2559",
      },
    ],
    badges: ["stable"],
    controls: {
      disable: true,
    },
  },
};

export const List = () => listingPage(correctPaths(dataListing));

export const MemberList = () => groupListing(correctPaths(dataListingMember));

export const ContentList = () => groupListing(correctPaths(dataListingContent));

export const Landing = () => groupLanding(correctPaths(dataLanding));
Landing.parameters = {
  design: [
    {
      name: "Mockup - Group",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=482%3A2559",
    },
  ],
};
