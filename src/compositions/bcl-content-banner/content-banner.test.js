import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoData from "@openeuropa/bcl-content-banner/data/data";
import demoLinksData from "@openeuropa/bcl-content-banner/data/data--links";

const template = "@oe-bcl/bcl-content-banner/content-banner.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

expect.extend(toHaveNoViolations);

describe("OE - Content banner", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test("renders correctly with a date block", () => {
    expect.assertions(1);

    return expect(
      render({
        ...demoData,
        image: {},
        date: {
          year: "2021",
          month: "Jan",
          day: "23",
          date_time: "2021-01-23",
        },
      })
    ).resolves.toMatchSnapshot();
  });

  test("with links renders correctly", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, ...demoLinksData })
    ).resolves.toMatchSnapshot();
  });

  test("with white background renders correctly", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, background: "white" })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with title and link", () => {
    expect.assertions(1);

    return expect(
      render({
        ...demoData,
        title: "Page banner test title",
        title_tag: "h6",
        title_link: {
          path: "/example.html",
        },
      })
    ).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoLinksData, true))
    ).toHaveNoViolations();
  });
});
