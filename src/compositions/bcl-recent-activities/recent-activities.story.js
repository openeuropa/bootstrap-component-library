import { correctPaths } from "@openeuropa/bcl-story-utils";

import demoData from "@openeuropa/bcl-recent-activities/data.js";
import recentActivities from "@openeuropa/bcl-recent-activities/recent-activities.html.twig";

export default {
  title: "Compositions/Recent Activities",
  parameters: {
    badges: ["deprecated"],
    controls: { disable: true },
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=1021%3A26193",
      },
    ],
  },
};

export const Default = () => recentActivities(correctPaths(demoData));
