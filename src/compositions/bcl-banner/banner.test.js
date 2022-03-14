import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import dataDefault from "@openeuropa/bcl-banner/data/data";
import dataPrimary from "@openeuropa/bcl-banner/data/data--primary";
import dataImage from "@openeuropa/bcl-banner/data/data--image";
import dataShade from "@openeuropa/bcl-banner/data/data--shade";

const template = "@oe-bcl/bcl-banner/banner.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Page banner", () => {
  test("default renders correctly", () => {
    expect.assertions(1);
    return expect(render(dataDefault)).resolves.toMatchSnapshot();
  });

  test("primary renders correctly", () => {
    expect.assertions(1);
    return expect(render(dataPrimary)).resolves.toMatchSnapshot();
  });

  test("image text-block renders correctly", () => {
    expect.assertions(1);
    return expect(render(dataImage)).resolves.toMatchSnapshot();
  });

  test("image shade renders correctly", () => {
    expect.assertions(1);
    return expect(render(dataShade)).resolves.toMatchSnapshot();
  });

  test("default renders correctly with title", () => {
    expect.assertions(1);
    return expect(
      render({
        ...dataDefault,
        title: "Page banner test title",
        title_tag: "h6",
      })
    ).resolves.toMatchSnapshot();
  });

  test("primary renders correctly with title", () => {
    expect.assertions(1);
    return expect(
      render({
        ...dataPrimary,
        title: "Page banner test title",
        title_tag: "h6",
      })
    ).resolves.toMatchSnapshot();
  });

  test("image text-block renders correctly with title", () => {
    expect.assertions(1);
    return expect(
      render({ ...dataImage, title: "Page banner test title", title_tag: "h6" })
    ).resolves.toMatchSnapshot();
  });

  test("image shade renders correctly with title", () => {
    expect.assertions(1);
    return expect(
      render({ ...dataShade, title: "Page banner test title", title_tag: "h6" })
    ).resolves.toMatchSnapshot();
  });
});

describe("OE - Hero banner", () => {
  test("default renders correctly", () => {
    expect.assertions(1);
    return expect(
      render({ ...dataDefault, hero: true })
    ).resolves.toMatchSnapshot();
  });

  test("primary renders correctly", () => {
    expect.assertions(1);
    return expect(
      render({ ...dataPrimary, hero: true })
    ).resolves.toMatchSnapshot();
  });

  test("image text-block renders correctly", () => {
    expect.assertions(1);
    return expect(
      render({ ...dataImage, hero: true })
    ).resolves.toMatchSnapshot();
  });

  test("image shade renders correctly", () => {
    expect.assertions(1);
    return expect(
      render({ ...dataShade, hero: true })
    ).resolves.toMatchSnapshot();
  });

  test("default renders correctly with title", () => {
    expect.assertions(1);
    return expect(
      render({
        ...dataDefault,
        hero: true,
        title: "Hero banner test title",
        title_tag: "h6",
      })
    ).resolves.toMatchSnapshot();
  });

  test("primary renders correctly with title", () => {
    expect.assertions(1);
    return expect(
      render({
        ...dataPrimary,
        hero: true,
        title: "Hero banner test title",
        title_tag: "h6",
      })
    ).resolves.toMatchSnapshot();
  });

  test("image text-block renders correctly with title", () => {
    expect.assertions(1);
    return expect(
      render({
        ...dataImage,
        hero: true,
        title: "Hero banner test title",
        title_tag: "h6",
      })
    ).resolves.toMatchSnapshot();
  });

  test("image shade renders correctly with title", () => {
    expect.assertions(1);
    return expect(
      render({
        ...dataShade,
        hero: true,
        title: "Hero banner test title",
        title_tag: "h6",
      })
    ).resolves.toMatchSnapshot();
  });
});
