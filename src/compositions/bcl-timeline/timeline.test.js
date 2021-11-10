import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import dataDefault from "@openeuropa/bcl-timeline/dataDefault.js";

const template = "@oe-bcl/bcl-timeline/timeline.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Timeline", () => {
  test("default renders correctly", () => {
    expect.assertions(1);

    return expect(render(dataDefault)).resolves.toMatchSnapshot();
  });
});
