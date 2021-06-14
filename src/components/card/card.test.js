import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData, { image } from "@openeuropa/bcl-data-card/data";
import demoDataHorizontal from "@openeuropa/bcl-data-card/dataHorizontal";

const template = "@oe-bcl/card/card.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Card", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`renders with image bottom correctly`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, image: { ...image, position: "bottom" } })
    ).resolves.toMatchSnapshot();
  });

  test(`renders with variant correctly`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, variant: "danger" })
    ).resolves.toMatchSnapshot();
  });

  test(`renders horizontal correctly`, () => {
    expect.assertions(1);

    return expect(render(demoDataHorizontal)).resolves.toMatchSnapshot();
  });

  test(`renders with border variant correctly`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, border_variant: "danger" })
    ).resolves.toMatchSnapshot();
  });

  test(`renders with text color white correctly`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, text_color: "white" })
    ).resolves.toMatchSnapshot();
  });
});
