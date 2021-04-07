import { merge, renderTwigFileAsNode } from "@oe/test-utils";

import demoData from "@oe/data-textarea/data";

const template = "@oe/textarea/textarea.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - textarea", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test("renders correctly when required", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, required: true })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly when disabled", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, disabled: true })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly when readonly", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, readonly: true })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly when invalid", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, invalid: true })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with floating label", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, floating: true })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly when horizontal", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, horizontal: true })
    ).resolves.toMatchSnapshot();
  });
});
