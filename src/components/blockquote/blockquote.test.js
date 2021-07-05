import { merge, renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-data-blockquote/data";

const template = "@oe-bcl/blockquote/blockquote.html.twig";
const render = (params, reset) => renderTwigFileAsNode(template, params, reset);

describe("OE - Blockquote", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render({ ...demoData }, true)).resolves.toMatchSnapshot();
  });

  test(`renders correctly with no cite`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, cite: "" }, true)
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with no attribution`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, attribution: "" }, true)
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with text aligned center`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, alignment: "center" }, true)
    ).resolves.toMatchSnapshot();
  });
});
