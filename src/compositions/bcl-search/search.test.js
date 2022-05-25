import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import { dataListing } from "@openeuropa/bcl-search/data/data";

const template = "@oe-bcl/bcl-search/search.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Search", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(dataListing)).resolves.toMatchSnapshot();
  });
});
