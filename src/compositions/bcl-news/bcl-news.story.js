import { withDesign } from "storybook-addon-designs";
import header from "@openeuropa/bcl-data-header/data--simple";
import dataListing from "@openeuropa/bcl-news/data/data_listing.js";
import footer from "@openeuropa/bcl-data-footer/data";
import content from "@openeuropa/bcl-news/data/data_content.js";
import banner from "@openeuropa/bcl-content-banner/data/data.js";
import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";
import news from "@openeuropa/bcl-base-templates/content-type.html.twig";
import drupalAttribute from "drupal-attribute";
import { correctPaths } from "@openeuropa/bcl-story-utils";

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

const scriptInit = (story) => {
  const demo = story();
  return `
    <script>
      var badges = document.querySelectorAll(".badge");
      badges.forEach(element => {
        var close = element.getElementsByTagName('span')[0];
        if (close) {
          close.addEventListener('click', event => {
            close.parentElement.remove();
          })
        }
      });
    </script>
  ${demo}`;
};

export default {
  title: "Compositions/News",
  decorators: [withDesign],
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true,
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

export const FullPage = () => news(correctPaths(demoData, "default"));

FullPage.storyName = "News page";

export const Listing = () => listingPage(correctPaths(demoListing, "listing"));

Listing.storyName = "News listing";
Listing.decorators = [scriptInit];
