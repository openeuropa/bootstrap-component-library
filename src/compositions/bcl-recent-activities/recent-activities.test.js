import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoData from "@openeuropa/bcl-recent-activities/data";

expect.extend(toHaveNoViolations);

const template = "@oe-bcl/bcl-recent-activities/recent-activities.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Recent Activities block", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoData, true))
    ).toHaveNoViolations();
  });
});
