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
import drupalAttribute from "drupal-attribute";

import demoDataListing from "@openeuropa/bcl-user/data/data--user-listing";
import demoDataEdit from "@openeuropa/bcl-user/data/data--user-edit";
import demoDataView from "@openeuropa/bcl-user/data/data--user-view";
import demoDataViewCompact from "@openeuropa/bcl-user/data/data--user-view-compact";
import editUser from "@openeuropa/bcl-user/user-edit.html.twig";
import viewUser from "@openeuropa/bcl-user/user-view.html.twig";
import viewUserCompact from "@openeuropa/bcl-user/user-view-compact.html.twig";

const header =
  layout[`header_${process.env.STORYBOOK_THEME}`] || layout.headerSimple;

if (isChromatic()) {
  demoDataViewCompact.picture.classes = "chromatic-ignore";
  demoDataView.banner.image.classes = demoDataView.banner.image.classes
    ? `${demoDataView.banner.image.classes} chromatic-ignore`
    : "chromatic-ignore";
  listingProfiles.items.forEach((item) => {
    item.image.classes = item.image.classes
      ? `${item.image.classes} chromatic-ignore`
      : "chromatic-ignore";
  });
}

const data = {
  with_header: true,
  with_footer: true,
  header: header,
  footer: {
    ...layout.footer,
    attributes: new drupalAttribute().addClass("mt-4"),
  },
  content_type: "users",
};

const dataListing = {
  title: "users",
  with_banner: true,
  with_sidebar: true,
  ...demoDataListing,
  ...data,
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

const dataEdit = {
  content_type: "users",
  ...demoDataEdit,
  ...data,
};

const dataView = {
  content_type: "users",
  ...demoDataView,
  ...data,
};

export default {
  title: "Features/Users",
  decorators: [withCode, withDesign],
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

export const Edit = () => editUser(correctPaths(dataEdit));

Edit.parameters = {
  design: [
    {
      name: "Mockup - Profile Information",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=1126%3A39536",
    },
    {
      name: "Mockup - Privacy Settings",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=1142%3A34290",
    },
  ],
};

export const View = () => viewUser(correctPaths(dataView));

View.parameters = {
  design: [
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=1126%3A38732",
    },
  ],
};

export const ViewCompact = () => viewUserCompact(demoDataViewCompact);

ViewCompact.parameters = {
  layout: "padded",
  design: [
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=4362%3A43580",
    },
  ],
};
