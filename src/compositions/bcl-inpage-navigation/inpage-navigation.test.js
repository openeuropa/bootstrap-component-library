import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import dataDefault from "@openeuropa/bcl-inpage-navigation/dataDefault.js";

const template = "@oe-bcl/bcl-inpage-navigation/inpage-navigation.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Inpage navigation", () => {
  test("default renders correctly", () => {
    expect.assertions(1);

    return expect(render(dataDefault)).resolves.toMatchSnapshot();
  });
});
