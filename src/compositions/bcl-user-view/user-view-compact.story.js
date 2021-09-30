import demoDataCompact from "@openeuropa/bcl-user-view/dataUserViewCompact.js";
import userViewCompact from "@openeuropa/bcl-user-view/user-view-compact.html.twig";

export default {
  title: "Compositions/Users/View",
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=1126%3A38732",
      },
    ],
  },
};

export const Compact = () => userViewCompact(demoDataCompact);
