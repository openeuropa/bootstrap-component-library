module.exports = {
  trigger: {
    label: "Top-level item",
  },
  id: "dropdown-megamenu",
  content_block:
    "<h4>About the European Commission</h4><p>Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
  items: [
    {
      id: "dropdown-megamenu-inner",
      trigger: {
        label: "Submenu item 1",
      },
      items: [
        {
          label: "Sub-submenu item 1.1 (no path)",
        },
        {
          label:
            "Sub-submenu item 1.2 (path with empty url, with description attribute)",
          path: {
            url: "",
            attributes: {
              title: "Link description for item 1.2",
            },
          },
        },
      ],
    },
    {
      label: "Submenu item 2",
    },
  ],
};
