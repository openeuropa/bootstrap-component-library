import demoData from "@openeuropa/bcl-user-listing/data-user-listing.js";
import headerData from "@openeuropa/bcl-data-header/data.js";
import footerData from "@openeuropa/bcl-data-footer/data.js";
import userListing from "@openeuropa/bcl-user-listing/user-listing.html.twig";
import { correctPaths } from "@openeuropa/bcl-story-utils";

demoData.data.header = headerData;
demoData.data.footer = footerData;

export default {
  title: "Compositions/Users/Listing",
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=1122%3A33486",
      },
    ],
  },
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

export const Default = () => userListing(correctPaths(demoData));

Default.decorators = [scriptInit];
