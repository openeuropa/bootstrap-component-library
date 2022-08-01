import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-data-accordion/data";
import demoCustomTags from "@openeuropa/bcl-data-accordion/data--custom-tags";

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

  test(`with main title renders correctly`, () => {
    expect.assertions(1);

    return expect(
      render({
        ...demoData,
        title: "An accordion title",
        title_tag: "h4",
        title_link: {
          path: "/example.html",
          label: "A title created by the bcl heading template",
        },
      })
    ).resolves.toMatchSnapshot();
  });

  test(`with custom title tags renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoCustomTags)).resolves.toMatchSnapshot();
  });
});
