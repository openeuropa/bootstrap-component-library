import demoData from "@openeuropa/bcl-user-listing/dataUserListing.js";
import userListing from "@openeuropa/bcl-user-listing/user-listing.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

export default {
  title: "Compositions/Users/Listing",
};

const correctPaths = (data) => {
  data.data.filter_button.icon.path = defaultSprite;
  return data;
};

export const Default = () => userListing(correctPaths(demoData));
