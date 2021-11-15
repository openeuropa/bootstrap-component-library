import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-file/data.js";
const template = "@oe-bcl/bcl-file/file.html.twig";

const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - File", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});
