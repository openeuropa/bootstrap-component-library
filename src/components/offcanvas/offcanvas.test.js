import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-data-offcanvas/data";

const template = "@oe-bcl/offcanvas/offcanvas.html.twig";
const render = (params) => renderTwigFileAsNode(template, params, true);

describe("OE - Offcanvas", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`renders correctly without title`, () => {
    expect.assertions(1);
    const noTitle = { ...demoData, title: {} };

    return expect(render(noTitle)).resolves.toMatchSnapshot();
  });

  test(`renders correctly without title and close button`, () => {
    expect.assertions(1);
    const noTitleAndCloseButton = { ...demoData, title: {}, with_close: false };

    return expect(render(noTitleAndCloseButton)).resolves.toMatchSnapshot();
  });

  test(`renders correctly without close button`, () => {
    expect.assertions(1);
    const noCloseButton = { ...demoData, with_close: false };

    return expect(render(noCloseButton)).resolves.toMatchSnapshot();
  });

  test(`renders correctly with body scroll support`, () => {
    expect.assertions(1);
    const withBodyScroll = { ...demoData, with_body_scroll: true };

    return expect(render(withBodyScroll)).resolves.toMatchSnapshot();
  });

  test(`renders correctly without backdrop`, () => {
    expect.assertions(1);
    const withoutBackdrop = { ...demoData, with_backdrop: false };

    return expect(render(withoutBackdrop)).resolves.toMatchSnapshot();
  });
});
