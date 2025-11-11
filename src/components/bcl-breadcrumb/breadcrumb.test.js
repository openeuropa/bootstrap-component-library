import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";
import demoData from "@openeuropa/bcl-data-breadcrumb/data";

expect.extend(toHaveNoViolations);

const template = "@oe-bcl/bcl-breadcrumb/breadcrumb.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Breadcrumb", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(await renderTwigFileAsHtml(template, demoData)),
    ).toHaveNoViolations();
  });
});
