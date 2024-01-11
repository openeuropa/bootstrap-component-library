import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoData from "@openeuropa/bcl-data-modal/data";

const template = "@oe-bcl/bcl-modal/modal.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

expect.extend(toHaveNoViolations);

describe("OE - modal", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test("renders correctly small", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, size: "sm" }),
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with fullscreen breakpoint", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, fullscreen_responsive: "sm" }),
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with static backdrop", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, static_backdrop: true }),
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with verticaly centered modal", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, verticaly_centered: true }),
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with scrollable modal", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, scrollable: true }),
    ).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoData)),
    ).toHaveNoViolations();
  });
});
