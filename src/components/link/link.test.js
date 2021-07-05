import { merge, renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-data-link/data";
import toggleDemoData from "@openeuropa/bcl-data-link/toggleData";
import tooltipDemoData from "@openeuropa/bcl-data-link/tooltipData";
import { getVariants } from "@openeuropa/bcl-story-utils";

const template = "@oe-bcl/link/link.html.twig";
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
