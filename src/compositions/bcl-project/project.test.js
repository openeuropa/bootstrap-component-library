import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import {
  headerSimple,
  footer,
} from "@openeuropa/bcl-base-templates/data/layout";
import {
  filterButton,
  pagination,
  sortSelect,
} from "@openeuropa/bcl-base-templates/data/listing-page";
import {
  banner,
  pageTitleBanner,
} from "@openeuropa/bcl-base-templates/data/content-page";
import dataOngoing from "@openeuropa/bcl-project-status/data/data--ongoing";
import dataPlanned from "@openeuropa/bcl-project-status/data/data--planned";
import dataClosed from "@openeuropa/bcl-project-status/data/data--closed";
import dataContributions from "@openeuropa/bcl-project-status/data/data--contributions";
import dataListing from "@openeuropa/bcl-project/data/data--listing";

import dataLists from "@openeuropa/bcl-project/data/data--lists";
import dataExtraDetails from "@openeuropa/bcl-project/data/data--extra-details";
import dataContent from "@openeuropa/bcl-project/data/data";

import dataListsUCPKN from "@openeuropa/bcl-project/data/ucpkn/data--lists";
import dataContentUCPKN from "@openeuropa/bcl-project/data/ucpkn/data";
import dataExtraDetailsUCPKN from "@openeuropa/bcl-project/data/ucpkn/data--extra-details";

const share = `<div class="bg-gray-200 py-4 mt-4"><div class="container">Share module here</div></div>`;
const listingTemplate = "@oe-bcl/bcl-base-templates/listing-page.html.twig";
const detailsTemplate = "@oe-bcl/bcl-project/project.html.twig";

const baseData = {
  content_type: "listing",
  page_title: "Projects",
  header: headerSimple,
  footer: footer,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
};

const demoPage = {
  ...baseData,
  ...dataContent,
  ...dataExtraDetails,
  ...dataLists,
  project_status_title: "Project details",
  project_status_id: "project-details",
  project_contributions: dataContributions,
  banner: banner,
  share: share,
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
  pagination: pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
  banner: {
    ...pageTitleBanner,
    title: {
      content: "Projects",
      tag: "h1",
    },
  },
};

const ongoingDemoUCPKN = {
  ...baseData,
  ...dataContentUCPKN,
  ...dataExtraDetailsUCPKN,
  ...dataListsUCPKN,
  banner: banner,
  social_block: true,
  project_status: dataOngoing,
  project_status_title: "Overview",
  project_status_id: "overview",
};

const renderListing = (params) =>
  renderTwigFileAsNode(listingTemplate, params, true);

const renderDetails = (params) =>
  renderTwigFileAsNode(detailsTemplate, params, true);

describe("OE - Project", () => {
  test("listing renders correctly", () => {
    expect.assertions(1);
    return expect(renderListing(demoListing)).resolves.toMatchSnapshot();
  });

  test("page (ongoing) renders correctly", () => {
    expect.assertions(1);
    return expect(renderDetails(ongoingDemo)).resolves.toMatchSnapshot();
  });

  test("page (planned) renders correctly", () => {
    expect.assertions(1);
    return expect(renderDetails(plannedDemo)).resolves.toMatchSnapshot();
  });

  test("page (closed) renders correctly", () => {
    expect.assertions(1);
    return expect(renderDetails(closedDemo)).resolves.toMatchSnapshot();
  });

  test("UCPKN page (ongoing) renders correctly", () => {
    expect.assertions(1);
    return expect(renderDetails(ongoingDemoUCPKN)).resolves.toMatchSnapshot();
  });
});
