import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoData from "@openeuropa/bcl-links-block/data/data";

const template = "@oe-bcl/bcl-links-block/links-block.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

expect.extend(toHaveNoViolations);

describe("OE - Links block", () => {
  test("renders correctly", () => {
    expect.assertions(1);
    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test("renders correctly without links", () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoData,
        title: "Links block test title",
        title_tag: "h6",
        title_link: {
          path: "/example.html",
        },
        links: [],
      })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with horizontal", () => {
    expect.assertions(1);
    return expect(
      render({ ...demoData, direction: "horizontal" })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with transparent background", () => {
    expect.assertions(1);
    return expect(
      render({ ...demoData, variant: "transparent" })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with title", () => {
    expect.assertions(1);
    return expect(
      render({ ...demoData, title: "Links block test title", title_tag: "h6" })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with horizontal and with title and link", () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoData,
        direction: "horizontal",
        title: "Links block test title",
        title_tag: "h6",
        title_link: {
          path: "/example.html",
        },
      })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with transparent background and with title and link", () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoData,
        variant: "transparent",
        title: "Links block test title",
        title_tag: "h6",
        title_link: {
          path: "/example.html",
        },
      })
    ).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoData, true))
    ).toHaveNoViolations();
  });
});
