import { merge, renderTwigFileAsNode } from "@oe/test-utils";
import demoData from "@oe/data-link/data";
import toggleDemoData from "@oe/data-link/toggleData";
import tooltipDemoData from "@oe/data-link/tooltipData";
import { getVariants } from "@oe/story-utils";

const template = "@oe/link/link.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);
const variants = getVariants();

describe("OE - Link", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
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

    return expect(render(toggleDemoData)).resolves.toMatchSnapshot();
  });

  test(`with tooltip renders correctly`, () => {
    expect.assertions(1);

    return expect(render(tooltipDemoData)).resolves.toMatchSnapshot();
  });

  test("with icon renders correctly", () => {
    expect.assertions(1);

    return expect(
      render({
        ...demoData,
        icon: {
          name: "mouse",
          transformation: "rotate-90",
          path: "bootstrap-icons.svg",
        },
      })
    ).resolves.toMatchSnapshot();
  });
});
