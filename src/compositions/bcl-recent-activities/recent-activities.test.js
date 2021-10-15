import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoData from "@openeuropa/bcl-recent-activities/data";

const template = "@oe-bcl/bcl-recent-activities/recent-activities.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Recent Activities block", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});
