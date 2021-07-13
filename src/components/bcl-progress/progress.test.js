import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-data-progress/data";

const template = "@oe-bcl/bcl-progress/progress.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Progress", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`renders correctly with striped style`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, striped: true })
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with striped and animated style`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, striped: true, animated: true })
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with variant danger`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, variant: "danger" })
    ).resolves.toMatchSnapshot();
  });
});
