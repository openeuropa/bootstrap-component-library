import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoData from "@openeuropa/bcl-data-select/data";
import demoMultiData from "@openeuropa/bcl-data-select/data--multiselect";

const template = "@oe-bcl/bcl-select/select.html.twig";
const render = (params) => renderTwigFileAsNode(template, params, true);

expect.extend(toHaveNoViolations);

describe("OE - select", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test("renders correctly when required", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, required: true }),
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly when disabled", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, disabled: true }),
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly when readonly", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, readonly: true }),
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly when invalid", () => {
    expect.assertions(1);

    return expect(
      render({
        ...demoData,
        invalid: true,
        invalid_feedback: "New invalid feedback",
      }),
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly when valid", () => {
    expect.assertions(1);

    return expect(
      render({
        ...demoData,
        valid: true,
        valid_feedback: "New valid feedback",
      }),
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly when multiple", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, multiple: true }),
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with a label", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, label: "A select label" }),
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with an hidden label", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, label: "A select label", hidden_label: true }),
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly as a multiple choice select", () => {
    expect.assertions(1);

    return expect(render(demoMultiData)).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(await renderTwigFileAsHtml(template, demoData, true)),
    ).toHaveNoViolations();
  });

  test(`multiple passes the accessibility tests`, async () => {
    expect(
      await axe(await renderTwigFileAsHtml(template, demoMultiData, true)),
    ).toHaveNoViolations();
  });
});
