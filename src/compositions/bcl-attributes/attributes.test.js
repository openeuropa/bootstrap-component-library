import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

const template = "@oe-bcl/bcl-attributes/attributes.html.twig";
const render = () => renderTwigFileAsNode(template);

describe("OE - Attributes", () => {
  test("default renders correctly", () => {
    expect.assertions(1);
    return expect(render()).resolves.toMatchSnapshot();
  });
});
