import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import dataDefault from "@openeuropa/bcl-timeline/data";

const template = "@oe-bcl/bcl-timeline/timeline.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Timeline", () => {
  test("default renders correctly", () => {
    expect.assertions(1);
    return expect(render(dataDefault)).resolves.toMatchSnapshot();
  });

  test("default renders correctly with title and link", () => {
    expect.assertions(1);
    return expect(
      render({
        ...dataDefault,
        title: "Timeline test title",
        title_tag: "h6",
        title_link: {
          path: "/example.html",
          label: "Link label",
        },
      })
    ).resolves.toMatchSnapshot();
  });
});
