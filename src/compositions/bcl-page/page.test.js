import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import { demoData } from "@openeuropa/bcl-page/data/data";

const template = "@oe-bcl/bcl-page/page.html.twig";

const render = (params) => renderTwigFileAsNode(template, params, true);

describe("OE - Page", () => {
  test("Page renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});
