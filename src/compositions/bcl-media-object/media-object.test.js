import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoData from "@openeuropa/bcl-media-object/dataSmallUser";

const template = "@oe-bcl/bcl-media-object/media-object.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Media object", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});
