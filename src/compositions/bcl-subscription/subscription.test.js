import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import { demoData } from "@openeuropa/bcl-subscription/data/data";

const template = "@oe-bcl/bcl-subscription/subscription.html.twig";

const render = (params) => renderTwigFileAsNode(template, params, true);

describe("OE - Subscription", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});
