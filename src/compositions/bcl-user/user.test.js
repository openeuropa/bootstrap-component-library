import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import layout from "@openeuropa/bcl-base-templates/data/layout";
import { pageTitleBanner } from "@openeuropa/bcl-base-templates/data/content-page";
import {
  filterButton,
  pagination,
  sortSelect,
  listingProfiles,
} from "@openeuropa/bcl-base-templates/data/listing-page";

import demoDataListing from "@openeuropa/bcl-user/data/data--user-listing";
import demoDataCompact from "@openeuropa/bcl-user/data/data--user-view-compact";
import demoData from "@openeuropa/bcl-user/data/data";

const template = "@openeuropa/bcl-user/user.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

const templateList = "@oe-bcl/bcl-base-templates/listing-page.html.twig";
const renderList = (params) => renderTwigFileAsNode(templateList, params);

const templateCompact = "@oe-bcl/bcl-user/user-view-compact.html.twig";
const renderCompact = (params) => renderTwigFileAsNode(templateCompact, params);

const baseData = {
  with_header: true,
  with_footer: true,
  header: layout.headerSimple,
  footer: layout.footer,
  content_type: "users",
};

const dataListing = {
  title: "users",
  with_banner: true,
  with_sidebar: true,
  ...demoDataListing,
  ...baseData,
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

const dataUser = {
  ...baseData,
  content_type: "user",
  ...demoData,
};

describe("OE - User", () => {
  test(`list renders correctly`, () => {
    expect.assertions(1);

    return expect(renderList(dataListing)).resolves.toMatchSnapshot();
  });
  test(`compact renders correctly`, () => {
    expect.assertions(1);

    return expect(renderCompact(demoDataCompact)).resolves.toMatchSnapshot();
  });
});
