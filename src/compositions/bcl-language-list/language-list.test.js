import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoData from "@openeuropa/bcl-language-list/data/data--neutral.js";
import demoDataEU from "@openeuropa/bcl-language-list/data/data--eu.js";
import demoDataEC from "@openeuropa/bcl-language-list/data/data--ec.js";

const template = "@oe-bcl/bcl-language-list/language-list.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Language", () => {
  test("Neutral renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test("EU renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoDataEU)).resolves.toMatchSnapshot();
  });

  test("EC renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoDataEC)).resolves.toMatchSnapshot();
  });
});
