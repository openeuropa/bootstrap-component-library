import { merge, renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoSingle from "@openeuropa/bcl-data-toasts/data";
import demoMultiple from "@openeuropa/bcl-data-toasts/data-multiple";

const template = "@oe-bcl/bcl-toast/toasts.html.twig";
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
