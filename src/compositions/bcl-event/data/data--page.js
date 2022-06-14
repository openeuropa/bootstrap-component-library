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
        label: "Technology",
        outline: true,
        rounded_pill: true,
      },
    ],
    content: `<div class="my-3"><span class="text-muted me-3">Published: 3 September 2020</span></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ultricies massa, a dapibus libero porta nec. Sed facilisis dictum vestibulum. Fusce commodo hendrerit diam, pretium tempus leo varius sit amet. Etiam interdum, orci at sagittis luctus, lorem libero tempus mauris, a fermentum libero orci semper lacus. Duis tristique fringilla magna, eu egestas dolor molestie non. </p>`,
    image: {
      path: "https://picsum.photos/255/255?random=6",
      alt: "alt img",
    },
    links: [
      {
        label: "Register",
        icon_position: "before",
        icon: {
          name: "calendar-check",
          path: "/icons.svg",
        },
        attributes: new drupalAttribute().addClass([
          "btn",
          "btn-primary",
          "d-block",
          "d-md-inline-block",
        ]),
      },
    ],
  },
  sidebar: {
    attributes: new drupalAttribute().addClass(["d-none", "d-lg-block"]),
    title: "Page content",
    title_attributes: new drupalAttribute().addClass("mb-0"),
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
};
