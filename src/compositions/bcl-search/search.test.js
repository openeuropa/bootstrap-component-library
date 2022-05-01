import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import layout from "@openeuropa/bcl-base-templates/data/layout";
import {
  filterButton,
  pagination,
  sortSelect,
} from "@openeuropa/bcl-base-templates/data/listing-page";

import demoData from "@openeuropa/bcl-search/data/data--search";

const template = "@oe-bcl/bcl-search/search.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

const dataListing = {
  content_type: "search",
  title: "Search results",
  header: layout.headerNoForm,
  footer: layout.footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
  pagination: pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
  ...demoData,
};

describe("OE - Search", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(dataListing)).resolves.toMatchSnapshot();
  });
});
