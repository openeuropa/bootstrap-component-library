import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import header from "@openeuropa/bcl-data-header/data--simple";
import footer from "@openeuropa/bcl-data-footer/data";
import content from "@openeuropa/bcl-news/data/data_content.js";
import banner from "@openeuropa/bcl-content-banner/data/data.js";
import subscriptionData from "@openeuropa/bcl-subscription/data/data.js";
import modalData from "@openeuropa/bcl-subscription/data/data_modal.js";
import sidebar from "@openeuropa/bcl-inpage-navigation/data--simple";
import drupalAttribute from "drupal-attribute";

const demoData = {
  content_type: "subscription",
  page_title: "Subscription",
  header: header,
  footer: {
    ...footer,
    attributes: new drupalAttribute().addClass("mt-4"),
  },
  with_banner: true,
  with_header: true,
  with_footer: true,
  sidebar: sidebar,
  subscription: subscriptionData,
  modal: modalData,
  banner: {
    ...banner,
    service_buttons: subscriptionData.service_buttons,
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
