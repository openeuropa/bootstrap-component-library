import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-details/data";

const template = "@oe-bcl/bcl-details/details.html.twig";
const render = (params) => renderTwigFileAsNode(template, params, true);

describe("OE - Details", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});
