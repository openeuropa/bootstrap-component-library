import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import layout from "@openeuropa/bcl-base-templates/data/layout";
import {
  banner,
  sidebar,
} from "@openeuropa/bcl-base-templates/data/content-page";

import content from "@openeuropa/bcl-news/data/data--content";
import blockData from "@openeuropa/bcl-subscription-block/data";

import subscriptionPageData from "@openeuropa/bcl-subscription/data/data";
import modalData from "@openeuropa/bcl-subscription/data/data--modal";

const demoData = {
  content_type: "subscription",
  page_title: "Subscription",
  header: layout.headerSimple,
  footer: layout.footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  sidebar: sidebar,
  subscription: blockData,
  modal: modalData,
  banner: {
    ...banner,
    action_bar: subscriptionPageData,
  },
  content: content,
};

const template = "@oe-bcl/bcl-subscription/subscription.html.twig";

const render = (params) => renderTwigFileAsNode(template, params, true);

describe("OE - Subscription", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});
