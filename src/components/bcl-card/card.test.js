import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";
import drupalAttribute from "drupal-attribute";

import demoData, { image } from "@openeuropa/bcl-data-card/data";
import demoDataHorizontal from "@openeuropa/bcl-data-card/data--horizontal";

const template = "@oe-bcl/bcl-card/card.html.twig";
const render = (params, reset) => renderTwigFileAsNode(template, params, reset);

expect.extend(toHaveNoViolations);

describe("OE - Card", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`renders with image bottom correctly`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, image: { ...image, position: "bottom" } }, true),
    ).resolves.toMatchSnapshot();
  });

  test(`renders with variant correctly`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, variant: "danger" }, true),
    ).resolves.toMatchSnapshot();
  });

  test(`renders horizontal correctly`, () => {
    expect.assertions(1);

    return expect(render(demoDataHorizontal)).resolves.toMatchSnapshot();
  });

  test(`renders with border variant correctly`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, border_variant: "danger" }, true),
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with badges", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, badges: [{ label: "Card Category" }] }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders with text color white correctly`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, text_color: "white" }, true),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with custom title attributes`, () => {
    expect.assertions(1);
    demoData.title_attributes = new drupalAttribute()
      .setAttribute("test", "value")
      .setAttribute("attribute", "with a value");

    return expect(render(demoData, true)).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    demoData.subtitle.tag = "h2";
    expect(
      await axe(renderTwigFileAsHtml(template, demoData, true)),
    ).toHaveNoViolations();
  });
});
