import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-data-list-group/data";
import actionableData from "@openeuropa/bcl-data-list-group/actionableData";
import orderedData from "@openeuropa/bcl-data-list-group/orderedData";

const template = "@oe-bcl/bcl-list-group/list-group.html.twig";
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
