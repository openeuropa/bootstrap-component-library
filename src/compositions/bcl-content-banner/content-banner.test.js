import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoData from "@openeuropa/bcl-content-banner/data/data";

const template = "@oe-bcl/bcl-content-banner/content-banner.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Content banner", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});
