import {
  merge,
  renderTwigFileAsNode,
  getVariants,
} from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-data-alert/data";

const template = "@oe-bcl/bcl-alert/alert.html.twig";
const render = (params) => renderTwigFileAsNode(template, params, true);
const variants = getVariants();

describe("OE - Alert", () => {
  test(`renders correctly without close button`, () => {
    expect.assertions(1);

    return expect(
      render({
        ...demoData,
        dismissible: false,
      })
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly without animation for the close button`, () => {
    expect.assertions(1);

    return expect(
      render({
        ...demoData,
        animated_dismiss: false,
      })
    ).resolves.toMatchSnapshot();
  });

  variants.forEach((variant) => {
    test(`${variant} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({
          ...demoData,
          variant: variant,
        })
      ).resolves.toMatchSnapshot();
    });
  });
});
