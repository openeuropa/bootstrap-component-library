import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoData from "@openeuropa/bcl-featured-media/data";

const template = "@oe-bcl/bcl-featured-media/featured-media.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Featured media", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
  test("renders correctly with an image", () => {
    expect.assertions(1);
    return expect(
      render({ ...demoData, type: "image" })
    ).resolves.toMatchSnapshot();
  });
});
