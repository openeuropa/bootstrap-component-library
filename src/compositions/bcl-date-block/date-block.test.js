import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoData from "@openeuropa/bcl-date-block/data/data";
import demoEndDateData from "@openeuropa/bcl-date-block/data/data--end-date";

const template = "@oe-bcl/bcl-date-block/date-block.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Date block", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test("with end date renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoEndDateData)).resolves.toMatchSnapshot();
  });
});
