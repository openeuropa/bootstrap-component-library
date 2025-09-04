import { correctPaths } from "@openeuropa/bcl-story-utils";

import demoData from "@openeuropa/bcl-recent-activities/data.js";
import recentActivities from "@openeuropa/bcl-recent-activities/recent-activities.html.twig";

export default {
  title: "Compositions/Recent Activities",
  parameters: {
    badges: ["deprecated"],
    controls: { disable: true },
  },
};

export const Default = () => recentActivities(correctPaths(demoData));
