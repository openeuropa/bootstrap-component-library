import demoData from "@openeuropa/bcl-user-edit/dataUserEdit.js";
import userEdit from "@openeuropa/bcl-user-edit/user-edit.html.twig";

export default {
  title: "Compositions/Users/Edit",
};

export const Default = () => userEdit(demoData);
