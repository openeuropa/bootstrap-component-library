import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-subscription-block/data";

const template = "@oe-bcl/bcl-subscription-block/subscription-block.html.twig";

const render = (params) => renderTwigFileAsNode(template, params, true);

describe("OE - Subscription Block", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});
