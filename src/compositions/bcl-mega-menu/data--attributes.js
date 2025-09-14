const drupalAttribute = require("drupal-attribute");

module.exports = {
  trigger: {
    label: "Top-level item (extra attributes)",
    // This style is ignored.
    attributes: new drupalAttribute().setAttribute('style', 'border-left: 10px solid red;'),
  },
  content_link: {
    label: "Discover more",
    path: "/top-level.html",
    icon: {
      name: "arrow-right",
    },
    attributes: new drupalAttribute().setAttribute('style', 'border-left: 10px solid red;'),
  },
  content_block:
    "<h4>About us</h4><p>Description text.</p>",
  items: [
    {
      trigger: {
        label: "Submenu item 1",
        attributes: new drupalAttribute().setAttribute('style', 'border-left: 10px solid red;'),
      },
      see_all: {
        label: "More of submenu item 1",
        path: "/example.html",
        attributes: new drupalAttribute().setAttribute('style', 'border-left: 10px solid pink;'),
      },
      items: [
        {
          label: "Sub-submenu (class fw-bold)",
          path: "/example.html",
          attributes: new drupalAttribute().addClass('fw-bold'),
        },
        {
          label: "Sub-submenu (style lightgreen)",
          path: "/example.html",
          attributes: new drupalAttribute().setAttribute('style', 'border-left: 10px solid lightgreen;'),
        },
      ],
    },
    {
      label: "Submenu item 2",
      path: "/example.html",
      attributes: new drupalAttribute().setAttribute('style', 'border-left: 10px solid blue;'),
    },
    {
      trigger: {
        label: "Submenu item 3 (nolink)",
        attributes: new drupalAttribute().setAttribute('style', 'border-left: 10px solid purple;'),
      },
      items: [
        {
          label: "Sub-submenu item 3.1",
          path: "/example.html",
          attributes: new drupalAttribute().setAttribute('style', 'border-left: 10px solid magenta;'),
        },
        {
          label: "Sub-submenu item 3.2",
          path: "/example.html",
        },
      ],
    },
  ],
};
