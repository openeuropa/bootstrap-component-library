import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";
import demoData from "@openeuropa/bcl-fact-figures/data";

const template = "@oe-bcl/bcl-fact-figures/fact-figures.html.twig";

const render = (params) => renderTwigFileAsNode(template, params);

expect.extend(toHaveNoViolations);

describe("OE - Fact and figures", () => {
  test(`renders correctly in 3 columns`, () => {
    expect.assertions(1);
    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`renders correctly in 2 columns`, () => {
    expect.assertions(1);
    return expect(
      render({ ...demoData, responsive_columns: 2 }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly in 1 column`, () => {
    expect.assertions(1);
    return expect(
      render({ ...demoData, responsive_columns: 1 }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with block variant`, () => {
    expect.assertions(1);
    return expect(
      render({ ...demoData, variant: "block" }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly in 3 columns with custom title tag`, () => {
    expect.assertions(1);
    return expect(
      render({ ...demoData, title_tag: "h6" }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly in 2 columns with custom title tag`, () => {
    expect.assertions(1);
    return expect(
      render({ ...demoData, responsive_columns: 2, title_tag: "h6" }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly in 1 column with custom title tag`, () => {
    expect.assertions(1);
    return expect(
      render({ ...demoData, responsive_columns: 1, title_tag: "h6" }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with block variant and with custom title tag`, () => {
    expect.assertions(1);
    return expect(
      render({ ...demoData, variant: "block", title_tag: "h6" }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with hidden icons`, () => {
    expect.assertions(1);
    return expect(
      render({ ...demoData, display_icons: false }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with extra class on columns`, () => {
    expect.assertions(1);
    return expect(
      render({ ...demoData, cols_extra_classes: "new-column-class" }),
    ).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoData, true)),
    ).toHaveNoViolations();
  });
});
