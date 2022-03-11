import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import header from "@openeuropa/bcl-data-header/data--no-form";
import footer from "@openeuropa/bcl-data-footer/data";
import dataListingTemplate from "@openeuropa/bcl-data-templates/listing/data--template";

import demoData from "@openeuropa/bcl-search/data/dataSearch";

const template = "@oe-bcl/bcl-search/search.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

const dataListing = {
  content_type: "search",
  page_title: "Search results",
  header: header,
  footer: footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
  ...dataListingTemplate,
  ...demoData,
};

describe("OE - Search", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(dataListing)).resolves.toMatchSnapshot();
  });
});
