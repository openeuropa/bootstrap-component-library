import demoData from "@openeuropa/bcl-user-listing/dataUserListing.js";
import userListing from "@openeuropa/bcl-user-listing/user-listing.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

export default {
  title: "Compositions/Users/Listing",
};

const scriptInit = (story) => {
  const demo = story();
  return `
    <script>
      var badges = document.querySelectorAll(".filter-badges .badge");
      badges.forEach(element => {
        var close = element.getElementsByTagName('span')[0];
        close.addEventListener('click', event => {
          close.parentElement.remove();
        })
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
