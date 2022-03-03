const drupalAttribute = require("drupal-attribute");

module.exports = {
  id: "1",
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
      path: "#",
    },
    {
      label: "čeština",
      path: "#",
    },
    {
      label: "dansk",
      path: "#",
    },
    {
      label: "Deutsch",
      path: "#",
    },
    {
      label: "eesti",
      path: "#",
    },
    {
      label: "ελληνικά",
      path: "#",
    },
    {
      label: "English",
      path: "#",
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
      path: "#",
    },
    {
      label: "Gaeilge",
      path: "#",
    },
    {
      label: "hrvatski",
      path: "#",
    },
    {
      label: "italiano",
      path: "#",
    },
    {
      label: "latviešu",
      path: "#",
    },
    {
      label: "lietuvių",
      path: "#",
    },
    {
      label: "magyar",
      path: "#",
    },
    {
      label: "Malti",
      path: "#",
    },
    {
      label: "Nederlands",
      path: "#",
    },
    {
      label: "polski",
      path: "#",
    },
    {
      label: "português",
      path: "#",
    },
    {
      label: "română",
      path: "#",
    },
    {
      label: "slovenčina",
      path: "#",
    },
    {
      label: "slovenščina",
      path: "#",
    },
    {
      label: "suomi",
      path: "#",
    },
    {
      label: "svenska",
      path: "#",
    },
  ],
};
