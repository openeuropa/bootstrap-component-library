import drupalAttribute from "drupal-attribute";
import { getDummyText } from "@openeuropa/bcl-data-utils";

const data = {
  label: "I am a link",
  path: "#collapseExample",
  attributes: new drupalAttribute()
    .setAttribute("aria-controls", "collapseExample")
    .setAttribute("aria-expanded", "false")
    .setAttribute("data-bs-toggle", "collapse")
    .setAttribute("role", "button"),
  collapse_text: getDummyText(4),
};

export default data;
