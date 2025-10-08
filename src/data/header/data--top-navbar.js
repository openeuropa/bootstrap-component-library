const { DrupalAttribute } = require("drupal-attribute");

module.exports = [
  {
    label: "Link",
    icon_position: "before",
    path: "/example.html",
    icon: {
      name: "link",
      path: "/icons.svg",
    },
  },
  {
    label: "Link",
    icon_position: "before",
    path: "/example.html",
    icon: {
      name: "link",
      path: "/icons.svg",
    },
  },
  {
    label: "English",
    path: "/example.html",
    icon_position: "before",
    remove_icon_spacers: true,
    icon: {
      name: "chat-left-dots-fill",
      size: "xs",
      path: "/icons.svg",
      attributes: new DrupalAttribute().addClass("me-2-5"),
    },
    attributes: new DrupalAttribute()
      .setAttribute("data-bs-toggle", "modal")
      .setAttribute("data-bs-target", "#languageModal"),
  },
  {
    label: "Log in",
    path: "/example.html",
    icon_position: "before",
    remove_icon_spacers: true,
    icon: {
      name: "person-fill",
      size: "xs",
      path: "/icons.svg",
      attributes: new DrupalAttribute().addClass("me-2-5"),
    },
    attributes: new DrupalAttribute()
      .setAttribute("data-bs-toggle", "modal")
      .setAttribute("data-bs-target", "#loginModal"),
  },
];
