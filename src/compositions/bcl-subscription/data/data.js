import layout from "@openeuropa/bcl-base-templates/data/layout";
import {
  banner,
  sidebar,
} from "@openeuropa/bcl-base-templates/data/content-page";
import isChromatic from "chromatic/isChromatic";

import content from "@openeuropa/bcl-news/data/data--content";
import contentEmailForm from "@openeuropa/bcl-subscription/data/data--email-form";
import contentManageForm from "@openeuropa/bcl-subscription/data/data--manage-form";
import blockData from "@openeuropa/bcl-subscription-block/data";
import modalData from "@openeuropa/bcl-subscription/data/data--modal";

const { getDummyText } = require("@openeuropa/bcl-data-utils");

const chromatic = process.env.STORYBOOK_ENV;

const header =
  layout[`header_${process.env.STORYBOOK_THEME}`] || layout.headerSimple;

if (isChromatic() || chromatic) {
  banner.image.classes = banner.image.classes
    ? `${banner.image.classes} chromatic-ignore`
    : "chromatic-ignore";
}

const demoData = {
  content_type: "subscription",
  title: "Subscription",
  header,
  footer: layout.footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  sidebar,
  subscription: blockData,
  modal: modalData,
  banner: {
    ...banner,
    action_bar: `
    <div class="d-flex justify-content-end mt-2 align-items-center">
      <button class="me-3 btn btn-outline-primary btn-md" type="button"><svg class="me-2-5 bi icon--fluid"><use xlink:href="/icons.svg#printer-fill"></use></svg>Print</button>
      <button data-bs-toggle="modal" data-bs-target="#subscribeModal" class="btn btn-outline-primary btn-md" type="button"><svg class="me-2-5 bi icon--fluid"><use xlink:href="/icons.svg#envelope-fill"></use></svg>Subscribe</button>
    </div>`,
  },
  content,
};

const demoDataEmailForm = {
  content_type: "subscription",
  title: "Subscription",
  header,
  footer: layout.footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  banner: {
    title: "Manage your subscriptions",
    background: "gray",
    content: getDummyText(4, true),
  },
  ...contentEmailForm,
};

const demoDataEmailConfirmationForm = {
  content_type: "subscription",
  title: "Subscription",
  header,
  footer: layout.footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  banner,
  messages: [
    {
      message:
        "<p class='mb-3'>To confirm your subscription, please click on the confirmation link sent to your e-mail address.</p><p>It is possible to unsubscribe from the list at any time by clicking on the unsubscribe me link included in the email.</p>",
      heading: "A confirmation email has been sent to your email address. ",
      icon_path: "/icons.svg",
      variant: "warning",
    },
  ],
};

const demoDataEmailConfirmedForm = {
  content_type: "subscription",
  title: "Subscription",
  header,
  footer: layout.footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  banner,
  messages: [
    {
      heading: "Your email has been confirmed!",
      icon_path: "/icons.svg",
      variant: "success",
    },
  ],
};

const demoDataManageForm = {
  content_type: "subscription",
  title: "Subscription",
  header,
  footer: layout.footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  landing: true,
  banner: {
    title: "Manage your subscriptions",
    background: "gray",
    content: getDummyText(4, true),
  },
  ...contentManageForm,
};

export {
  demoData,
  demoDataEmailForm,
  demoDataEmailConfirmationForm,
  demoDataEmailConfirmedForm,
  demoDataManageForm,
};
