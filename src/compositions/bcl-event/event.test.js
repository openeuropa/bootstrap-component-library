import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import {
  filterButton,
  pagination,
  sortSelect,
  listingDate,
} from "@openeuropa/bcl-base-templates/data/listing-page";
import {
  file,
  banner,
  pageTitleBanner,
} from "@openeuropa/bcl-base-templates/data/content-page";
import {
  headerSimple,
  footer,
} from "@openeuropa/bcl-base-templates/data/layout";
import drupalAttribute from "drupal-attribute";

import dataListing from "@openeuropa/bcl-event/data/data--listing";
import dataPage from "@openeuropa/bcl-event/data/data--page";

delete file.translation;
file.attributes = new drupalAttribute().addClass(["mb-3-5"]);
const files = [file, file];

const baseData = {
  content_type: "event",
  header: headerSimple,
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
  banner: banner,
  files: files,
};

const demoListing = {
  ...demoData,
  ...dataListing,
  pagination: pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
  listing: {
    ...listingDate,
    variant: "default-1-col",
    link: false,
    content: "",
  },
  banner: {
    ...pageTitleBanner,
    title: {
      content: "Event",
      tag: "h1",
    },
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
