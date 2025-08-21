import drupalAttribute from "drupal-attribute";
import { getDummyText } from "@openeuropa/bcl-data-utils";

const data = {
  label: "Button with collapse",
  attributes: new drupalAttribute()
    .setAttribute("data-bs-toggle", "collapse")
    .setAttribute("autocomplete", "off")
    .setAttribute("aria-expanded", "false")
    .setAttribute("aria-controls", "collapseExample")
    .setAttribute("data-bs-target", "#collapseExample"),
  collapse_text: getDummyText(3),
};

export default data;
