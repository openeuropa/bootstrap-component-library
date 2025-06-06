import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoData from "@openeuropa/bcl-data-icon/data";

expect.extend(toHaveNoViolations);

const template = "@oe-bcl/bcl-icon/icon.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);
const sizes = ["2xs", "xs", "s", "m", "l", "xl", "2xl", "fluid"];
const transformations = [
  "rotate-90",
  "rotate-180",
  "rotate-270",
  "flip-horizontal",
  "flip-vertical",
];

describe("OE - Icon", () => {
  sizes.forEach((size) => {
    test(`${size} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, icon_size: size }),
      ).resolves.toMatchSnapshot();
    });
  });

  transformations.forEach((transformation) => {
    test(`${transformation} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, icon_transformation: transformation }),
      ).resolves.toMatchSnapshot();
    });
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoData)),
    ).toHaveNoViolations();
  });
});
