import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-user-listing/dataUserListing";

const template = "@oe-bcl/bcl-user-listing/user-listing.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - User listing", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});
