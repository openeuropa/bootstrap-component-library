import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-data-blockquote/data";
import { axe, toHaveNoViolations } from "jest-axe";

const template = "@oe-bcl/bcl-blockquote/blockquote.html.twig";
const render = (params) => renderTwigFileAsNode(template, params, true);
expect.extend(toHaveNoViolations);

describe("OE - Blockquote", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render({ ...demoData })).resolves.toMatchSnapshot();
  });

  test(`renders correctly with no cite`, () => {
    expect.assertions(1);

    return expect(render({ ...demoData, cite: "" })).resolves.toMatchSnapshot();
  });

  test(`renders correctly with no attribution`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, attribution: "" }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with text aligned center`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, alignment: "center" }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with text aligned right`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, alignment: "right" }),
    ).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(await renderTwigFileAsHtml(template, demoData, true)),
    ).toHaveNoViolations();
  });
});
