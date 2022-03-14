import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import header from "@openeuropa/bcl-data-header/data--simple";
import footer from "@openeuropa/bcl-data-footer/data";
import filterButton from "@openeuropa/bcl-data-button/data--filter";
import pagination from "@openeuropa/bcl-data-pagination/data--listing";
import sortSelect from "@openeuropa/bcl-data-select/data--sort";
import dataProfiles from "@openeuropa/bcl-listing/data/listing--profiles";

import demoData from "@openeuropa/bcl-group/data/data";
import demoDataList from "@openeuropa/bcl-group/data/dataList";
import demoDataListContent from "@openeuropa/bcl-group/data/dataListContent";
import demoDataListMember from "@openeuropa/bcl-group/data/dataListMember";
import demoDataLanding from "@openeuropa/bcl-group/data/dataLanding";

let baseData = {
  content_type: "group",
  header: header,
  footer: footer,
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
  page_title: "Content in the group",
  ...baseData,
  ...demoDataListContent,
};

const dataListingMember = {
  page_title: "Group members",
  ...baseData,
  ...demoDataListMember,
  listing: dataProfiles,
};

delete baseData.banner;
const dataListing = {
  page_title: "Groups",
  ...baseData,
  ...demoDataList,
};

const dataLanding = {
  page_title: "Group members",
  content_type: "group",
  header: header,
  footer: footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  ...demoDataLanding,
};

const template = "@oe-bcl/bcl-group/group.html.twig";
const templateListing = "@oe-bcl/bcl-base-templates/listing-page.html.twig";
const templateLanding = "@oe-bcl/bcl-group/group-landing.html.twig";

const render = (params) => renderTwigFileAsNode(template, params);
const renderListing = (params) => renderTwigFileAsNode(templateListing, params);
const renderLanding = (params) => renderTwigFileAsNode(templateLanding, params);

describe("OE - Group listing", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(renderListing(dataListing)).resolves.toMatchSnapshot();
  });
});

describe("OE - Group listing Content", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(dataListingContent)).resolves.toMatchSnapshot();
  });
});

describe("OE - Group listing Member", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(dataListingMember)).resolves.toMatchSnapshot();
  });
});

describe("OE - Group landing", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(renderLanding(dataLanding)).resolves.toMatchSnapshot();
  });
});
