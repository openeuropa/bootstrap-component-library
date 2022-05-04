import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoData from "@openeuropa/bcl-content-banner/data/data";
import demoLinksData from "@openeuropa/bcl-content-banner/data/data--links";

const template = "@oe-bcl/bcl-content-banner/content-banner.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Content banner", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test("renders correctly with a date block", () => {
    expect.assertions(1);

    return expect(
      render({
        ...demoData,
        image: {},
        date: {
          year: "2021",
          month: "Jan",
          day: "23",
          date_time: "2021-01-23",
        },
      })
    ).resolves.toMatchSnapshot();
  });

  test("with links renders correctly", () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, ...demoLinksData })
    ).resolves.toMatchSnapshot();
  });
});
