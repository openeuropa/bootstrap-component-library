import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import dataDefault from "@openeuropa/bcl-banner/data/data";
import dataPrimary from "@openeuropa/bcl-banner/data/data--primary";
import dataImage from "@openeuropa/bcl-banner/data/data--image";
import dataShade from "@openeuropa/bcl-banner/data/data--shade";

const template = "@oe-bcl/bcl-banner/banner.html.twig";
const render = (params, reset) => renderTwigFileAsNode(template, params, reset);

expect.extend(toHaveNoViolations);

describe("OE - Page banner", () => {
  test("default renders correctly", () => {
    expect.assertions(1);
    return expect(render(dataDefault, true)).resolves.toMatchSnapshot();
  });

  test("primary renders correctly", () => {
    expect.assertions(1);
    return expect(render(dataPrimary, true)).resolves.toMatchSnapshot();
  });

  test("image text-block renders correctly", () => {
    expect.assertions(1);
    return expect(render(dataImage, true)).resolves.toMatchSnapshot();
  });

  test("image shade renders correctly", () => {
    expect.assertions(1);
    return expect(render(dataShade, true)).resolves.toMatchSnapshot();
  });

  test("default renders correctly with title", () => {
    expect.assertions(1);
    return expect(
      render(
        {
          ...dataDefault,
          title: "Page banner test title",
          title_tag: "h6",
        },
        true
      )
    ).resolves.toMatchSnapshot();
  });

  test("primary renders correctly with title", () => {
    expect.assertions(1);
    return expect(
      render(
        {
          ...dataPrimary,
          title: "Page banner test title",
          title_tag: "h6",
        },
        true
      )
    ).resolves.toMatchSnapshot();
  });

  test("default renders correctly with title and link", () => {
    expect.assertions(1);
    return expect(
      render(
        {
          ...dataDefault,
          title: "Page banner test title",
          title_tag: "h6",
          title_link: {
            path: "/example.html",
          },
        },
        true
      )
    ).resolves.toMatchSnapshot();
  });

  test("image text-block renders correctly with title", () => {
    expect.assertions(1);
    return expect(
      render(
        { ...dataImage, title: "Page banner test title", title_tag: "h6" },
        true
      )
    ).resolves.toMatchSnapshot();
  });

  test("image shade renders correctly with title", () => {
    expect.assertions(1);
    return expect(
      render(
        { ...dataShade, title: "Page banner test title", title_tag: "h6" },
        true
      )
    ).resolves.toMatchSnapshot();
  });

  test("default renders correctly with content classes", () => {
    expect.assertions(1);
    return expect(
      render(
        {
          ...dataDefault,
          content_classes: "new-content-class",
        },
        true
      )
    ).resolves.toMatchSnapshot();
  });

  test("default renders correctly fixed height", () => {
    expect.assertions(1);
    return expect(
      render(
        {
          ...dataDefault,
          fixed_height: true,
        },
        true
      )
    ).resolves.toMatchSnapshot();
  });

  test("default renders correctly full width", () => {
    expect.assertions(1);
    return expect(
      render(
        {
          ...dataDefault,
          full_width: true,
        },
        true
      )
    ).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, dataDefault, true))
    ).toHaveNoViolations();
  });
});

describe("OE - Hero banner", () => {
  test("default renders correctly", () => {
    expect.assertions(1);
    return expect(
      render({ ...dataDefault, hero: true }, true)
    ).resolves.toMatchSnapshot();
  });

  test("primary renders correctly", () => {
    expect.assertions(1);
    return expect(
      render({ ...dataPrimary, hero: true }, true)
    ).resolves.toMatchSnapshot();
  });

  test("image text-block renders correctly", () => {
    expect.assertions(1);
    return expect(
      render({ ...dataImage, hero: true }, true)
    ).resolves.toMatchSnapshot();
  });

  test("image shade renders correctly", () => {
    expect.assertions(1);
    return expect(
      render({ ...dataShade, hero: true }, true)
    ).resolves.toMatchSnapshot();
  });

  test("default renders correctly with title", () => {
    expect.assertions(1);
    return expect(
      render(
        {
          ...dataDefault,
          hero: true,
          title: "Hero banner test title",
          title_tag: "h6",
        },
        true
      )
    ).resolves.toMatchSnapshot();
  });

  test("primary renders correctly with title", () => {
    expect.assertions(1);
    return expect(
      render(
        {
          ...dataPrimary,
          hero: true,
          title: "Hero banner test title",
          title_tag: "h6",
        },
        true
      )
    ).resolves.toMatchSnapshot();
  });

  test("default renders correctly with title and link", () => {
    expect.assertions(1);
    return expect(
      render(
        {
          ...dataDefault,
          hero: true,
          title: "Hero banner test title",
          title_tag: "h6",
          title_link: {
            path: "/example.html",
          },
        },
        true
      )
    ).resolves.toMatchSnapshot();
  });

  test("image text-block renders correctly with title", () => {
    expect.assertions(1);
    return expect(
      render(
        {
          ...dataImage,
          hero: true,
          title: "Hero banner test title",
          title_tag: "h6",
        },
        true
      )
    ).resolves.toMatchSnapshot();
  });

  test("image shade renders correctly with title", () => {
    expect.assertions(1);
    return expect(
      render(
        {
          ...dataShade,
          hero: true,
          title: "Hero banner test title",
          title_tag: "h6",
        },
        true
      )
    ).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(
        renderTwigFileAsHtml(template, { ...dataDefault, hero: true }, true)
      )
    ).toHaveNoViolations();
  });
});
