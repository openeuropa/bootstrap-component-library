import demoData from "@openeuropa/bcl-links-block/dataLinksBlock.js";
import linksBlock from "@openeuropa/bcl-links-block/links-block.html.twig";

export default {
  title: "Compositions/Links Block",
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

export const LinksBlock = () => linksBlock(demoData);
