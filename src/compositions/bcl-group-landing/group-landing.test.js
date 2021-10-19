import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoData from "@openeuropa/bcl-group-landing/data";

const template = "@oe-bcl/bcl-group-landing/group-landing.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Group Landing", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});
