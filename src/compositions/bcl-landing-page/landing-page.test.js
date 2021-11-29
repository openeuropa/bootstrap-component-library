import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import header from "@openeuropa/bcl-data-header/data--simple";
import footer from "@openeuropa/bcl-data-footer/data";
import demoData from "@openeuropa/bcl-landing-page/data";

const template = "@oe-bcl/bcl-landing-page/landing-page.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

const dataLanding = {
  content_type: "landing-page",
  header: header,
  footer: footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  ...demoData,
};

describe("OE - Landing page", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(dataLanding)).resolves.toMatchSnapshot();
  });
});
