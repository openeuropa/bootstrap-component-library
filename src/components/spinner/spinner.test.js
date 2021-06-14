import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-data-spinner/data";

const template = "@oe-bcl/spinner/spinner.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Spinner", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`renders small correctly`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, small: true })
    ).resolves.toMatchSnapshot();
  });

  test(`renders grow correctly`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, type: "grow" })
    ).resolves.toMatchSnapshot();
  });
});
