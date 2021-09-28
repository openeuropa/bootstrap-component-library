import { merge, renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoData from "@openeuropa/bcl-data-form-input/data";

const template = "@oe-bcl/bcl-form-input/form-input.html.twig";
const render = (params) => renderTwigFileAsNode(template, params, true);

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

  test("renders correctly when valid", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, valid: true })
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
      render({ ...demoData, input_type: "checkbox" })
    ).resolves.toMatchSnapshot();
  });

  test("radio renders correctly", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, input_type: "radio" })
    ).resolves.toMatchSnapshot();
  });

  test("range renders correctly", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, input_type: "range" })
    ).resolves.toMatchSnapshot();
  });

  test("switch renders correctly", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, input_type: "checkbox", switch: true })
    ).resolves.toMatchSnapshot();
  });

  test("checkbox button toggle renders correctly", () => {
    expect.assertions(1);

    return expect(
      render({
        ...demoData,
        input_type: "checkbox",
        toggle: true,
        toggle_variant: "primary",
      })
    ).resolves.toMatchSnapshot();
  });

  test("radio button toggle renders correctly", () => {
    expect.assertions(1);

    return expect(
      render({
        ...demoData,
        input_type: "radio",
        toggle: true,
        toggle_variant: "primary",
      })
    ).resolves.toMatchSnapshot();
  });
});
