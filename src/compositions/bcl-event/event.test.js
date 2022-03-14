import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import header from "@openeuropa/bcl-data-header/data";
import footer from "@openeuropa/bcl-data-footer/data";
import filterButton from "@openeuropa/bcl-data-button/data--filter";
import pagination from "@openeuropa/bcl-data-pagination/data--listing";
import sortSelect from "@openeuropa/bcl-data-select/data--sort";
import drupalAttribute from "drupal-attribute";

import dataListing from "@openeuropa/bcl-event/data/data-listing.js";
import dataPage from "@openeuropa/bcl-event/data/data-page.js";
import listing from "@openeuropa/bcl-listing/data/listing--date.js";
import file from "@openeuropa/bcl-file/data.js";

delete file.translation;
file.attributes = new drupalAttribute().addClass(["mb-3-5"]);
const files = [file, file];

const baseData = {
  content_type: "event",
  header: header,
  footer: {
    ...footer,
    attributes: new drupalAttribute().addClass("mt-4"),
  },
  with_banner: true,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
};

const demoData = {
  ...baseData,
  ...dataPage,
  files: files,
};

const demoListing = {
  ...demoData,
  ...dataListing,
  pagination: pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
  listing: {
    ...listing,
    variant: "default-1-col",
    link: false,
    content: "",
  },
};

const template = "@oe-bcl/bcl-event/event.html.twig";
const listingTemplate = "@oe-bcl/bcl-base-templates/listing-page.html.twig";

const render = (params) => renderTwigFileAsNode(template, params, true);
const renderListing = (params) => renderTwigFileAsNode(template, params, true);

describe("OE - event", () => {
  test("Event page renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test("Event listing renders correctly", () => {
    expect.assertions(1);

    return expect(renderListing(demoListing)).resolves.toMatchSnapshot();
  });
});
