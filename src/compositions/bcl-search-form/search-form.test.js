import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoData from "@openeuropa/bcl-search-form/data/data--search";
import demoDataSubmittable from "@openeuropa/bcl-search-form/data/data--search-submit";

const template = "@oe-bcl/bcl-search-form/search-form.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

expect.extend(toHaveNoViolations);

describe("OE - Search Form", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`with submit renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoDataSubmittable)).resolves.toMatchSnapshot();
  });

  test(`as pill renders correctly`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, pill: true }),
    ).resolves.toMatchSnapshot();
  });

  test(`with icon renders correctly`, () => {
    expect.assertions(1);

    return expect(
      render({
        ...demoData,
        icon: {
          name: "mouse",
          transformation: "rotate-90",
          path: "/icons.svg",
        },
      }),
    ).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(
        await renderTwigFileAsHtml(template, demoDataSubmittable, true),
      ),
    ).toHaveNoViolations();
  });
});
