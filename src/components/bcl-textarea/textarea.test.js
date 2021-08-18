import { merge, renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoData from "@openeuropa/bcl-data-textarea/data";

const template = "@oe-bcl/bcl-textarea/textarea.html.twig";
const render = (params) => renderTwigFileAsNode(template, params, true);

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

  test("renders correctly when valid", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, valid: true })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with invalid feedback", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, invalid_feedback: "Invalid feedback example" })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with valid feedback", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, valid_feedback: "Valid feedback example" })
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
