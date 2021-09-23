import demoData from "@openeuropa/bcl-user-view/dataUserView.js";
import headerData from "@openeuropa/bcl-data-header/data.js";
import userView from "@openeuropa/bcl-user-view/user-view.html.twig";

demoData.data.header = headerData;

export default {
  title: "Compositions/Users/View",
  parameters: {
    layout: 'fullscreen',
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
