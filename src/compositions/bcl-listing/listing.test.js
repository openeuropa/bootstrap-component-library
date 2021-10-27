import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoDefaultData from "@openeuropa/bcl-listing/data/listing--default-1-col.js";
import demoDefault2ColData from "@openeuropa/bcl-listing/data/listing--default-2-col.js";
import demoDefault3ColData from "@openeuropa/bcl-listing/data/listing--default-3-col.js";
import demoHighlightData from "@openeuropa/bcl-listing/data/listing--highlight-1-col.js";
import demoHighlight3ColData from "@openeuropa/bcl-listing/data/listing--highlight-3-col.js";
import demoHighlight2ColData from "@openeuropa/bcl-listing/data/listing--highlight-2-col.js";
const template = "@oe-bcl/bcl-listing/listing.html.twig";

const render = (params) => renderTwigFileAsNode(template, params, true);

describe("OE - Listing", () => {
  test("horizontal renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoDefaultData)).resolves.toMatchSnapshot();
  });

  test("Default listing item in 2 columns renders correctly", () => {
    expect.assertions(1);
    return expect(render(demoDefault2ColData)).resolves.toMatchSnapshot();
  });

  test("Default listing item in 3 columns renders correctly", () => {
    expect.assertions(1);
    return expect(render(demoDefault3ColData)).resolves.toMatchSnapshot();
  });

  test("with highlight listing item renders correctly", () => {
    expect.assertions(1);
    return expect(render(demoHighlightData)).resolves.toMatchSnapshot();
  });

  test("with highlight listing item in 2 columns renders correctly", () => {
    expect.assertions(1);
    return expect(render(demoHighlight2ColData)).resolves.toMatchSnapshot();
  });

  test("with highlight listing item in 3 columns renders correctly", () => {
    expect.assertions(1);
    return expect(render(demoHighlight3ColData)).resolves.toMatchSnapshot();
  });
});
