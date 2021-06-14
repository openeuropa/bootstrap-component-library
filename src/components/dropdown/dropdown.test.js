import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-data-dropdown/data";

const template = "@oe-bcl/dropdown/dropdown.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - dropdown", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
  test("renders correctly with dark mode", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, dark: true })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with trigger link", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, link: true })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with direction dropup", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, direction: "dropup" })
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with alignment end", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, alignment: "dropdown-menu-sm-end" })
    ).resolves.toMatchSnapshot();
  });
});
