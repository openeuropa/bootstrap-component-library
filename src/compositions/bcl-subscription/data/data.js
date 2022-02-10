const drupalAttribute = require("drupal-attribute");

module.exports = {
  title: "Subscribe",
  content:
    "<p class='fw-bold'>Get notified lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
  button: {
    label: "Subscribe",
    variant: "secondary",
    size: "lg",
    icon: {
      name: "chevron-right",
      path: "/icons.svg",
    },
    attributes: new drupalAttribute()
      .setAttribute("data-bs-toggle", "modal")
      .setAttribute("data-bs-target", "#subscribeModal"),
  },
  service_buttons: [
    {
      label: "Print",
      variant: "primary",
      outline: true,
      icon_position: "before",
      icon: {
        name: "printer-fill",
        path: "/icons.svg",
      },
      attributes: new drupalAttribute().addClass("me-3"),
    },
    {
      label: "Subscribe",
      variant: "primary",
      outline: true,
      icon_position: "before",
      icon: {
        name: "envelope-fill",
        path: "/icons.svg",
      },
      attributes: new drupalAttribute()
        .setAttribute("data-bs-toggle", "modal")
        .setAttribute("data-bs-target", "#subscribeModal"),
    },
  ],
};
