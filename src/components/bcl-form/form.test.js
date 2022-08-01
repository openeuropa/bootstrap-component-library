import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import dataBasic from "@openeuropa/bcl-data-form/data";
import dataGrid from "@openeuropa/bcl-data-form/data--grid";
import dataDisabled from "@openeuropa/bcl-data-form/data--disabled";
import dataInline from "@openeuropa/bcl-data-form/data--inline";
import dataHorizontal from "@openeuropa/bcl-data-form/data--horizontal";

const template = "@oe-bcl/bcl-form/form.html.twig";
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

  test(`renders correctly with title`, () => {
    expect.assertions(1);

    return expect(
      render({
        ...dataBasic,
        title: "Carousel Title",
        title_tag: "h1",
        title_link: {
          path: "/example.html",
          label: "A title created by the bcl heading template",
        },
      })
    ).resolves.toMatchSnapshot();
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
