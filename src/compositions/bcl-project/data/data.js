import layout from "@openeuropa/bcl-base-templates/data/layout";
import drupalAttribute from "drupal-attribute";
import {
  filterButton,
  pagination,
  sortSelect,
} from "@openeuropa/bcl-base-templates/data/listing-page";
import {
  banner,
  pageTitleBanner,
  share,
} from "@openeuropa/bcl-base-templates/data/content-page";
import dataGallery from "@openeuropa/bcl-gallery/data/data";
import dataOngoing from "@openeuropa/bcl-project-status/data/data--ongoing";
import dataPlanned from "@openeuropa/bcl-project-status/data/data--planned";
import dataClosed from "@openeuropa/bcl-project-status/data/data--closed";
import dataContributions from "@openeuropa/bcl-project-status/data/data--contributions";
import dataListing from "@openeuropa/bcl-project/data/data--listing";
import dataLists from "@openeuropa/bcl-project/data/data--lists";
import dataExtraDetails from "@openeuropa/bcl-project/data/data--extra-details";

const header =
  layout[`header_${process.env.STORYBOOK_THEME}`] || layout.headerSimple;

const baseData = {
  content_type: "listing",
  header,
  footer: layout.footer,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
};

const demoPage = {
  ...baseData,
  ...dataExtraDetails,
  ...dataLists,
  gallery: {
    title_attributes: new drupalAttribute().setAttribute("id", "gallery"),
    ...dataGallery,
  },
  project_status_title: "Project details",
  project_status_id: "project-details",
  project_contributions: dataContributions,
  banner,
  share,
};

const ongoingDemo = {
  ...demoPage,
  project_status: dataOngoing,
};

const closedDemo = {
  ...demoPage,
  project_status: dataClosed,
};

const plannedDemo = {
  ...demoPage,
  project_status: dataPlanned,
};

const demoListing = {
  ...baseData,
  ...dataListing,
  title: "Results",
  pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
  banner: {
    ...pageTitleBanner,
    title: "Projects",
    title_tag: "h1",
  },
};

export { demoListing, ongoingDemo, closedDemo, plannedDemo };
