import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import header from "@openeuropa/bcl-data-header/data--simple";
import dataListing from "@openeuropa/bcl-project/data/data_listing";
import dataOngoing from "@openeuropa/bcl-project-status/data/data--ongoing";
import dataPlanned from "@openeuropa/bcl-project-status/data/data--planned";
import dataClosed from "@openeuropa/bcl-project-status/data/data--closed";
import dataContent from "@openeuropa/bcl-project/data/data";
import dataExtraDetails from "@openeuropa/bcl-project/data/data_extra_details";
import footer from "@openeuropa/bcl-data-footer/data";
import dataCharts from "@openeuropa/bcl-project/data/data--chart";
import drupalAttribute from "drupal-attribute";

const share = `<div class="bg-gray-200 py-4 mt-4"><div class="container">Share module here</div></div>`;
const chart = `<img src="${dataCharts.charts}">`;
const listingTemplate = "@oe-bcl/bcl-base-templates/listing-page.html.twig";
const detailsTemplate = "@oe-bcl/bcl-project/project.html.twig";

const baseData = {
  content_type: "listing",
  page_title: "Projects",
  header: header,
  footer: footer,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
};

const demoPage = {
  ...baseData,
  ...dataContent,
  ...dataExtraDetails,
  charts: chart,
  share: share,
};

const ongoingDemo = {
  ...demoPage,
  project_details: dataOngoing,
};

const closedDemo = {
  ...demoPage,
  project_details: dataClosed,
};

const plannedDemo = {
  ...demoPage,
  project_details: dataPlanned,
};

const demoListing = {
  ...baseData,
  ...dataListing,
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
});
