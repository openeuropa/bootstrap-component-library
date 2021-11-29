import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoData from "@openeuropa/bcl-featured-media/data";
import demoDataVideo from "@openeuropa/bcl-featured-media/dataVideo";
import demoDataImage from "@openeuropa/bcl-featured-media/dataImage";
import demoDataFeaturedItem from "@openeuropa/bcl-featured-media/dataFeaturedItem";

const template = "@oe-bcl/bcl-featured-media/featured-media.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

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
    return expect(render(demoDataFeaturedItem)).resolves.toMatchSnapshot();
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
        ...demoDataFeaturedItem,
        title: "Featured media test title",
        title_tag: "h6",
      })
    ).resolves.toMatchSnapshot();
  });
});
