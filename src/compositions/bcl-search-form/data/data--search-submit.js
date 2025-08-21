import drupalAttribute from "drupal-attribute";

const data = {
  submit: {
    attributes: new drupalAttribute().addClass(["bcl-search-form__submit"]),
    assistive_text: "Search",
    icon: {
      name: "search",
      size: "xs",
      path: "/icons.svg",
    },
  },
  input: {
    placeholder: "Search",
    attributes: new drupalAttribute().addClass(["bcl-search-form__input"]),
    label: "Search bar label",
    input_type: "search",
  },
};

export default data;
