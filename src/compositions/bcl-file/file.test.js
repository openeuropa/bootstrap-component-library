import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-file/data.js";
import demoCardData from "@openeuropa/bcl-file/dataCard";
const template = "@oe-bcl/bcl-file/file.html.twig";

const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - File", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});

describe("OE - File Card", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoCardData)).resolves.toMatchSnapshot();
  });
});
