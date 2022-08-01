import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import dataDefault from "@openeuropa/bcl-gallery/data/data";

const template = "@oe-bcl/bcl-gallery/gallery.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Gallery", () => {
  test("default renders correctly", () => {
    expect.assertions(1);
    return expect(render(dataDefault)).resolves.toMatchSnapshot();
  });

  test("renders correctly with title and link", () => {
    expect.assertions(1);
    return expect(
      render({ ...dataDefault, counter: 4 })
    ).resolves.toMatchSnapshot();
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
