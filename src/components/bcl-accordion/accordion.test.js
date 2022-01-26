import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-data-accordion/data";
import demoCustomTags from "@openeuropa/bcl-data-accordion/dataCustomTags";

const template = "@oe-bcl/bcl-accordion/accordion.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Accordion", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`flush variant renders correctly`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, flush: true })
    ).resolves.toMatchSnapshot();
  });

  test(`with custom title tags renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoCustomTags)).resolves.toMatchSnapshot();
  });
});
