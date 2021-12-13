const drupalAttribute = require("drupal-attribute");

module.exports = {
  with_wrapper: true,
  wrapper_classes: "position-relative",
  wrapper_aria_live: "polite",
  with_container: true,
  container_classes: "position-absolute top-0 end-0 p-3",
  toasts: [
    {
      role: "alert",
      aria_live: "assertive",
      header: `<strong class="me-auto">Bootstrap</strong><small class="text-muted">just now</small>`,
      body: "See? Just like this.",
      close_aria_label: "Close",
    },
    {
      role: "alert",
      aria_live: "assertive",
      header: `<strong class="me-auto">Bootstrap</strong><small class="text-muted">2 seconds ago</small>`,
      body: "Heads up, toasts will stack automatically.",
      close_aria_label: "Close",
      attributes: new drupalAttribute().addClass("test-class"),
    },
  ],
};
