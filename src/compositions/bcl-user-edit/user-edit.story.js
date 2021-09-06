import demoData from "@openeuropa/bcl-user-edit/dataUserEdit.js";
import userEdit from "@openeuropa/bcl-user-edit/user-edit.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

export default {
  title: "Compositions/Users/Edit",
};

const correctPaths = (data) => {
  data.data.navigation.profileBack.icon.path = defaultSprite;

  return data;
};

export const Default = () => userEdit(correctPaths(demoData));
