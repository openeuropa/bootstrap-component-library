import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import dataLanding from "@openeuropa/bcl-landing-page/data/data";

const template = "@oe-bcl/bcl-landing-page/landing-page.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

expect.extend(toHaveNoViolations);

describe("OE - Landing page", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(dataLanding)).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, dataLanding))
    ).toHaveNoViolations();
  });
});
