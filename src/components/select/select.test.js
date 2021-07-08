import { merge, renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoData from "@openeuropa/bcl-data-select/data";

const template = "@oe-bcl/select/select.html.twig";
const render = (params) => renderTwigFileAsNode(template, params, true);

describe("OE - select", () => {
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

  test("renders correctly when multiple", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, multiple: true })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with a label", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, label: "A select label" })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with an hidden label", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, label: "A select label", hidden_label: true })
    ).resolves.toMatchSnapshot();
  });
});
