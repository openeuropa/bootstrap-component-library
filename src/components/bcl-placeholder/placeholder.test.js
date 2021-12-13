import { renderTwigFileAsNode, getVariants } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-data-placeholder/data";

const template = "@oe-bcl/bcl-placeholder/placeholder.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);
const variants = getVariants(false, ["link"]);
const sizes = ["lg", "xs", "sm"];
const animations = ["glow", "wave"];

describe("OE - Placeholder", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  sizes.forEach((size) => {
    test(`${size} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, size: size })
      ).resolves.toMatchSnapshot();
    });
  });

  animations.forEach((animation) => {
    test(`${animation} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, animation: animation })
      ).resolves.toMatchSnapshot();
    });
  });

  variants.forEach((variant) => {
    test(`${variant} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, variant: variant })
      ).resolves.toMatchSnapshot();
    });
  });
});
