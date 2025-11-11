import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";
import { DrupalAttribute } from "drupal-attribute";

import dataDefault from "@openeuropa/bcl-timeline/data";

const template = "@oe-bcl/bcl-timeline/timeline.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

expect.extend(toHaveNoViolations);

describe("OE - Timeline", () => {
  test("default renders correctly", () => {
    expect.assertions(1);
    return expect(render(dataDefault)).resolves.toMatchSnapshot();
  });

  test("default renders correctly with title and link", () => {
    expect.assertions(1);
    return expect(
      render({
        ...dataDefault,
        title: "Timeline test title",
        title_tag: "h6",
        title_link: {
          path: "/example.html",
          label: "Link label",
        },
      }),
    ).resolves.toMatchSnapshot();
  });

  test("default renders correctly with new classes on items", () => {
    expect.assertions(1);
    return expect(
      render({
        ...dataDefault,
        hide: {
          from: 2,
          to: 3,
        },
        items: [
          {
            label: "13 September 2017",
            title: "Item title",
            content:
              '<a href="/example.html">President Juncker\'s State of the Union speech</a>',
            attributes: new DrupalAttribute().addClass("new-class"),
          },
          {
            label: "13 September 2017",
            title: "Item title",
            content:
              '<a href="/example.html">President Juncker\'s State of the Union speech</a>',
            attributes: new DrupalAttribute().addClass("new-class"),
          },
          {
            label: "13 September 2017",
            title: "Item title",
            content:
              '<a href="/example.html">President Juncker\'s State of the Union speech</a>',
            attributes: new DrupalAttribute().addClass("new-class"),
          },
          {
            label: "13 September 2017",
            title: "Item title",
            content:
              '<a href="/example.html">President Juncker\'s State of the Union speech</a>',
            attributes: new DrupalAttribute().addClass("new-class"),
          },
        ],
      }),
    ).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(await renderTwigFileAsHtml(template, dataDefault, true)),
    ).toHaveNoViolations();
  });
});
