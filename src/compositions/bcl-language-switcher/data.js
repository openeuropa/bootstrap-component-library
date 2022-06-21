const drupalAttribute = require("drupal-attribute");

module.exports = {
  id: "dropdown-languages",
  message: {
    message: "This page is not available in [language]",
    icon_path: "/icons.svg",
    variant: "warning",
  },
  expandable: {
    label: "Choose another language",
    icon: {
      name: "caret-down-fill",
      path: "/icons.svg",
    },
    outline: "true",
  },
  languages: [
    {
      label: "български",
      path: "/example.html",
    },
    {
      label: "čeština",
      path: "/example.html",
    },
    {
      label: "dansk",
      path: "/example.html",
    },
    {
      label: "Deutsch",
      path: "/example.html",
    },
    {
      label: "eesti",
      path: "/example.html",
    },
    {
      label: "ελληνικά",
      path: "/example.html",
    },
    {
      label: "English",
      path: "/example.html",
      icon_position: "before",
      remove_icon_spacers: true,
      icon: {
        name: "check-lg",
        path: "/icons.svg",
        size: "xs",
        attributes: new drupalAttribute().addClass("me-2"),
      },
    },
    {
      label: "français",
      path: "/example.html",
    },
    {
      label: "Gaeilge",
      path: "/example.html",
    },
    {
      label: "hrvatski",
      path: "/example.html",
    },
    {
      label: "italiano",
      path: "/example.html",
    },
    {
      label: "latviešu",
      path: "/example.html",
    },
    {
      label: "lietuvių",
      path: "/example.html",
    },
    {
      label: "magyar",
      path: "/example.html",
    },
    {
      label: "Malti",
      path: "/example.html",
    },
    {
      label: "Nederlands",
      path: "/example.html",
    },
    {
      label: "polski",
      path: "/example.html",
    },
    {
      label: "português",
      path: "/example.html",
    },
    {
      label: "română",
      path: "/example.html",
    },
    {
      label: "slovenčina",
      path: "/example.html",
    },
    {
      label: "slovenščina",
      path: "/example.html",
    },
    {
      label: "suomi",
      path: "/example.html",
    },
    {
      label: "svenska",
      path: "/example.html",
    },
  ],
};
