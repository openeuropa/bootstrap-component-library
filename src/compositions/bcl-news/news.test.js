import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import dataListing from "@openeuropa/bcl-news/data/data_listing.js";
import header from "@openeuropa/bcl-data-header/data";
import footer from "@openeuropa/bcl-data-footer/data";
import content from "@openeuropa/bcl-news/data/data_content.js";
import banner from "@openeuropa/bcl-content-banner/data/data.js";

const feedback = `<div class="bg-lighter py-4 mt-md-4-5 mt-4 text-center">Feedback module here</div>`;
const share = `<div class="bg-gray-200 py-4 text-center">Share module here</div>`;

const baseData = {
  content_type: "news",
  page_title: "News",
  header: header,
  footer: footer,
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
  with_sidebar: true,
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
