import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-data-breadcrumb/data";

const template = "@oe-bcl/bcl-breadcrumb/breadcrumb.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Breadcrumb", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});
