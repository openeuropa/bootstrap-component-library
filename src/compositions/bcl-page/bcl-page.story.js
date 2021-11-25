import { initScrollspy } from "@openeuropa/bcl-story-utils";
import { withDesign } from "storybook-addon-designs";
import header from "@openeuropa/bcl-data-header/data--simple";
import listing from "@openeuropa/bcl-page/data/data_listing.js";
import listingDefault from "@openeuropa/bcl-page/data/data-listing--default.js";
import footer from "@openeuropa/bcl-data-footer/data";
import sidebar from "@openeuropa/bcl-inpage-navigation/data--simple.js";
import blockquote from "@openeuropa/bcl-data-blockquote/data.js";
import banner from "@openeuropa/bcl-content-banner/data/data.js";
import featuredItem from "@openeuropa/bcl-featured-media/dataFeaturedItem.js";
import accordion from "@openeuropa/bcl-data-accordion/data.js";
import timeline from "@openeuropa/bcl-timeline/dataDefault.js";
import simpleBanner from "@openeuropa/bcl-content-banner/data/data--simple.js";
import pageBanner from "@openeuropa/bcl-banner/dataImage.js";
import file from "@openeuropa/bcl-file/data.js";
import fileThumbnail from "@openeuropa/bcl-file/dataCard.js";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";
import page from "@openeuropa/bcl-page/page.html.twig";
import drupalAttribute from "drupal-attribute";

const files = [file, file];
const filesThumbnail = [fileThumbnail, fileThumbnail];

delete banner.service_buttons;
delete featuredItem.title;

const baseData = {
  content_type: "page",
  header: header,
  footer: footer,
  sidebar: sidebar,
  with_banner: true,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
};

const demoData = {
  ...baseData,
  featured_item: featuredItem,
  blockquote: blockquote,
  page_banner: pageBanner,
  banner: banner,
  files: files,
};

const demoData1 = {
  ...baseData,
  banner: simpleBanner,
  listing: listing,
  files: files,
  listing: listing,
  accordion: {
    ...accordion,
    attributes: new drupalAttribute().addClass(["pb-4"]),
  },
};

const demoData2 = {
  ...baseData,
  banner: {
    ...simpleBanner,
    background: "gray",
  },
  listing: listingDefault,
  files: filesThumbnail,
  timeline: timeline,
};

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
    if (data.banner && data.banner.service_buttons) {
      data.banner.service_buttons.forEach((btn) => {
        btn.icon.path = defaultSprite;
      });
    }
    data.footer.attributes.addClass("mt-4-5");
  }

  if (data.files) {
    data.files.forEach((file, i) => {
      file.attributes = file.attributes.addClass("mb-4");
      file.icon_path = defaultSprite;
      file.translation.label.icon.path = defaultSprite;
    });
  }

  return data;
};

export default {
  title: "Content types/Page",
  decorators: [withDesign, initScrollspy],
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true,
    },
    design: [
      {
        name: "Mockup - Page (desktop)",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=3962%3A141999",
      },
      {
        name: "Mockup -Page (mobile)",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=3962%3A142115",
      },
    ],
  },
};

export const FullPage = () => page(correctPaths({ ...demoData }));

FullPage.storyName = "Full article (example 1)";

export const FullPage1 = () => page(correctPaths({ ...demoData1 }));

FullPage1.storyName = "Full article (example 2)";

export const FullPage2 = () => page(correctPaths({ ...demoData2 }));

FullPage2.storyName = "Full article (example 3)";
