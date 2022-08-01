import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoData from "@openeuropa/bcl-data-pagination/data";

const template = "@oe-bcl/bcl-pagination/pagination.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);
const sizes = ["sm", "lg"];
const alignments = ["end", "center"];

describe("OE - Pagination", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  sizes.forEach((size) => {
    test(`${size} renders correctly`, () => {
      expect.assertions(1);

      return expect(render({ ...demoData, size })).resolves.toMatchSnapshot();
    });
  });

  alignments.forEach((alignment) => {
    test(`${alignment} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, alignment })
      ).resolves.toMatchSnapshot();
    });
  });

  test(`renders correctly as glossary`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, variant: "glossary" })
    ).resolves.toMatchSnapshot();
  });
});
