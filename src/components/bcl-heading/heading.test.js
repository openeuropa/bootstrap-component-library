import { merge, renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
const template = "@oe-bcl/bcl-heading/heading.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Heading", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(
      render({ title: "A title created by the bcl heading template" })
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with custom tag`, () => {
    expect.assertions(1);

    return expect(
      render({
        title: "A title created by the bcl heading template",
        title_tag: "h3",
      })
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with a link`, () => {
    expect.assertions(1);

    return expect(
      render({
        link: {
          path: "/example",
          label: "A title created by the bcl heading template",
        },
      })
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with a link and a title`, () => {
    expect.assertions(1);

    return expect(
      render({
        link: {
          path: "/example",
          title: "A title created by the bcl heading template",
        },
      })
    ).resolves.toMatchSnapshot();
  });
});
