import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoSingle from "@openeuropa/bcl-data-toasts/data";
import demoMultiple from "@openeuropa/bcl-data-toasts/data--multiple";

const template = "@oe-bcl/bcl-toasts/toasts.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

expect.extend(toHaveNoViolations);

describe("OE - Toasts", () => {
  test(`renders correctly with a single toast`, () => {
    expect.assertions(1);

    return expect(render(demoSingle)).resolves.toMatchSnapshot();
  });

  test(`render correctly with body wrapper classes`, () => {
    expect.assertions(1);

    const withBodyClasses = { ...demoSingle };
    withBodyClasses.toasts[0].with_body_wrapper = true;
    withBodyClasses.toasts[0].body_wrapper_classes =
      "wrapper-class another-wrapper-class";

    return expect(render(withBodyClasses)).resolves.toMatchSnapshot();
  });

  test(`render correctly with multiple toasts`, () => {
    expect.assertions(1);

    return expect(render(demoMultiple)).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoSingle)),
    ).toHaveNoViolations();
  });
});
