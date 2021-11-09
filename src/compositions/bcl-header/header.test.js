import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoData from "@openeuropa/bcl-data-header/data";
import demoDataEC from "@openeuropa/bcl-data-header/data-ec";
import headerDataUCPKN from "@openeuropa/bcl-data-header/data-ucpkn";

const template = "@oe-bcl/bcl-header/header.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Header", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});

describe("OE - Header EC", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoDataEC)).resolves.toMatchSnapshot();
  });
});

describe("OE - Header UCPKN", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(headerDataUCPKN)).resolves.toMatchSnapshot();
  });
});
