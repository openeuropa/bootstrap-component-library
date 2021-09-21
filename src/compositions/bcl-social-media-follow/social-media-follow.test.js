import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoData from "@openeuropa/bcl-social-media-follow/dataSocialMediaFollow";

const template =
  "@oe-bcl/bcl-social-media-follow/social-media-follow.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Social Media Follow", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
  test("renders correctly with horizontal", () => {
    expect.assertions(1);
    return expect(
      render({ ...demoData, direction: "horizontal" })
    ).resolves.toMatchSnapshot();
  });
  test("renders correctly with transparent background", () => {
    expect.assertions(1);
    return expect(
      render({ ...demoData, variant: "transparent" })
    ).resolves.toMatchSnapshot();
  });
});
