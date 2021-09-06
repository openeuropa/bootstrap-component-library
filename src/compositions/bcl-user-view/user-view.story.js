import demoData from "@openeuropa/bcl-user-view/dataUserView.js";
import userView from "@openeuropa/bcl-user-view/user-view.html.twig";

export default {
  title: "Compositions/Users/View",
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=1126%3A38732",
      },
    ],
  },
};

export const Default = () => userView(demoData);
