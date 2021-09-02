import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-user-edit/dataUserEdit";

const template = "@oe-bcl/bcl-user-edit/user-edit.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - User edit", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});
