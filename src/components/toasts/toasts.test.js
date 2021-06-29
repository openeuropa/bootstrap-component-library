import { merge, renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoSingle from "@openeuropa/bcl-data-toasts/data";
import demoMultiple from "@openeuropa/bcl-data-toasts/data-multiple";
import drupalAttribute from "drupal-attribute";

const template = "@oe-bcl/toasts/toasts.html.twig";
const render = (params) =>
  renderTwigFileAsNode(template, {
    ...params,
    attributes: new drupalAttribute(),
  });

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
