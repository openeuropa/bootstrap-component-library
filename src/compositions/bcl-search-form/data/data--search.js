import drupalAttribute from "drupal-attribute";

const data = {
  icon: {
    name: "search",
    size: "xs",
    path: "/icons.svg",
    attributes: new drupalAttribute().addClass(["bcl-search-form__icon"]),
  },
  input: {
    placeholder: "Search",
    attributes: new drupalAttribute().addClass(["bcl-search-form__input"]),
    label: "Search bar label",
    input_type: "search",
  },
};

export default data;
