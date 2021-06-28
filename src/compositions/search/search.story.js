import demoData from "./dataSearch.js";
import search from "./search.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

export default {
  title: "Compositions/Search",
};

const correctPaths = (data) => {
  data.data.filterButton.icon.path = defaultSprite;
  return data;
};

export const Default = () => search(correctPaths(demoData));
