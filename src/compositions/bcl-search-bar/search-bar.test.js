import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-search-bar/dataSearch";

const template = "@oe-bcl/bcl-search-bar/search-bar.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Search Bar", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});
