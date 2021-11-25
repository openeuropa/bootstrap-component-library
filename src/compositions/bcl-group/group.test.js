import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import header from "@openeuropa/bcl-data-header/data--simple";
import footer from "@openeuropa/bcl-data-footer/data";
import demoData from "@openeuropa/bcl-group/data";
import demoDataList from "@openeuropa/bcl-group/dataList";
import demoDataListContent from "@openeuropa/bcl-group/dataListContent";
import demoDataListMember from "@openeuropa/bcl-group/dataListMember";
import demoDataLanding from "@openeuropa/bcl-group/dataLanding";

let baseData = {
  content_type: "group",
  header: header,
  footer: footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
  ...demoData,
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
