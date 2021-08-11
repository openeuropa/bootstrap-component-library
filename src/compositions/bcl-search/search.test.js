import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-search/dataSearch";

const template = "@oe-bcl/bcl-search/search.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Search", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});
