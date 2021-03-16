import { merge, renderTwigFileAsNode } from "@oe/test-utils";

import demoData from "@oe/data-modal/data";

const template = "@oe/modal/modal.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - modal", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});
