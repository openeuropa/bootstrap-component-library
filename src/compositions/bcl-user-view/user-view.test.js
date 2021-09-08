import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-user-view/dataUserView";

const template = "@oe-bcl/bcl-user-view/user-view.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - User view", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});
