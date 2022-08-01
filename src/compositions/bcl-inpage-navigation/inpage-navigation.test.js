import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import dataDefault from "@openeuropa/bcl-inpage-navigation/data/data";

const template = "@oe-bcl/bcl-inpage-navigation/inpage-navigation.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Inpage navigation", () => {
  test("default renders correctly", () => {
    expect.assertions(1);

    return expect(render(dataDefault)).resolves.toMatchSnapshot();
  });

  test("renders correctly with title and link", () => {
    expect.assertions(1);
    return expect(
      render({
        ...dataDefault,
        title: "File test title",
        title_tag: "h6",
        title_link: {
          path: "/example.html",
          label: "Link label",
        },
      })
    ).resolves.toMatchSnapshot();
  });
});
