import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
  getVariants,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoData from "@openeuropa/bcl-data-button/data.js";
import toggleDemoData from "@openeuropa/bcl-data-button/data--toggle";
import popoverDemoData from "@openeuropa/bcl-data-button/data--popover";
import tooltipDemoData from "@openeuropa/bcl-data-button/data--tooltip";
import spinnerDemoData from "@openeuropa/bcl-data-button/data--spinner";

const template = "@oe-bcl/bcl-button/button.html.twig";
const render = (params, reset) => renderTwigFileAsNode(template, params, reset);
const variants = getVariants(false, ["link"]);
const sizes = ["lg", "md", "sm"];

expect.extend(toHaveNoViolations);

describe("OE - Button", () => {
  variants.forEach((variant) => {
    test(`${variant} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render(
          {
            ...demoData,
            variant,
          },
          true
        )
      ).resolves.toMatchSnapshot();
    });
  });

  sizes.forEach((size) => {
    test(`${size} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, size }, true)
      ).resolves.toMatchSnapshot();
    });
  });

  test("with text not wrapping renders correctly", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, text_nowrap: true })
    ).resolves.toMatchSnapshot();
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
      render(
        {
          ...demoData,
          icon: {
            name: "mouse",
            transformation: "rotate-90",
            path: "/icons.svg",
          },
        },
        true
      )
    ).resolves.toMatchSnapshot();
  });

  test("with popover renders correctly", () => {
    expect.assertions(1);

    return expect(render(popoverDemoData)).resolves.toMatchSnapshot();
  });

  test("with tooltip renders correctly", () => {
    expect.assertions(1);

    return expect(render(tooltipDemoData)).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoData))
    ).toHaveNoViolations();
  });
});

describe("OE - Button Outline", () => {
  variants.forEach((variant) => {
    test(`${variant} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render(
          {
            ...demoData,
            variant,
            outline: true,
          },
          true
        )
      ).resolves.toMatchSnapshot();
    });
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoData))
    ).toHaveNoViolations();
  });
});
