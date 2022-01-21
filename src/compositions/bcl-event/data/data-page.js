const drupalAttribute = require("drupal-attribute");

module.exports = {
  banner: {
    background: "gray",
    title: {
      content:
        "Translation, Interpreting, Culture 2: Human Factor in translation Technologies",
      tag: "h2",
    },
    badges: [
      {
        label: "Event",
        outline: true,
        rounded_pill: true,
      },
      {
        label: "Culture",
        outline: true,
        rounded_pill: true,
      },
      {
        label: "Technology",
        outline: true,
        rounded_pill: true,
      },
    ],
    content: `<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ultricies massa, a dapibus libero porta nec.
      Sed facilisis dictum vestibulum. Fusce commodo hendrerit diam, pretium tempus leo varius sit amet.
      Etiam interdum, orci at sagittis luctus, lorem libero tempus mauris, a fermentum libero orci semper lacus.
      Duis tristique fringilla magna, eu egestas dolor molestie non.
      </p>`,
  },
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
    variant: "horizontal",
    items: [
      {
        term: {
          label: '<p class="mb-0 d-inline-block">Date</p>',
          icon: {
            name: "calendar-fill",
            size: "xs",
            path: "/icons.svg",
          },
        },
        definition: "<p class='mb-2'>19/12/2021 to 21/12/2021</p>",
      },
      {
        term: {
          label: '<p class="mb-0 d-inline-block">Location</p>',
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
