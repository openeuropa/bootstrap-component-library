import { merge, renderTwigFileAsNode } from "@oe/test-utils";
import demoData from "@oe/data-blockquote/data";

const template = "@oe/blockquote/blockquote.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Blockquote", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData})
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with no cite`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, cite: ''})
    ).resolves.toMatchSnapshot();
  });
  
  test(`renders correctly with no attribution`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, attribution: ''})
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with text aligned center`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, alignment: 'center'})
    ).resolves.toMatchSnapshot();
  });
});
