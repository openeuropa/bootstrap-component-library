import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import {
  headerSimple,
  footer,
} from "@openeuropa/bcl-base-templates/data/layout";
import demoData from "@openeuropa/bcl-landing-page/data";

const template = "@oe-bcl/bcl-landing-page/landing-page.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

const dataLanding = {
  content_type: "landing-page",
  header: headerSimple,
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
