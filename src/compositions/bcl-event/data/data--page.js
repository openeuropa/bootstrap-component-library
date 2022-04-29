const drupalAttribute = require("drupal-attribute");

module.exports = {
  sidebar: {
    attributes: new drupalAttribute().addClass(["d-none", "d-lg-block"]),
    title: "Page content",
    id: "bcl-inpage-navigation",
    links: [
      {
        label: "Description",
        path: "#item-1",
      },
      {
        label: "Related documents",
        path: "#item-2",
      },
    ],
  },
  details_list: {
    attributes: new drupalAttribute().addClass(["mt-3", "mb-4"]),
    variant: "horizontal",
    items: [
      {
        term: {
          label: "Date",
          icon: {
            name: "calendar-fill",
            size: "xs",
            path: "/icons.svg",
          },
        },
        definition: "17 October 2021 to 20 October 2021",
      },
      {
        term: {
          label: "Location",
          icon: {
            name: "geo-alt-fill",
            size: "xs",
            path: "/icons.svg",
          },
        },
        definition: [
          {
            icon: {
              name: "spain",
              path: "/flags.svg",
              size: "fluid",
            },
            label: "Barcelona, Spain",
          },
        ],
      },
    ],
  },
};
