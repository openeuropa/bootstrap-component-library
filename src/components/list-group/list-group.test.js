import { renderTwigFileAsNode } from "@oe/test-utils";
import demoData from "@oe/data-list-group/data";
import actionableData from "@oe/data-list-group/actionableData";
import orderedData from "@oe/data-list-group/orderedData";

const template = "@oe/list-group/list-group.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - List group", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`renders correctly numbered`, () => {
    expect.assertions(1);

    return expect(
      render({ ...orderedData, type: "ordered" })
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly horizontal`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, horizontal: "horizontal" })
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with actionable items`, () => {
    expect.assertions(1);

    return expect(
      render({ ...actionableData, type: "actionable" })
    ).resolves.toMatchSnapshot();
  });
});
