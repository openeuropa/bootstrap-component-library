import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoData from "@openeuropa/bcl-description-list/data/data";
import demoDataHorizontal from "@openeuropa/bcl-description-list/data/data--horizontal";

const template = "@oe-bcl/bcl-description-list/description-list.html.twig";

const render = (params) => renderTwigFileAsNode(template, params);

expect.extend(toHaveNoViolations);

describe("OE - Description List", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);
    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`horizontal renders correctly`, () => {
    expect.assertions(1);
    return expect(render(demoDataHorizontal)).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoData, true))
    ).toHaveNoViolations();
  });

  test(`horizontal passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoDataHorizontal, true))
    ).toHaveNoViolations();
  });
});

describe("OE - Description List with title", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoData,
        title: "Description list test title",
        title_tag: "h6",
      })
    ).resolves.toMatchSnapshot();
  });

  test(`bordered renders correctly`, () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoData,
        title: "Description list test title",
        title_tag: "h6",
        bordered: true,
      })
    ).resolves.toMatchSnapshot();
  });

  test(`horizontal renders correctly`, () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoDataHorizontal,
        title: "Description list test title",
        title_tag: "h6",
      })
    ).resolves.toMatchSnapshot();
  });

  test(`horizontal with different col size renders correctly`, () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoDataHorizontal,
        horizontal_size: "8-4",
        title: "Description list test title",
        title_tag: "h6",
      })
    ).resolves.toMatchSnapshot();
  });

  test(`horizontal and bordered renders correctly`, () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoDataHorizontal,
        bordered: true,
        title: "Description list test title",
        title_tag: "h6",
      })
    ).resolves.toMatchSnapshot();
  });

  test(`with inline icon renders correctly`, () => {
    expect.assertions(1);
    return expect(
      render({
        items: [
          {
            term: '<svg class="me-2 bi icon--fluid"><use xlink:href="/icons.svg#printer-fill"></use></svg>Only title <strong>label</strong> with inline icon',
            definition:
              '<svg class="me-2 bi icon--fluid"><use xlink:href="/icons.svg#printer-fill"></use></svg>Description text goes here.',
          },
        ],
      })
    ).resolves.toMatchSnapshot();
  });
});
