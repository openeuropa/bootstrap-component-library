import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoData from "@openeuropa/bcl-data-header/data";
import demoDataEcl from "@openeuropa/bcl-data-header/data-ecl";

const template = "@oe-bcl/bcl-header/header.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Header", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});

describe("OE - Header ECL", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoDataEcl)).resolves.toMatchSnapshot();
  });
});
