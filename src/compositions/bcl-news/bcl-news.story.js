import { withDesign } from "storybook-addon-designs";
import header from "@openeuropa/bcl-data-header/data--simple";
import dataListing from "@openeuropa/bcl-news/data/data_listing.js";
import footer from "@openeuropa/bcl-data-footer/data";
import content from "@openeuropa/bcl-news/data/data_content.js";
import banner from "@openeuropa/bcl-news/data/data_banner.js";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";
import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";
import news from "@openeuropa/bcl-news/news.html.twig";
import drupalAttribute from "drupal-attribute";
const feedback = `<div class="bg-lighter py-4 mt-md-4-5 mt-4 text-center">Feedback module here</div>`;
const share = `<div class="bg-gray-200 py-4 text-center">Share module here</div>`;

const baseData = {
  content_type: "news",
  header: header,
  footer: footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
};

const demoData = {
  ...baseData,
  banner: banner,
  content: content,
  feedback: feedback,
  share: share,
};

const demoListing = {
  ...baseData,
  ...dataListing,
  with_sidebar: true,
};

demoListing.footer.attributes.addClass("mt-3-5");

const correctPaths = (data) => {
  if (data.header.head.navigation) {
    data.header.head.navigation.items.forEach((item) => {
      if (item.icon) {
        item.icon.path = defaultSprite;
      }
    });
  }
  if (data.header.navbar) {
    data.header.navbar.form.submit.icon.path = defaultSprite;
  }
  if (data.breadcrumbs) {
    data.breadcrumbs.icons_path = defaultSprite;
  }
  if (data.filter_button) {
    data.filter_button.icon.path = defaultSprite;
  }
  if (data.badges) {
    data.badges.forEach((badge) => {
      badge.icons_path = defaultSprite;
    });
  }
  if (data.footer) {
    data.footer.rows.forEach((row) => {
      row.cols.forEach((col) => {
        if (col.items) {
          col.items.forEach((item) => {
            if (item.type == "links") {
              item.links.forEach((link) => {
                if (link.icon) {
                  link.icon.path = defaultSprite;
                }
              });
            }
          });
        }
      });
    });
  }

  return data;
};

export default {
  title: "Compositions/News",
  decorators: [withDesign],
  parameters: {
    layout: "fullscreen",
    controls: {
      disabled: true,
    },
    design: [
      {
        name: "Mockup - News (desktop)",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=3504%3A123262",
      },
      {
        name: "Mockup - News (mobile)",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=3378%3A107467",
      },
    ],
  },
};

export const FullPage = () => news(correctPaths(demoData));

FullPage.storyName = "News page";

export const Listing = () => listingPage(correctPaths(demoListing));

Listing.storyName = "News listing";
Listing.decorators = [initScript];
