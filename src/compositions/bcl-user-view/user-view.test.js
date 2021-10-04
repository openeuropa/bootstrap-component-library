import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-user-view/dataUserView";
import demoDataCompact from "@openeuropa/bcl-user-view/dataUserViewCompact";

const template = "@oe-bcl/bcl-user-view/user-view.html.twig";
const templateCompact = "@oe-bcl/bcl-user-view/user-view-compact.html.twig";

const render = (params) => renderTwigFileAsNode(template, params);
const renderCompact = (params) => renderTwigFileAsNode(templateCompact, params);

describe("OE - User view", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});

describe("OE - User view compact", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(renderCompact(demoDataCompact)).resolves.toMatchSnapshot();
  });
});
