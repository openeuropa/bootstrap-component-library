import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import dataBasic from "@openeuropa/bcl-data-form/data";
import dataGrid from "@openeuropa/bcl-data-form/data--grid";
import dataDisabled from "@openeuropa/bcl-data-form/data--disabled";
import dataInline from "@openeuropa/bcl-data-form/data--inline";
import dataHorizontal from "@openeuropa/bcl-data-form/data--horizontal";

const template = "@oe-bcl/bcl-form/form.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

expect.extend(toHaveNoViolations);

describe("OE - Form", () => {
  test(`basic renders correctly`, () => {
    expect.assertions(1);

    return expect(render(dataBasic)).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, dataBasic, true)),
    ).toHaveNoViolations();
  });

  test(`horizontal renders correctly`, () => {
    expect.assertions(1);

    return expect(render(dataHorizontal)).resolves.toMatchSnapshot();
  });

  test(`horizontal passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, dataHorizontal, true)),
    ).toHaveNoViolations();
  });

  test(`using a grid renders correctly`, () => {
    expect.assertions(1);

    return expect(render(dataGrid)).resolves.toMatchSnapshot();
  });

  test(`using a grid passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, dataGrid, true)),
    ).toHaveNoViolations();
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
      }),
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
