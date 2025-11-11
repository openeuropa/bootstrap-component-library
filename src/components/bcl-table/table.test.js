import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoData from "@openeuropa/bcl-data-table/data";

const template = "@oe-bcl/bcl-table/table.html.twig";
const render = (params) => renderTwigFileAsNode(template, params, true);

expect.extend(toHaveNoViolations);

describe("OE - Table", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`renders correctly with hoverable rows`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, hoverable: true }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with striped rows`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, striped: true }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly small`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, small: true }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with responsive style`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, table_responsive: "sm" }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with variant danger`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, variant: "danger" }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with borderless style`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, borderless: true }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with bordered danger variant`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, border: "danger" }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with caption positioned top`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, caption_top: true }),
    ).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(await renderTwigFileAsHtml(template, demoData, true)),
    ).toHaveNoViolations();
  });
});
