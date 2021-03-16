import { merge, renderTwigFileAsNode } from "@oe/test-utils";

const template = "@oe/navbar/navbar.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - navbar", () => {
  ["light", "dark"].forEach((color_set) => {
    test(`${color_set} renders correctly`, () => {
      expect.assertions(1);

      return expect(render({ color_set })).resolves.toMatchSnapshot();
    });
  });
});
