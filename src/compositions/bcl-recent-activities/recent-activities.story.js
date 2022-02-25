import demoData from "@openeuropa/bcl-recent-activities/data.js";
import recentActivities from "@openeuropa/bcl-recent-activities/recent-activities.html.twig";
import isChromatic from "chromatic/isChromatic";
import { correctPaths } from "@openeuropa/bcl-story-utils";

if (isChromatic()) {
  demoData.activities.forEach((item, i) => {
    item.image = `<img class='rounded-circle chromatic-ignore me-3-5' alt='recent-image-${i}' src='https://picsum.photos/50/50?random=${i}'>`;
  });
}

export default {
  title: "Compositions/Recent Activities",
  parameters: {
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
