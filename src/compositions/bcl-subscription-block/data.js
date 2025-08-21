import drupalAttribute from "drupal-attribute";

const data = {
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
};

export default data;
