import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoData from "@openeuropa/bcl-landing-page/data";

const template = "@oe-bcl/bcl-landing-page/landing-page.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Landing page", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});
