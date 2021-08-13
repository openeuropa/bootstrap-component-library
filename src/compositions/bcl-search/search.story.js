import demoData from "@openeuropa/bcl-search/dataSearch.js";
import search from "@openeuropa/bcl-search/search.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

export default {
  title: "Compositions/Search",
};

const correctPaths = (data) => {
  data.data.filter_button.icon.path = defaultSprite;
  return data;
};

export const Default = () => search(correctPaths(demoData));
