import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoData from "@openeuropa/bcl-data-modal/data";

const template = "@oe-bcl/bcl-modal/modal.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - modal", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test("renders correctly with static backdrop", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, static_backdrop: true })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with verticaly centered modal", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, verticaly_centered: true })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with scrollable modal", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, scrollable: true })
    ).resolves.toMatchSnapshot();
  });
});
