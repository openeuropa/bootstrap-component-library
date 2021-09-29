import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoData from "@openeuropa/bcl-links-block/dataLinksBlock";

const template = "@oe-bcl/bcl-links-block/links-block.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Links block", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
  test("renders correctly with horizontal", () => {
    expect.assertions(1);
    return expect(
      render({ ...demoData, direction: "horizontal" })
    ).resolves.toMatchSnapshot();
  });
  test("renders correctly with transparent background", () => {
    expect.assertions(1);
    return expect(
      render({ ...demoData, variant: "transparent" })
    ).resolves.toMatchSnapshot();
  });
});
