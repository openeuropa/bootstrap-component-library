import demoData from "@openeuropa/bcl-user-listing/dataUserListing.js";
import headerData from "@openeuropa/bcl-data-header/data.js";
import userListing from "@openeuropa/bcl-user-listing/user-listing.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

demoData.data.header = headerData;

export default {
  title: "Compositions/Users/Listing",
  parameters: {
    layout: "fullscreen",
    design: [
      {
        name: "Wireframe",
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
        var close = element.getElementsByTagName('a')[0];
        if (close) {
          close.addEventListener('click', event => {
            close.parentElement.remove();
          })
        }
      });
    </script>
  ${demo}`;
};

const correctPaths = (data) => {
  data.data.filter_button.icon.path = defaultSprite;
  data.data.badges.forEach((badge) => {
    badge.icons_path = defaultSprite;
  });
  return data;
};

export const Default = () => userListing(correctPaths(demoData));
Default.decorators = [scriptInit];
