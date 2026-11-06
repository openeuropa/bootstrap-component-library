import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
  DrupalAttribute,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoData from "@openeuropa/bcl-data-offcanvas/data";

const template = "@oe-bcl/bcl-offcanvas/offcanvas.html.twig";
const render = (params) => renderTwigFileAsNode(template, params, true);
const renderOffcanvas = async (params, reset = true) =>
  (await renderTwigFileAsNode(template, params, reset)).firstElementChild;

expect.extend(toHaveNoViolations);

describe("OE - Offcanvas", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`renders correctly with responsive behaviour`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, responsiveness: "lg" }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly without title`, () => {
    expect.assertions(1);
    const noTitle = { ...demoData, title: "" };

    return expect(render(noTitle)).resolves.toMatchSnapshot();
  });

  test(`renders correctly without title and close button`, () => {
    expect.assertions(1);
    const noTitleAndCloseButton = { ...demoData, title: "", with_close: false };

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

  test(`renders correctly with extra class on close button`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, extra_classes_close: "close-button-extra-class" }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with extra class on header`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, extra_classes_header: "header-extra-class" }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with extra class on body`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, extra_classes_body: "body-extra-class" }),
    ).resolves.toMatchSnapshot();
  });

  test(`has the dialog role when labelled and not responsive`, async () => {
    const offcanvas = await renderOffcanvas(demoData);

    expect(offcanvas.getAttribute("role")).toBe("dialog");
  });

  test(`has the region role when labelled and responsive`, async () => {
    const offcanvas = await renderOffcanvas({
      ...demoData,
      responsiveness: "lg",
    });

    expect(offcanvas.getAttribute("role")).toBe("region");
  });

  test(`has no role without title`, async () => {
    const offcanvas = await renderOffcanvas({ ...demoData, title: "" });

    expect(offcanvas.hasAttribute("role")).toBe(false);
  });

  test(`keeps the role given in attributes`, async () => {
    const offcanvas = await renderOffcanvas(
      {
        ...demoData,
        responsiveness: "lg",
        attributes: new DrupalAttribute().setAttribute("role", "complementary"),
      },
      false,
    );

    expect(offcanvas.getAttribute("role")).toBe("complementary");
  });

  test(`has a default label on the close button`, async () => {
    const offcanvas = await renderOffcanvas({
      ...demoData,
      close_aria_label: "",
    });

    expect(
      offcanvas.querySelector(".btn-close").getAttribute("aria-label"),
    ).toBe("Close");
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(await renderTwigFileAsHtml(template, demoData, true)),
    ).toHaveNoViolations();
  });

  test(`passes the accessibility tests with responsive behaviour`, async () => {
    expect(
      await axe(
        await renderTwigFileAsHtml(
          template,
          { ...demoData, responsiveness: "lg" },
          true,
        ),
      ),
    ).toHaveNoViolations();
  });
});
