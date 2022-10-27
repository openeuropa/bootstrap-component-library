import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoData from "@openeuropa/bcl-data-textarea/data";

const template = "@oe-bcl/bcl-textarea/textarea.html.twig";
const render = (params) => renderTwigFileAsNode(template, params, true);

expect.extend(toHaveNoViolations);

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
      render({
        ...demoData,
        invalid: true,
        invalid_feedback: "New invalid feedback",
      })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly when valid", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, valid: true, valid_feedback: "New valid feedback" })
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

  test("renders correctly with text", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, text: "Sample text presented inside" })
    ).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoData, true))
    ).toHaveNoViolations();
  });
});
