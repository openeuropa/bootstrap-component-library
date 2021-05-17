import { merge, renderTwigFileAsNode } from "@oe/test-utils";
import demoSingle from "@oe/data-toasts/data";
import demoMultiple from "@oe/data-toasts/data-multiple";

const template = "@oe/toasts/toasts.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Toasts", () => {
  test(`renders correctly with a single toast`, () => {
    expect.assertions(1);

    return expect(render(demoSingle)).resolves.toMatchSnapshot();
  });

  test(`render correctly with multiple toasts`, () => {
    expect.assertions(1);

    return expect(render(demoMultiple)).resolves.toMatchSnapshot();
  });
});
