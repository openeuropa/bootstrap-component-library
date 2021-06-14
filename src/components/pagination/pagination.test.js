import { merge, renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-data-pagination/data";
import demoCustomIconsData from "@openeuropa/bcl-data-pagination/dataCustomIcons";

const template = "@oe-bcl/pagination/pagination.html.twig";
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

      return expect(
        render({ ...demoData, size: size })
      ).resolves.toMatchSnapshot();
    });
  });

  alignments.forEach((alignment) => {
    test(`${alignment} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, alignment: alignment })
      ).resolves.toMatchSnapshot();
    });
  });

  test(`renders correctly with icons`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, enable_icon: true })
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with custom icons`, () => {
    expect.assertions(1);

    return expect(render(demoCustomIconsData)).resolves.toMatchSnapshot();
  });
});
