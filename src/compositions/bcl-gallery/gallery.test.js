import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import dataDefault from "@openeuropa/bcl-gallery/data/dataDefault.js";

const template = "@oe-bcl/bcl-gallery/gallery.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Gallery", () => {
  test("default renders correctly", () => {
    expect.assertions(1);
    return expect(render(dataDefault)).resolves.toMatchSnapshot();
  });
});
