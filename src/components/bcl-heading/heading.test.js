import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

const template = "@oe-bcl/bcl-heading/heading.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

expect.extend(toHaveNoViolations);

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
        title_link: {
          path: "/example.html",
          label: "A title created by the bcl heading template",
        },
      })
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with a link and a title`, () => {
    expect.assertions(1);

    return expect(
      render({
        title: "A title created by the bcl heading template",
        title_link: {
          path: "/example.html",
        },
      })
    ).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(
        renderTwigFileAsHtml(
          template,
          {
            title: "A title created by the bcl heading template",
            title_link: {
              path: "/example.html",
            },
          },
          true
        )
      )
    ).toHaveNoViolations();
  });
});
