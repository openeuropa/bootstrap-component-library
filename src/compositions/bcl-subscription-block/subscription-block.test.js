import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import blockData from "@openeuropa/bcl-subscription-block/data/data_block.js";

const template = "@oe-bcl/bcl-subscription-block/subscription-block.html.twig";

const render = (params) => renderTwigFileAsNode(template, params, true);

describe("OE - Subscription Block", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(blockData)).resolves.toMatchSnapshot();
  });
});
