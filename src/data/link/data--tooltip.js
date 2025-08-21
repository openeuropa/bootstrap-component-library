import drupalAttribute from "drupal-attribute";

const data = {
  label: "A link with tooltip",
  path: "/example.html",
  attributes: new drupalAttribute()
    .setAttribute("title", "This is a tooltip")
    .setAttribute("data-bs-toggle", "tooltip")
    .setAttribute("role", "button"),
};

export default data;
