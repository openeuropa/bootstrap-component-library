const { DrupalAttribute } = require("drupal-attribute");

const detailsListMultiple = {
  details_list: {
    attributes: new DrupalAttribute().addClass(["mt-3", "mb-4"]),
    variant: "horizontal",
    items: [
      {
        term: [
          {
            label: "Date",
            icon: {
              name: "calendar-fill",
              size: "xs",
              path: "/icons.svg",
            },
          },
        ],
        definition: [
          { label: "17 October 2021, 10.00 - 12.00 (CET)" },
          { label: "18 October 2021, 08.00 - 17.00 (CET)" },
          { label: "19 October 2021, 08.00 - 17.00 (CET)" },
          { label: "20 October 2021, 08.00 - 17.00 (CET)" },
          { label: "21 October 2021, 08.00 - 12.00 (CET)" },
        ],
      },
      {
        term: [
          {
            label: "Location",
            icon: {
              name: "geo-alt-fill",
              size: "xs",
              path: "/icons.svg",
            },
          },
        ],
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

const detailsListSingle = {
  details_list: {
    attributes: new DrupalAttribute().addClass(["mt-3", "mb-4"]),
    variant: "horizontal",
    items: [
      {
        term: [
          {
            label: "Date",
            icon: {
              name: "calendar-fill",
              size: "xs",
              path: "/icons.svg",
            },
          },
        ],
        definition: "17 October 2021, 08.00 - 20 October 2021, 16.30 (CET)",
      },
      {
        term: [
          {
            label: "Location",
            icon: {
              name: "geo-alt-fill",
              size: "xs",
              path: "/icons.svg",
            },
          },
        ],
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

export { detailsListSingle, detailsListMultiple };
