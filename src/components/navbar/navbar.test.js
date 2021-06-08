import { merge, renderTwigFileAsNode } from "@oe/test-utils";
import demoData from "@oe/data-navbar/data";

const template = "@oe/navbar/navbar.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - navbar", () => {
  ["light", "dark"].forEach((color_set) => {
    test(`${color_set} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, color_set })
      ).resolves.toMatchSnapshot();
    });
  });
});
