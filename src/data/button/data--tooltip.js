import drupalAttribute from "drupal-attribute";

const data = {
  label: "Button with tooltip",
  attributes: new drupalAttribute()
    .setAttribute("autocomplete", "off")
    .setAttribute("data-bs-toggle", "tooltip")
    .setAttribute("title", "This is a tooltip"),
};

export default data;
