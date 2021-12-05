const drupalAttribute = require("drupal-attribute");

module.exports = {
  vertical: true,
  attributes: new drupalAttribute().addClass("bcl__nav"),
  items: [
    {
      label: "I'm a link 1",
      path: "/example.html",
      navigation: {
        items: [
          {
            label: "I'm a child link",
            path: "/example.html",
          },
        ],
      },
    },
    {
      label: "I'm a link 2",
      path: "/example.html",
      navigation: {
        items: [
          {
            label: "I'm a child link",
            path: "/example.html",
          },
          {
            label: "I'm a child link",
            path: "/example.html",
          },
        ],
      },
    },
    {
      label: "I'm a link 3",
      path: "/example.html",
      navigation: {
        vertical: true,
        attributes: new drupalAttribute().addClass("ps-3"),
        items: [
          {
            label: "I'm a child link",
            path: "/example.html",
            navigation: {
              vertical: true,
              attributes: new drupalAttribute().addClass("ps-3"),
              items: [
                {
                  label: "I'm a child link",
                  path: "/example.html",
                },
                {
                  label: "I'm a child link",
                  path: "/example.html",
                },
                {
                  label: "I'm a child link",
                  path: "/example.html",
                },
              ],
            },
          },
          {
            label: "I'm a child link",
            path: "/example.html",
          },
          {
            label: "I'm a child link",
            path: "/example.html",
          },
        ],
      },
    },
    {
      label: "I'm a link disabled",
      path: "/example.html",
      disabled: true,
    },
  ],
};
