import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import {
  filterButton,
  pagination,
  sortSelect,
} from "@openeuropa/bcl-base-templates/data/listing-page";
import {
  banner,
  pageTitleBanner,
} from "@openeuropa/bcl-base-templates/data/content-page";
import layout from "@openeuropa/bcl-base-templates/data/layout";

import dataListing from "@openeuropa/bcl-news/data/data--listing";
import content from "@openeuropa/bcl-news/data/data--content";

const feedback = `<div class="bg-lighter py-4 mt-md-4-5 mt-4 text-center">Feedback module here</div>`;
const share = `<div class="bg-gray-200 py-4 text-center">Share module here</div>`;

const baseData = {
  content_type: "news",
  title: "News",
  header: layout.headerSimple,
  footer: layout.footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
};

const demoData = {
  ...baseData,
  banner: banner,
  content: content,
  feedback: feedback,
  share: share,
};

const demoListing = {
  ...baseData,
  ...dataListing,
  pagination: pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
  with_sidebar: true,
  banner: {
    ...pageTitleBanner,
    title: "News",
    title_tag: "h1",
  },
};

const template = "@oe-bcl/bcl-base-templates/content-type.html.twig";
const listingTemplate = "@oe-bcl/bcl-base-templates/listing-page.html.twig";

const render = (params) => renderTwigFileAsNode(template, params, true);
const renderListing = (params) =>
  renderTwigFileAsNode(listingTemplate, params, true);

describe("OE - News", () => {
  test("full page renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test("listing renders correctly", () => {
    expect.assertions(1);

    return expect(renderListing(demoListing)).resolves.toMatchSnapshot();
  });
});
