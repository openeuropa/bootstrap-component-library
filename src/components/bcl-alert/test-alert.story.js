import demoData from "@openeuropa/bcl-data-alert/data.js";
import alert from "@openeuropa/bcl-alert/alert.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

export default {
  title: "Components/Alert",
};

export const WithoutIcon = () => alert({ ...demoData, icon_path: "" });

WithoutIcon.storyName = "Without icon";

export const WithoutHeading = () =>
  alert({ ...demoData, icon_path: defaultSprite, heading: "" });

WithoutHeading.storyName = "Without heading";
