import layout from "@openeuropa/bcl-base-templates/data/layout";
import {
  banner,
  sidebar,
} from "@openeuropa/bcl-base-templates/data/content-page";
import isChromatic from "chromatic/isChromatic";

import content from "@openeuropa/bcl-news/data/data--content";
import blockData from "@openeuropa/bcl-subscription-block/data";
import modalData from "@openeuropa/bcl-subscription/data/data--modal";

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

export default demoData;
