import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoData from "@openeuropa/bcl-data-header/data";
import demoDataNeutral from "@openeuropa/bcl-data-header/data--neutral";
import demoDataEC from "@openeuropa/bcl-data-header/data--ec";
import headerDataUCPKN from "@openeuropa/bcl-data-header/data--ucpkn";

const template = "@oe-bcl/bcl-header/header.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

expect.extend(toHaveNoViolations);

describe("OE - Header", () => {
  test("Neutral renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoDataNeutral)).resolves.toMatchSnapshot();
  });

  test(`Neutral passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoDataNeutral)),
    ).toHaveNoViolations();
  });

  test("EU renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`EU passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoData)),
    ).toHaveNoViolations();
  });

  test("EC renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoDataEC)).resolves.toMatchSnapshot();
  });

  test(`EC passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoDataEC)),
    ).toHaveNoViolations();
  });

  test("UCPKN renders correctly", () => {
    expect.assertions(1);

    return expect(render(headerDataUCPKN)).resolves.toMatchSnapshot();
  });

  test(`UCPKN passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, headerDataUCPKN)),
    ).toHaveNoViolations();
  });
});
