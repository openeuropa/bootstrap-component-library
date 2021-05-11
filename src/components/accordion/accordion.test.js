import { renderTwigFileAsNode } from "@oe/test-utils";
import demoData from "@oe/data-accordion/data";

const template = "@oe/accordion/accordion.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Accordion", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render({ ...demoData })).resolves.toMatchSnapshot();
  });

  test(`flush variant renders correctly`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, flush: true })
    ).resolves.toMatchSnapshot();
  });
});
