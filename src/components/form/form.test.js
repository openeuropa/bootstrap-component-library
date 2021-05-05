import { merge, renderTwigFileAsNode } from "@oe/test-utils";
import dataBasic from "@oe/data-form/data";
import dataGrid from "@oe/data-form/data-grid";
import dataDisabled from "@oe/data-form/data-disabled";
import dataInline from "@oe/data-form/data-inline";
import dataHorizontal from "@oe/data-form/data-horizontal";

const template = "@oe/form/form.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

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
