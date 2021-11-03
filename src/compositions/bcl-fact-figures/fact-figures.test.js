import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-fact-figures/data/data.js";
import drupalAttribute from "drupal-attribute";
const template = "@oe-bcl/bcl-fact-figures/fact-figures.html.twig";

const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Fact and figures", () => {
  test(`renders correctly in 3 columns`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`renders correctly in 2 columns`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, responsive_columns: 2 })
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly in 1 column`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, responsive_columns: 1 })
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with block variant`, () => {
    demoData.attributes = new drupalAttribute();
    expect.assertions(1);

    return expect(
      render({ ...demoData, variant: "block" })
    ).resolves.toMatchSnapshot();
  });
});
