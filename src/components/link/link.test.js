import { merge, renderTwigFileAsNode } from "@oe/test-utils";
import demoData from "@oe/data-link/data";
import { getVariants } from "@oe/story-utils";

const template = "@oe/link/link.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);
const variants = getVariants();

describe("OE - Link", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(
      render(demoData)
    ).resolves.toMatchSnapshot();
  });

  variants.forEach((variant) => {
    test(`${variant} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, variant: variant })
      ).resolves.toMatchSnapshot();
    });
  });

  test(`as toggle renders correctly`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, toggle_target: 'collapseElement' })
    ).resolves.toMatchSnapshot();
  });
});
