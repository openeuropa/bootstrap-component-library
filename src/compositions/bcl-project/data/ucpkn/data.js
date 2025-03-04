import layout from "@openeuropa/bcl-base-templates/data/layout";
import {
  filterButton,
  pagination,
  sortSelect,
} from "@openeuropa/bcl-base-templates/data/listing-page";

import { banner } from "@openeuropa/bcl-base-templates/data/content-page";
import dataOngoing from "@openeuropa/bcl-project-status/data/data--ongoing";
import dataPlanned from "@openeuropa/bcl-project-status/data/data--planned";
import dataClosed from "@openeuropa/bcl-project-status/data/data--closed";
import dataListing from "@openeuropa/bcl-project/data/data--listing";
import dataLists from "@openeuropa/bcl-project/data/ucpkn/data--lists";
import dataContent from "@openeuropa/bcl-project/data/ucpkn/data";
import dataStatusContributions from "@openeuropa/bcl-project-status/data/data--contributions";
import dataExtraDetails from "@openeuropa/bcl-project/data/ucpkn/data--extra-details";

const baseData = {
  content_type: "listing",
  title: "Projects",
  header: layout.header_ucpkn,
  footer: layout.footer,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
};

const demoPage = {
  ...baseData,
  ...dataContent,
  ...dataExtraDetails,
  ...dataLists,
  banner,
  project_status_title: "Project details",
  project_status_id: "project-details",
  project_contributions: dataStatusContributions,
  social_block: true,
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
  pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
};

export { demoListing, ongoingDemo, closedDemo, plannedDemo };
