import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";
import { DrupalAttribute } from "drupal-attribute";

import demoData from "@openeuropa/bcl-data-pagination/data";

const template = "@oe-bcl/bcl-pagination/pagination.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);
const sizes = ["sm", "lg"];
const alignments = ["end", "center"];

expect.extend(toHaveNoViolations);

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
        render({ ...demoData, alignment }),
      ).resolves.toMatchSnapshot();
    });
  });

  test(`with ellipsises renders correctly`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, ellipsis_after: true, ellipsis_before: true }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with new attributes on items`, () => {
    expect.assertions(1);

    return expect(
      render({
        items: [
          {
            label: "1",
            path: "/example.html",
            attributes: new DrupalAttribute()
              .addClass("new-class")
              .setAttribute("new-attributes", "1"),
          },
        ],
      }),
    ).resolves.toMatchSnapshot();
  });

  test("without icon path renders correctly", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, icon_path: "", _enable_prev_next_icon: true }),
    ).resolves.toMatchSnapshot();
  });

  test("with custom icon for next renders for correctly", () => {
    expect.assertions(1);

    return expect(
      render({
        ...demoData,
        next: {
          path: "/example.html",
          icon: {
            name: "chevron-top",
            size: "fluid",
          },
        },
      }),
    ).resolves.toMatchSnapshot();
  });

  test("with custom list attributes renders for correctly", () => {
    expect.assertions(1);

    return expect(
      render({
        ...demoData,
        list_attributes: new DrupalAttribute()
          .addClass("new-class")
          .setAttribute("new-attributes", "1"),
      }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly as glossary`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, variant: "glossary" }),
    ).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoData)),
    ).toHaveNoViolations();
  });
});
