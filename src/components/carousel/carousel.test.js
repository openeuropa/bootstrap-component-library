import { renderTwigFileAsNode } from "@oe/test-utils";
import demoData from "@oe/data-carousel/data";

const template = "@oe/carousel/carousel.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

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

  test("renders correctly with extra classes", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, extra_classes: "an-extra-class" })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with extra classes, fade and dark variant", () => {
    expect.assertions(1);

    return expect(
      render({
        ...demoData,
        extra_classes: "an-extra-class",
        dark: true,
        fade: true,
      })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with custom intervals", () => {
    expect.assertions(1);
    const withIntervals = [];
    demoData.items.forEach((item, i) => {
      item.interval = 2000;
      withIntervals.push(item);
    });

    return expect(
      render({ ...demoData, items: withIntervals })
    ).resolves.toMatchSnapshot();
  });
});
