import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-description-list/data.js";
import demoDataHorizontal from "@openeuropa/bcl-description-list/dataHorizontal";
const template = "@oe-bcl/bcl-description-list/description-list.html.twig";

const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Description List", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoDataHorizontal)).resolves.toMatchSnapshot();
  });
});
