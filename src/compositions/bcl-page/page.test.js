import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";
import { demoData } from "@openeuropa/bcl-page/data/data";

const template = "@oe-bcl/bcl-page/page.html.twig";

const render = (params) => renderTwigFileAsNode(template, params, true);

expect.extend(toHaveNoViolations);

describe("OE - Page", () => {
  test("Page renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoData)),
    ).toHaveNoViolations();
  }, 10000);
});
