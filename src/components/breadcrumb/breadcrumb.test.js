import { renderTwigFileAsNode } from "@oe/test-utils";
import demoData from "@oe/data-breadcrumb/data";

const template = "@oe/breadcrumb/breadcrumb.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Breadcrumb", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render({ ...demoData })).resolves.toMatchSnapshot();
  });
});
