import { correctPaths } from "@openeuropa/bcl-story-utils";

import demoData from "@openeuropa/bcl-data-pagination/data-v2.js";
import pagination from "@openeuropa/bcl-pagination-v2/pagination.html.twig";

export default {
  title: "Components/Pagination V2",
  parameters: {
    badges: ["deprecated"],
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=42%3A58",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.2/components/pagination/",
      },
    ],
  },
};

export const Default = () => pagination(correctPaths(demoData));
