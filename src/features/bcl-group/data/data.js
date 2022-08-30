import isChromatic from "chromatic/isChromatic";
import layout from "@openeuropa/bcl-base-templates/data/layout";
import { pageTitleBanner } from "@openeuropa/bcl-base-templates/data/content-page";
import {
  filterButton,
  pagination,
  sortSelect,
  listingProfiles,
} from "@openeuropa/bcl-base-templates/data/listing-page";
import demoDataExtra from "@openeuropa/bcl-group/data/data--extra";
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

const baseData = {
  content_type: "group",
  header,
  footer: layout.footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
  ...demoDataExtra,
  pagination,
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
  header,
  footer: layout.footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  ...demoDataLanding,
};

export { dataLanding, dataListing, dataListingMember, dataListingContent };
