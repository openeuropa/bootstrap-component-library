import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import {
  headerSimple,
  footer,
} from "@openeuropa/bcl-base-templates/data/layout";
import { pageTitleBanner } from "@openeuropa/bcl-base-templates/data/content-page";
import {
  filterButton,
  pagination,
  sortSelect,
  listingProfiles,
} from "@openeuropa/bcl-base-templates/data/listing-page";

import demoData from "@openeuropa/bcl-group/data/data";
import demoDataList from "@openeuropa/bcl-group/data/data--list";
import demoDataListContent from "@openeuropa/bcl-group/data/data--list-content";
import demoDataListMember from "@openeuropa/bcl-group/data/data--list-member";
import demoDataLanding from "@openeuropa/bcl-group/data/data--landing";

let baseData = {
  content_type: "group",
  header: headerSimple,
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
  listing: listingProfiles,
};

const dataListing = {
  page_title: "Groups",
  ...baseData,
  ...demoDataList,
  banner: {
    ...pageTitleBanner,
    title: {
      content: "Groups",
    },
  },
};

const dataLanding = {
  page_title: "Group members",
  content_type: "group",
  header: headerSimple,
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
