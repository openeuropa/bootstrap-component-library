import { merge, renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoData from "@openeuropa/bcl-data-modal/data";

const template = "@oe-bcl/modal/modal.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - modal", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});
