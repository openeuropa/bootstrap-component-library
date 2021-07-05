import { merge, renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-data-button/data";
import toggleDemoData from "@openeuropa/bcl-data-button/toggleData";
import popoverDemoData from "@openeuropa/bcl-data-button/popoverData";
import tooltipDemoData from "@openeuropa/bcl-data-button/tooltipData";
import spinnerDemoData from "@openeuropa/bcl-data-button/spinnerData";
import { getVariants } from "@openeuropa/bcl-story-utils";

const template = "@oe-bcl/button/button.html.twig";
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
        content_placement: "top",
        popover_trigger: "focus",
      })
    ).resolves.toMatchSnapshot();
  });

  test("with tooltip renders correctly", () => {
    expect.assertions(1);

    return expect(
      render({
        ...tooltipDemoData,
        content_placement: "bottom",
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
