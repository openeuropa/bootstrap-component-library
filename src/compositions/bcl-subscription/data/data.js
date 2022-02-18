const drupalAttribute = require("drupal-attribute");

module.exports = {
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
