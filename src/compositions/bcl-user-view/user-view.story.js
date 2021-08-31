import demoData from "@openeuropa/bcl-user-view/dataUserView.js";
import userView from "@openeuropa/bcl-user-view/user-view.html.twig";

export default {
  title: "Compositions/Users/View",
};

export const Default = () => userView(demoData);
