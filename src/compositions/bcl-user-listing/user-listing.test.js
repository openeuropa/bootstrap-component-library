import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import header from "@openeuropa/bcl-data-header/data";
import footer from "@openeuropa/bcl-data-footer/data";
import demoData from "@openeuropa/bcl-user-listing/data-user-listing";

const template = "@oe-bcl/bcl-base-templates/listing-page.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

const dataListing = {
  content_type: "Search results",
  header: header,
  footer: footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
  ...demoData,
};

describe("OE - User listing", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(dataListing)).resolves.toMatchSnapshot();
  });
});
