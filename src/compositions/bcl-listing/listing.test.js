import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoSimpleData from "@openeuropa/bcl-listing/data/listing--horizontal.js";
import demoVerticalData from "@openeuropa/bcl-listing/data/listing--vertical.js";
import demoVertical3ColsData from "@openeuropa/bcl-listing/data/listing--vertical3cols.js";
import demoCardsData from "@openeuropa/bcl-listing/data/listing--cards-horizontal.js";
import demoCardsVerticalData from "@openeuropa/bcl-listing/data/listing--cards-vertical-3cols.js";
import demoCardsVertical2ColsData from "@openeuropa/bcl-listing/data/listing--cards-vertical.js";
const template = "@oe-bcl/bcl-listing/listing.html.twig";

const render = (params) => renderTwigFileAsNode(template, params, true);

describe("OE - Listing", () => {
  test("horizontal renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoSimpleData)).resolves.toMatchSnapshot();
  });

  test("vertical renders correctly (2cols)", () => {
    expect.assertions(1);
    return expect(render(demoVerticalData)).resolves.toMatchSnapshot();
  });

  test("vertical renders correctly (3cols)", () => {
    expect.assertions(1);
    return expect(render(demoVertical3ColsData)).resolves.toMatchSnapshot();
  });

  test("with cards renders correctly", () => {
    expect.assertions(1);
    return expect(render(demoCardsData)).resolves.toMatchSnapshot();
  });

  test("with cards in two columns renders correctly", () => {
    expect.assertions(1);
    return expect(
      render(demoCardsVertical2ColsData)
    ).resolves.toMatchSnapshot();
  });

  test("with cards in three columns renders correctly", () => {
    expect.assertions(1);
    return expect(render(demoCardsVerticalData)).resolves.toMatchSnapshot();
  });
});
