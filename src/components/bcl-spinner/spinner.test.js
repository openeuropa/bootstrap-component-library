import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoData from "@openeuropa/bcl-data-spinner/data";

const template = "@oe-bcl/bcl-spinner/spinner.html.twig";
const render = (params) => renderTwigFileAsNode(template, params, true);
const sizes = ["sm", "lg"];

expect.extend(toHaveNoViolations);

describe("OE - Spinner", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`renders grow correctly`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, type: "grow" }),
    ).resolves.toMatchSnapshot();
  });

  sizes.forEach((size) => {
    test(`${size} renders correctly`, () => {
      expect.assertions(1);

      return expect(render({ ...demoData, size })).resolves.toMatchSnapshot();
    });
  });

  sizes.forEach((size) => {
    test(`${size} and type grow renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, size, type: "grow" }),
      ).resolves.toMatchSnapshot();
    });
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(await renderTwigFileAsHtml(template, demoData)),
    ).toHaveNoViolations();
  });
});
