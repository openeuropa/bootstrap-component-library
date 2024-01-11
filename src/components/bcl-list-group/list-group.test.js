import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoData from "@openeuropa/bcl-data-list-group/data";
import actionableData from "@openeuropa/bcl-data-list-group/data--actionable";
import orderedData from "@openeuropa/bcl-data-list-group/data--ordered";

const template = "@oe-bcl/bcl-list-group/list-group.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

expect.extend(toHaveNoViolations);

describe("OE - List group", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`renders correctly horizontal`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, horizontal: "horizontal" }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with flush style`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, flush: true }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with id`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, id: "list-group-id" }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly numbered`, () => {
    expect.assertions(1);

    return expect(render(orderedData)).resolves.toMatchSnapshot();
  });

  test(`renders correctly with actionable items`, () => {
    expect.assertions(1);

    return expect(render(actionableData)).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoData, true)),
    ).toHaveNoViolations();
  });
});
