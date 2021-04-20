import { merge, renderTwigFileAsNode } from "@oe/test-utils";
import demoData from "@oe/data-badge/data";
import { getVariants } from "@oe/story-utils";

const template = "@oe/badge/badge.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);
const backgrounds = getVariants();

describe("OE - badge", () => {
  test("renders correctly with a link", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, url: "http://example.com" })
    ).resolves.toMatchSnapshot();
  });
  test("renders correctly with assistive text", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, hidden_text: "An assistive text" })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly as a rounded pill", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, rounded_pill: true })
    ).resolves.toMatchSnapshot();
  });

  backgrounds.forEach((background) => {
    test(`${background} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, background: background })
      ).resolves.toMatchSnapshot();
    });
  });
});
