import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-data-accordion/data";

const template = "@oe-bcl/accordion/accordion.html.twig";
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
