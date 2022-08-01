import { renderTwigFileAsNode, getVariants } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-data-badge/data";

const template = "@oe-bcl/bcl-badge/badge.html.twig";
const render = (params) => renderTwigFileAsNode(template, params, true);
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
      render({ ...demoData, assistive_text: "An assistive text" })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly as a rounded pill", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, rounded_pill: true })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly dismissible", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, dismissible: true })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with title", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, url: "http://example.com", title: "new title" })
    ).resolves.toMatchSnapshot();
  });

  backgrounds.forEach((background) => {
    test(`${background} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, background })
      ).resolves.toMatchSnapshot();
    });

    test(`${background} outline renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, background, outline: true })
      ).resolves.toMatchSnapshot();
    });
  });
});
