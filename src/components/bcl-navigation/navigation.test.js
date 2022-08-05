import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoData from "@openeuropa/bcl-data-navigation/data";
import demoTabsData from "@openeuropa/bcl-data-navigation/data--tabs";
import demoCustom from "@openeuropa/bcl-data-navigation/data--custom";

const template = "@oe-bcl/bcl-navigation/navigation.html.twig";
const render = (params) => renderTwigFileAsNode(template, params, true);

expect.extend(toHaveNoViolations);

describe("OE - navigation", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
  test("renders correctly with pills style on elements", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, pills: true })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly on vertical", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, vertical: true })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly full width", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, full_width: true })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly as list", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, nav: false })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with elements aligned right", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, alignment: "justify-content-end" })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with tabs", () => {
    expect.assertions(1);

    return expect(render(demoTabsData)).resolves.toMatchSnapshot();
  });

  test("renders correctly with custom styles", () => {
    expect.assertions(1);

    return expect(render(demoCustom)).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoData))
    ).toHaveNoViolations();
  });
});
