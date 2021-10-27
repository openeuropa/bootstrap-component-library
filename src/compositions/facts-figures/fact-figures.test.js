import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-fact-figures/data/data";

const template = "@oe-bcl/bcl-fact-figures/fact-figures.html.twig";

const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Fact and figures", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});
