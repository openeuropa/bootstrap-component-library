import demoData from "@openeuropa/bcl-user-edit/dataUserEdit.js";
import headerData from "@openeuropa/bcl-data-header/data.js";
import userEdit from "@openeuropa/bcl-user-edit/user-edit.html.twig";
import { correctPaths } from "@openeuropa/bcl-story-utils";

demoData.data.header = headerData;

export default {
  title: "Compositions/Users/Edit",
  parameters: {
    controls: { disable: true },
    layout: "fullscreen",
    design: [
      {
        name: "Mockup - Profile Information",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=1126%3A39536",
      },
      {
        name: "Mockup - Privacy Settings",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=1142%3A34290",
      },
    ],
  },
};

export const Default = () => userEdit(correctPaths(demoData));
