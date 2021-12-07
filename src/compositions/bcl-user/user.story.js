import { correctPaths, initBadges } from "@openeuropa/bcl-story-utils";
import demoDataListing from "@openeuropa/bcl-user/data-user-listing.js";
import demoDataEdit from "@openeuropa/bcl-user/data-user-edit.js";
import demoDataView from "@openeuropa/bcl-user/data-user-view.js";
import demoDataViewCompact from "@openeuropa/bcl-user/data-user-view-compact";
import header from "@openeuropa/bcl-data-header/data--simple";
import footer from "@openeuropa/bcl-data-footer/data";
import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";
import editUser from "@openeuropa/bcl-user/user-edit.html.twig";
import viewUser from "@openeuropa/bcl-user/user-view.html.twig";
import viewUserCompact from "@openeuropa/bcl-user/user-view-compact.html.twig";
import drupalAttribute from "drupal-attribute";

const data = {
  with_header: true,
  with_footer: true,
  header: header,
  footer: {
    ...footer,
    attributes: new drupalAttribute().addClass("mt-4"),
  },
  content_type: "users",
};

const dataListing = {
  page_title: "users",
  with_banner: true,
  with_sidebar: true,
  ...demoDataListing,
  ...data,
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
  title: "Pages/Users",
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
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
