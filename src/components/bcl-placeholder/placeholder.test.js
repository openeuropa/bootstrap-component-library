import {
  renderTwigFileAsNode,
  getVariants,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoData from "@openeuropa/bcl-data-placeholder/data";

const template = "@oe-bcl/bcl-placeholder/placeholder.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);
const variants = getVariants(false, ["link"]);
const sizes = ["lg", "xs", "sm"];
const animations = ["glow", "wave"];

expect.extend(toHaveNoViolations);

describe("OE - Placeholder", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  sizes.forEach((size) => {
    test(`${size} renders correctly`, () => {
      expect.assertions(1);

      return expect(render({ ...demoData, size })).resolves.toMatchSnapshot();
    });
  });

  animations.forEach((animation) => {
    test(`${animation} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, animation }),
      ).resolves.toMatchSnapshot();
    });
  });

  variants.forEach((variant) => {
    test(`${variant} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, variant }),
      ).resolves.toMatchSnapshot();
    });
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(await renderTwigFileAsHtml(template, demoData)),
    ).toHaveNoViolations();
  });
});
