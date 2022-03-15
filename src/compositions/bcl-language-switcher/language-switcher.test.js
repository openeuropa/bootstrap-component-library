import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoData from "@openeuropa/bcl-language-switcher/data";

const template = "@oe-bcl/bcl-language-switcher/language-switcher.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Language switcher", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});
