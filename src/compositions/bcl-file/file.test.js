import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoData from "@openeuropa/bcl-file/data/data";
import demoCardData from "@openeuropa/bcl-file/data/data--card";

const template = "@oe-bcl/bcl-file/file.html.twig";

demoData.translation.id = "language-dropdown";
demoCardData.translation.id = "language-dropdown";

const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - File", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);
    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`renders correctly with title`, () => {
    expect.assertions(1);
    return expect(
      render({ ...demoData, title: "File test title", title_tag: "h6" })
    ).resolves.toMatchSnapshot();
  });
});

describe("OE - File Card", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);
    return expect(render(demoCardData)).resolves.toMatchSnapshot();
  });

  test(`renders correctly with title`, () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoCardData,
        title: "File card test title",
        title_tag: "h6",
      })
    ).resolves.toMatchSnapshot();
  });
});
