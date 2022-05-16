const drupalAttribute = require("drupal-attribute");

module.exports = {
  banner: {
    background: "gray",
    title:
      "Translation, Interpreting, Culture 2: Human Factor in translation Technologies",
    badges: [
      {
        label: "Culture",
        outline: true,
        rounded_pill: true,
      },
      {
        label: "Category 3",
        outline: true,
        rounded_pill: true,
      },
    ],
    content: `<div class="mb-4 mt-4"><span class="text-muted me-3">Published : 3 September 2020</span></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ultricies massa, a dapibus libero porta nec. Sed facilisis dictum vestibulum. Fusce commodo hendrerit diam, pretium tempus leo varius sit amet. Etiam interdum, orci at sagittis luctus, lorem libero tempus mauris, a fermentum libero orci semper lacus. Duis tristique fringilla magna, eu egestas dolor molestie non. </p>`,
    image: {
      path: "https://picsum.photos/255/255?random=6",
      alt: "alt img",
    },
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
