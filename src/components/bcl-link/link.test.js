import {
  renderTwigFileAsNode,
  getVariants,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoData from "@openeuropa/bcl-data-link/data";
import toggleDemoData from "@openeuropa/bcl-data-link/data--toggle";
import tooltipDemoData from "@openeuropa/bcl-data-link/data--tooltip";

const template = "@oe-bcl/bcl-link/link.html.twig";
const render = (params, reset) => renderTwigFileAsNode(template, params, reset);
const variants = getVariants();

expect.extend(toHaveNoViolations);

describe("OE - Link", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData, true)).resolves.toMatchSnapshot();
  });

  test(`with underline hover class renders correctly`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, standalone: true })
    ).resolves.toMatchSnapshot();
  });

  test(`with id renders correctly`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, id: "link-id" })
    ).resolves.toMatchSnapshot();
  });

  test(`disabled renders correctly`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, disabled: true })
    ).resolves.toMatchSnapshot();
  });

  variants.forEach((variant) => {
    test(`${variant} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, variant }, true)
      ).resolves.toMatchSnapshot();
    });
  });

  test(`as toggle renders correctly`, () => {
    expect.assertions(1);

    return expect(render(toggleDemoData)).resolves.toMatchSnapshot();
  });

  test(`with tooltip renders correctly`, () => {
    expect.assertions(1);

    return expect(render(tooltipDemoData)).resolves.toMatchSnapshot();
  });

  test("with icon renders and without icon spacers correctly", () => {
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
          remove_icon_spacers: true,
        },
        true
      )
    ).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoData, true))
    ).toHaveNoViolations();
  });
});
