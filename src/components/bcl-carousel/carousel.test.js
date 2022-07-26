import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-data-carousel/data";

const template = "@oe-bcl/bcl-carousel/carousel.html.twig";
const render = (params) => renderTwigFileAsNode(template, params, true);

describe("OE - carousel", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test("renders correctly with dark variant", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, dark: true })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly without controls", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, with_controls: false })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly without indicators", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, with_indicators: false })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly when not initialized", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, autoinit: false })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly without autoplay", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, autoplay: false })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with rounded indicators", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, rounded_indicators: true })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with specific slide", () => {
    expect.assertions(1);
    return expect(
      render({ ...demoData, active_item: 2 })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly when touch swipe is disabled", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, disable_touch: true })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with fade transition", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, fade: true })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with title", () => {
    expect.assertions(1);

    return expect(
      render({
        ...demoData,
        title: "Carousel Title",
        title_tag: "h1",
        title_link: {
          path: "/example.html",
          label: "A title created by the bcl heading template",
        },
      })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with fade and dark variant", () => {
    expect.assertions(1);

    return expect(
      render({
        ...demoData,
        dark: true,
        fade: true,
      })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with custom intervals", () => {
    expect.assertions(1);
    const withIntervals = [];
    demoData.items.forEach((item) => {
      item.interval = 2000;
      withIntervals.push(item);
    });

    return expect(
      render({ ...demoData, items: withIntervals })
    ).resolves.toMatchSnapshot();
  });
});
