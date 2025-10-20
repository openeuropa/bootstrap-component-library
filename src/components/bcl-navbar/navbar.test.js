import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoData from "@openeuropa/bcl-data-navbar/data";

const template = "@oe-bcl/bcl-navbar/navbar.html.twig";
const render = (params) => renderTwigFileAsNode(template, params, true);

expect.extend(toHaveNoViolations);

describe("OE - navbar", () => {
  ["light", "dark"].forEach((color_set) => {
    test(`${color_set} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, color_set }),
      ).resolves.toMatchSnapshot();
    });
  });

  test(`renders correctly with expand small`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, expand: "sm" }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with disable collapse`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, disable_collapse: true }),
    ).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(await renderTwigFileAsHtml(template, demoData)),
    ).toHaveNoViolations();
  });
});
