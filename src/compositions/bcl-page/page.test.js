import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import { file } from "@openeuropa/bcl-base-templates/data/content-page";
import {
  headerSimple,
  footer,
} from "@openeuropa/bcl-base-templates/data/layout";

import listing from "@openeuropa/bcl-page/data/data--listing";
import sidebar from "@openeuropa/bcl-page/data/data--sidebar";

file.translation.id = "language-dropdown";

const files = [file, file];

const demoData = {
  content_type: "page",
  header: headerSimple,
  footer: footer,
  sidebar: sidebar,
  with_banner: true,
  with_header: true,
  with_footer: true,
  listing: listing,
  with_sidebar: true,
  files: files,
};

const template = "@oe-bcl/bcl-page/page.html.twig";

const render = (params) => renderTwigFileAsNode(template, params, true);

describe("OE - Page", () => {
  test("Page renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});
