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
import demoDataCompact from "@openeuropa/bcl-user/data/data--user-compact";
import demoDataTerms from "@openeuropa/bcl-user/data/data--terms";
import demoData from "@openeuropa/bcl-user/data/data";

const template = "@oe-bcl/bcl-user/user.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

const templateList = "@oe-bcl/bcl-base-templates/listing-page.html.twig";
const renderList = (params) => renderTwigFileAsNode(templateList, params);

const templateTerms = "@oe-bcl/bcl-user/user-terms.html.twig";
const renderTerms = (params) => renderTwigFileAsNode(templateTerms, params);

const templateCompact = "@oe-bcl/bcl-user/user-compact.html.twig";
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

const dataTerms = {
  ...demoDataTerms,
  ...baseData,
  banner: {
    title: "Terms and conditions",
    title_tag: "h1",
  },
};

describe("OE - User", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(dataUser)).resolves.toMatchSnapshot();
  });
  test(`list renders correctly`, () => {
    expect.assertions(1);

    return expect(renderList(dataListing)).resolves.toMatchSnapshot();
  });
  test(`terms renders correctly`, () => {
    expect.assertions(1);

    return expect(renderTerms(dataTerms)).resolves.toMatchSnapshot();
  });
  test(`compact renders correctly`, () => {
    expect.assertions(1);

    return expect(renderCompact(demoDataCompact)).resolves.toMatchSnapshot();
  });
});
