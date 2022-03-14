import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import header from "@openeuropa/bcl-data-header/data";
import footer from "@openeuropa/bcl-data-footer/data";
import filterButton from "@openeuropa/bcl-data-button/data--filter";
import pagination from "@openeuropa/bcl-data-pagination/data--listing";
import sortSelect from "@openeuropa/bcl-data-select/data--sort";
import dataProfiles from "@openeuropa/bcl-listing/data/listing--profiles";

import demoDataListing from "@openeuropa/bcl-user/data/data-user-listing.js";
import demoDataEdit from "@openeuropa/bcl-user/data/data-user-edit.js";
import demoDataView from "@openeuropa/bcl-user/data/data-user-view.js";
import demoDataViewCompact from "@openeuropa/bcl-user/data/data-user-view-compact";

const templateList = "@oe-bcl/bcl-base-templates/listing-page.html.twig";
const renderList = (params) => renderTwigFileAsNode(templateList, params);

const templateEdit = "@oe-bcl/bcl-user/user-edit.html.twig";
const renderEdit = (params) => renderTwigFileAsNode(templateEdit, params);

const templateView = "@oe-bcl/bcl-user/user-view.html.twig";
const renderView = (params) => renderTwigFileAsNode(templateView, params);

const templateViewCompact = "@oe-bcl/bcl-user/user-view-compact.html.twig";
const renderViewCompact = (params) =>
  renderTwigFileAsNode(templateViewCompact, params);

const data = {
  with_header: true,
  with_footer: true,
  header: header,
  footer: footer,
  content_type: "users",
};

const dataListing = {
  page_title: "users",
  with_banner: true,
  with_sidebar: true,
  ...demoDataListing,
  ...data,
  listing: dataProfiles,
  pagination: pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
};

const dataEdit = {
  content_type: "users",
  ...demoDataEdit,
  ...data,
};

const dataView = {
  content_type: "users",
  ...demoDataView,
  ...data,
};

describe("OE - User", () => {
  test(`-list renders correctly`, () => {
    expect.assertions(1);

    return expect(renderList(dataListing)).resolves.toMatchSnapshot();
  });
  test(`-edit renders correctly`, () => {
    expect.assertions(1);

    return expect(renderEdit(dataEdit)).resolves.toMatchSnapshot();
  });
  test(`-view renders correctly`, () => {
    expect.assertions(1);

    return expect(renderView(dataView)).resolves.toMatchSnapshot();
  });
  test(`-view-compact renders correctly`, () => {
    expect.assertions(1);

    return expect(
      renderViewCompact(demoDataViewCompact)
    ).resolves.toMatchSnapshot();
  });
});
