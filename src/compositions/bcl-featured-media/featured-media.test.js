import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoData from "@openeuropa/bcl-featured-media/data/data";
import demoDataVideo from "@openeuropa/bcl-featured-media/data/data--video";
import demoDataImage from "@openeuropa/bcl-featured-media/data/data--image";
import demoFeaturedItem from "@openeuropa/bcl-featured-media/data/data--featured-item";

const template = "@oe-bcl/bcl-featured-media/featured-media.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

expect.extend(toHaveNoViolations);

describe("OE - Featured media", () => {
  test("renders correctly with iframe", () => {
    expect.assertions(1);
    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test("renders correctly with video", () => {
    expect.assertions(1);
    return expect(render(demoDataVideo)).resolves.toMatchSnapshot();
  });

  test("renders correctly with image", () => {
    expect.assertions(1);
    return expect(render(demoDataImage)).resolves.toMatchSnapshot();
  });

  test("featured item renders correctly", () => {
    expect.assertions(1);
    return expect(render(demoFeaturedItem)).resolves.toMatchSnapshot();
  });

  test("renders correctly with iframe and with title", () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoData,
        title: "Featured media test title",
        title_tag: "h6",
      })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with video and with title", () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoDataVideo,
        title: "Featured media test title",
        title_tag: "h6",
      })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with image and with title", () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoDataImage,
        title: "Featured media test title",
        title_tag: "h6",
      })
    ).resolves.toMatchSnapshot();
  });

  test("featured item renders correctly with title", () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoFeaturedItem,
        title: "Featured media test title",
        title_tag: "h6",
      })
    ).resolves.toMatchSnapshot();
  });

  test("featured item renders correctly with description title", () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoFeaturedItem,
        description_title: "Featured media test description title",
        description_title_tag: "h6",
      })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with ratio", () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoDataVideo,
        ratio: "21x9",
      })
    ).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoData, true))
    ).toHaveNoViolations();
  });
});
