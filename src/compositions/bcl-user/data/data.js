import isChromatic from "chromatic/isChromatic";
import layout from "@openeuropa/bcl-base-templates/data/layout";
import { pageTitleBanner } from "@openeuropa/bcl-base-templates/data/content-page";
import {
  filterButton,
  pagination,
  sortSelect,
  listingProfiles,
} from "@openeuropa/bcl-base-templates/data/listing-page";
import demoDataCompact from "@openeuropa/bcl-user/data/data--user-compact";
import demoDataListing from "@openeuropa/bcl-user/data/data--user-listing";
import demoDataTerms from "@openeuropa/bcl-user/data/data--terms";
import demoDataForm from "@openeuropa/bcl-user/data/data--form";

const header =
  layout[`header_${process.env.STORYBOOK_THEME}`] || layout.headerSimple;

if (isChromatic()) {
  demoDataCompact.picture.classes = "chromatic-ignore";
  demoDataForm.view.banner.image.classes = demoDataForm.view.banner.image.classes
    ? `${demoDataForm.view.banner.image.classes} chromatic-ignore`
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
  header,
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
  pagination,
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
  ...demoDataForm,
};

const dataTerms = {
  ...demoDataTerms,
  ...baseData,
  banner: {
    title: "Terms and conditions",
    title_tag: "h1",
  },
};

export { dataListing, dataUser, dataTerms, demoDataCompact };
