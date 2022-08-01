import { correctPaths } from "@openeuropa/bcl-story-utils";

import demoData from "@openeuropa/bcl-data-alert/data.js";
import alert from "@openeuropa/bcl-alert/alert.html.twig";

const data = correctPaths(demoData);

export default {
  title: "Components/Alert",
};

export const WithoutIcon = () => alert({ ...data, icon_path: "" });

WithoutIcon.storyName = "Without icon";

export const WithoutHeading = () => alert({ ...data, heading: "" });

WithoutHeading.storyName = "Without heading";
