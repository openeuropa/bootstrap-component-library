import { merge, renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-data-alert/data";
import { getVariants } from "@openeuropa/bcl-story-utils";

const template = "@oe-bcl/alert/alert.html.twig";
const render = (params, reset) => renderTwigFileAsNode(template, params, reset);
const variants = getVariants();

describe("OE - Alert", () => {
  test(`renders correctly without close button`, () => {
    expect.assertions(1);

    return expect(
      render(
        {
          ...demoData,
          dismissible: false,
        },
        true
      )
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly without animation for the close button`, () => {
    expect.assertions(1);

    return expect(
      render(
        {
          ...demoData,
          animated_dismiss: false,
        },
        true
      )
    ).resolves.toMatchSnapshot();
  });

  variants.forEach((variant) => {
    test(`${variant} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render(
          {
            ...demoData,
            variant: variant,
          },
          true
        )
      ).resolves.toMatchSnapshot();
    });
  });
});
