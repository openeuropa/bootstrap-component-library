import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import dataDefault from "@openeuropa/bcl-banner/dataDefault.js";
import dataPrimary from "@openeuropa/bcl-banner/dataPrimary.js";
import dataImage from "@openeuropa/bcl-banner/dataImage.js";
import dataShade from "@openeuropa/bcl-banner/dataShade.js";

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
});
