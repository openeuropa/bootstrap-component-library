import drupalAttribute from "drupal-attribute";

const data = {
  label: "Label",
  show_spinner: true,
  spinner: {
    size: "sm",
    assistive_text: "Loading...",
    attributes: new drupalAttribute().addClass("me-1"),
  },
};

export default data;
