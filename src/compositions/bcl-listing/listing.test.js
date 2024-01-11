import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoDateData from "@openeuropa/bcl-listing/data/listing--date";
import demoDefaultData from "@openeuropa/bcl-listing/data/listing--default-1-col";
import demoDefault2ColData from "@openeuropa/bcl-listing/data/listing--default-2-col";
import demoDefault3ColData from "@openeuropa/bcl-listing/data/listing--default-3-col";
import demoHighlightData from "@openeuropa/bcl-listing/data/listing--highlight-1-col";
import demoHighlight3ColData from "@openeuropa/bcl-listing/data/listing--highlight-3-col";
import demoHighlight2ColData from "@openeuropa/bcl-listing/data/listing--highlight-2-col";

const template = "@oe-bcl/bcl-listing/listing.html.twig";

const render = (params) => renderTwigFileAsNode(template, params, true);

expect.extend(toHaveNoViolations);

describe("OE - Listing", () => {
  test("horizontal renders correctly", () => {
    expect.assertions(1);
    return expect(render(demoDefaultData)).resolves.toMatchSnapshot();
  });

  test(`horizontal passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoDefaultData, true)),
    ).toHaveNoViolations();
  });

  test("alignment classes render correctly", () => {
    expect.assertions(1);
    return expect(
      render({ ...demoDefaultData, alignment: "start" }),
    ).resolves.toMatchSnapshot();
  });

  test("Default listing item in 2 columns renders correctly", () => {
    expect.assertions(1);
    return expect(render(demoDefault2ColData)).resolves.toMatchSnapshot();
  });

  test("Default listing item in 3 columns renders correctly", () => {
    expect.assertions(1);
    return expect(render(demoDefault3ColData)).resolves.toMatchSnapshot();
  });

  test(`default passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoDefault3ColData, true)),
    ).toHaveNoViolations();
  });

  test("with highlight listing item renders correctly", () => {
    expect.assertions(1);
    return expect(render(demoHighlightData)).resolves.toMatchSnapshot();
  });

  test(`highlight passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoHighlightData, true)),
    ).toHaveNoViolations();
  });

  test("with highlight listing item in 2 columns renders correctly", () => {
    expect.assertions(1);
    return expect(render(demoHighlight2ColData)).resolves.toMatchSnapshot();
  });

  test("with highlight listing item in 3 columns renders correctly", () => {
    expect.assertions(1);
    return expect(render(demoHighlight3ColData)).resolves.toMatchSnapshot();
  });

  test("with date listing items renders correctly", () => {
    expect.assertions(1);
    return expect(render(demoDateData)).resolves.toMatchSnapshot();
  });

  test("horizontal renders correctly with title and link", () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoDefaultData,
        title: "Listing test title",
        title_tag: "h6",
        title_link: {
          path: "/example.html",
          label: "Link label",
        },
      }),
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly in 2 columns with title", () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoDefault2ColData,
        title: "Listing test title",
        title_tag: "h6",
      }),
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly in 3 columns with title", () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoDefault3ColData,
        title: "Listing test title",
        title_tag: "h6",
      }),
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with highlight and with title", () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoHighlightData,
        title: "Listing test title",
        title_tag: "h6",
      }),
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly in 2 columns with highlight and with title", () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoHighlight2ColData,
        title: "Listing test title",
        title_tag: "h6",
      }),
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly in 3 columns with highlight and with title", () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoHighlight3ColData,
        title: "Listing test title",
        title_tag: "h6",
      }),
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with date and with title", () => {
    expect.assertions(1);
    return expect(
      render({ ...demoDateData, title: "Listing test title", title_tag: "h6" }),
    ).resolves.toMatchSnapshot();
  });
});
