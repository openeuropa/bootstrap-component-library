import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoData from "@openeuropa/bcl-data-header/data";
import demoDataNeutral from "@openeuropa/bcl-data-header/data--neutral";
import demoDataEC from "@openeuropa/bcl-data-header/data-ec";
import headerDataUCPKN from "@openeuropa/bcl-data-header/data-ucpkn";

const template = "@oe-bcl/bcl-header/header.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Header", () => {
  test("Neutral renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoDataNeutral)).resolves.toMatchSnapshot();
  });

  test("EU renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test("EC renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoDataEC)).resolves.toMatchSnapshot();
  });

  test("UCPKN renders correctly", () => {
    expect.assertions(1);

    return expect(render(headerDataUCPKN)).resolves.toMatchSnapshot();
  });
});
