import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";
import drupalAttribute from "drupal-attribute";

import demoData from "@openeuropa/bcl-file/data/data";
import demoCardData from "@openeuropa/bcl-file/data/data--card";

const template = "@oe-bcl/bcl-file/file.html.twig";

demoData.translation.id = "language-dropdown";
demoCardData.translation.id = "language-dropdown";

const render = (params) => renderTwigFileAsNode(template, params);

expect.extend(toHaveNoViolations);

describe("OE - File", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);
    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`renders correctly with title and link`, () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoData,
        title: "File test title",
        title_tag: "h6",
        title_link: {
          path: "/example.html",
        },
      }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with new class on translation`, () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoData,
        translation: {
          attributes: new drupalAttribute().addClass("new-class"),
          id: "language-dropdown",
          label: {
            label: "Other languages (3)",
          },
          items: [
            {
              language: "български",
              meta: "(16.2 MB - PDF)",
              download: {
                label: "Download",
                path: "http://www.africau.edu/images/default/sample.pdf",
              },
            },
          ],
        },
      }),
    ).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoData, true)),
    ).toHaveNoViolations();
  });
});

describe("OE - File Card", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);
    return expect(render(demoCardData)).resolves.toMatchSnapshot();
  });

  test(`renders correctly with title`, () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoCardData,
        title: "File card test title",
        title_tag: "h6",
      }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with different download icon`, () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoData,
        download: {
          label: "Download",
          path: "/example.html",
          icon: {
            name: "cloud-download",
            size: "fluid",
          },
        },
      }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with empty download icon name`, () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoData,
        download: {
          label: "Download",
          path: "/example.html",
          icon: {
            size: "m",
          },
        },
      }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with download that has different icon path`, () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoData,
        download: {
          label: "Download",
          path: "/example.html",
          icon: {
            path: "new_icons.svg",
          },
        },
      }),
    ).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoCardData, true)),
    ).toHaveNoViolations();
  });

  test(`renders correctly with override default attributes download`, () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoData,
        download: {
          label: "Go here",
          path: "/example.html",
          attributes: new drupalAttribute()
            .addClass("new-class")
            .setAttribute("download", "false")
            .setAttribute("target", "_self"),
        },
      }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with new attributes download`, () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoData,
        download: {
          label: "Go here",
          path: "/example.html",
          attributes: new drupalAttribute().setAttribute("example", "test"),
        },
      }),
    ).resolves.toMatchSnapshot();
  });

  test(`translations renders correctly with new attributes download`, () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoCardData,
        download: {
          label: "Go here",
          path: "/example.html",
          attributes: new drupalAttribute().setAttribute("example", "test"),
        },
      }),
    ).resolves.toMatchSnapshot();
  });

  test(`translations renders correctly with empty download icon name`, () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoCardData,
        download: {
          label: "Download",
          path: "/example.html",
          icon: {
            size: "m",
          },
        },
      }),
    ).resolves.toMatchSnapshot();
  });

  test(`translations renders correctly with download that has different icon path`, () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoCardData,
        download: {
          label: "Download",
          path: "/example.html",
          icon: {
            path: "new_icons.svg",
          },
        },
      }),
    ).resolves.toMatchSnapshot();
  });
});
