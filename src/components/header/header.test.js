import { renderTwigFileAsNode } from "@oe/test-utils";

import demoData from "@oe/data-header/data";
import demoDataEcl from "@oe/data-header/data-ecl";

const template = "@oe/header/header.html.twig";
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
