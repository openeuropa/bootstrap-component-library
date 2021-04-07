import { merge, renderTwigFileAsNode } from "@oe/test-utils";

import demoData from "@oe/data-form-input/data";

const template = "@oe/form-input/form-input.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Form Input", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, placeholder: "Text here" })
    ).resolves.toMatchSnapshot();
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

  test("checkbox renders correctly", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, type: "checkbox" })
    ).resolves.toMatchSnapshot();
  });

  test("radio renders correctly", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, type: "radio" })
    ).resolves.toMatchSnapshot();
  });

  test("switch renders correctly", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, type: "checkbox", switch: true })
    ).resolves.toMatchSnapshot();
  });
});
