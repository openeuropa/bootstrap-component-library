import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import header from "@openeuropa/bcl-data-header/data--simple";
import listing from "@openeuropa/bcl-page/data/data_listing.js";
import listingDefault from "@openeuropa/bcl-page/data/data-listing--default.js";
import footer from "@openeuropa/bcl-data-footer/data";
import sidebar from "@openeuropa/bcl-inpage-navigation/data--simple.js";
import banner from "@openeuropa/bcl-content-banner/data/data.js";
import file from "@openeuropa/bcl-file/data.js";

const files = [file, file];

const demoData = {
  content_type: "page",
  header: header,
  footer: footer,
  sidebar: sidebar,
  with_banner: true,
  with_header: true,
  with_footer: true,
  listing: listing,
  with_sidebar: true,
  files: files,
};

const template = "@oe-bcl/bcl-page/page.html.twig";

const render = (params) => renderTwigFileAsNode(template, params, true);

describe("OE - Page", () => {
  test("Page renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});
