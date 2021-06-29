import { merge, renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import dataBasic from "@openeuropa/bcl-data-form/data";
import dataGrid from "@openeuropa/bcl-data-form/data-grid";
import dataDisabled from "@openeuropa/bcl-data-form/data-disabled";
import dataInline from "@openeuropa/bcl-data-form/data-inline";
import dataHorizontal from "@openeuropa/bcl-data-form/data-horizontal";
import drupalAttribute from "drupal-attribute";

const template = "@oe-bcl/form/form.html.twig";
const render = (params) =>
  renderTwigFileAsNode(template, {
    ...params,
    attributes: new drupalAttribute(),
  });

describe("OE - Form", () => {
  test(`basic renders correctly`, () => {
    expect.assertions(1);

    return expect(render(dataBasic)).resolves.toMatchSnapshot();
  });

  test(`horizontal renders correctly`, () => {
    expect.assertions(1);

    return expect(render(dataHorizontal)).resolves.toMatchSnapshot();
  });

  test(`using a grid renders correctly`, () => {
    expect.assertions(1);

    return expect(render(dataGrid)).resolves.toMatchSnapshot();
  });

  test(`renders correctly when disabled`, () => {
    expect.assertions(1);

    return expect(render(dataDisabled)).resolves.toMatchSnapshot();
  });

  test(`inline renders correctly`, () => {
    expect.assertions(1);

    return expect(render(dataInline)).resolves.toMatchSnapshot();
  });
});
