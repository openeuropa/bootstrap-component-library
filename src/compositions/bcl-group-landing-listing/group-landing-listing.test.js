import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import header from "@openeuropa/bcl-data-header/data--simple";
import footer from "@openeuropa/bcl-data-footer/data";
import demoData from "@openeuropa/bcl-group-landing-listing/data";
import demoDataList from "@openeuropa/bcl-group-landing-listing/dataList";
import demoDataListContent from "@openeuropa/bcl-group-landing-listing/dataListContent";
import demoDataListMember from "@openeuropa/bcl-group-landing-listing/dataListMember";

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

const template =
  "@oe-bcl/bcl-group-landing-listing/group-landing-listing.html.twig";

const templateListing = "@oe-bcl/bcl-base-templates/listing-page.html.twig";

const render = (params) => renderTwigFileAsNode(template, params);
const renderListing = (params) => renderTwigFileAsNode(templateListing, params);

describe("OE - Group landing listing", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(renderListing(dataListing)).resolves.toMatchSnapshot();
  });
});

describe("OE - Group landing listing Content", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(dataListingContent)).resolves.toMatchSnapshot();
  });
});

describe("OE - Group landing listing Member", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(dataListingMember)).resolves.toMatchSnapshot();
  });
});
