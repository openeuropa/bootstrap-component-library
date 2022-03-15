import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-description-list/data/data";
import demoDataHorizontal from "@openeuropa/bcl-description-list/data/data--horizontal";
const template = "@oe-bcl/bcl-description-list/description-list.html.twig";

const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Description List", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);
    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`horizontal renders correctly`, () => {
    expect.assertions(1);
    return expect(render(demoDataHorizontal)).resolves.toMatchSnapshot();
  });
});

describe("OE - Description List with title", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoData,
        title: "Description list test title",
        title_tag: "h6",
      })
    ).resolves.toMatchSnapshot();
  });

  test(`horizontal renders correctly`, () => {
    expect.assertions(1);
    return expect(
      render({
        ...demoDataHorizontal,
        title: "Description list test title",
        title_tag: "h6",
      })
    ).resolves.toMatchSnapshot();
  });
});
