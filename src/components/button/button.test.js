import { merge, renderTwigFileAsNode } from "@oe/test-utils";
import demoData from "@oe/data-button/data";
import toggleDemoData from "@oe/data-link/toggleData";
import popoverDemoData from "@oe/data-button/popoverData";
import spinnerDemoData from "@oe/data-button/spinnerData";
import { getVariants } from "@oe/story-utils";

const template = "@oe/button/button.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);
const variants = getVariants(false, ["link"]);
const sizes = ["lg", "md", "sm"];

describe("OE - Button", () => {
  variants.forEach((variant) => {
    test(`${variant} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, variant: variant })
      ).resolves.toMatchSnapshot();
    });
  });

  sizes.forEach((size) => {
    test(`${size} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, size: size })
      ).resolves.toMatchSnapshot();
    });
  });

  test("with toggle renders correctly", () => {
    expect.assertions(1);

    return expect(render(toggleDemoData)).resolves.toMatchSnapshot();
  });

  test("with spinner renders correctly", () => {
    expect.assertions(1);

    return expect(render(spinnerDemoData)).resolves.toMatchSnapshot();
  });

  test("with icon renders correctly", () => {
    expect.assertions(1);

    return expect(
      render({
        ...demoData,
        icon: {
          name: "mouse",
          transformation: "rotate-90",
          path: "bootstrap-icons.svg",
        },
      })
    ).resolves.toMatchSnapshot();
  });

  test("with popover renders correctly", () => {
    expect.assertions(1);

    return expect(
      render({
        ...popoverDemoData,
        popover_placement: "top",
        popover_trigger: "focus",
      })
    ).resolves.toMatchSnapshot();
  });
});

describe("OE - Button Outline", () => {
  variants.forEach((variant) => {
    test(`${variant} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, variant: variant, outline: true })
      ).resolves.toMatchSnapshot();
    });
  });
});
