import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-data-table/data";

const template = "@oe-bcl/table/table.html.twig";
const render = (params, reset) => renderTwigFileAsNode(template, params, reset);

describe("OE - Table", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData, true)).resolves.toMatchSnapshot();
  });

  test(`renders correctly with hoverable rows`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, hoverable: true }, true)
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with striped rows`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, striped: true }, true)
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly small`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, small: true }, true)
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with responsive style`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, table_responsive: "sm" }, true)
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with variant danger`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, variant: "danger" }, true)
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with borderless style`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, borderless: true }, true)
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with bordered danger variant`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, border: "danger" }, true)
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with caption positioned top`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, caption_top: true })
    ).resolves.toMatchSnapshot();
  });
});
