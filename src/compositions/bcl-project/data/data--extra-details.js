const drupalAttribute = require("drupal-attribute");

module.exports = {
  sidebar: {
    title: "Page content",
    id: "bcl-inpage-navigation",
    title_attributes: new drupalAttribute().addClass("mb-0"),
    attributes: new drupalAttribute().addClass(["d-none", "d-lg-block"]),
    links: [
      {
        label: "Project details",
        path: "#project-details",
      },
      {
        label: "Summary",
        path: "#summary",
      },
      {
        label: "Objective",
        path: "#objective",
      },
      {
        label: "Impact",
        path: "#impact",
      },
      {
        label: "Contributors",
        path: "#contributors",
      },
      {
        label: "Achievements and milestones",
        path: "#achievements",
      },
      {
        label: "Gallery",
        path: "#gallery",
      },
    ],
  },
  first_paragraphs: [
    {
      title_id: "summary",
      title: "Summary",
      content: `
      <p>
        This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ultricies massa, a dapibus libero porta nec. Sed facilisis dictum vestibulum. Fusce commodo hendrerit diam, pretium tempus leo varius sit amet. Etiam interdum, orci at sagittis luctus, lorem libero tempus mauris, a fermentum libero orci semper lacus. Duis tristique fringilla magna, eu egestas dolor molestie non.
      </p>`,
    },
    {
      title_id: "objective",
      title: "Objective",
      content: `
      <p>
        This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ultricies massa, a dapibus libero porta nec. Sed facilisis dictum vestibulum. Fusce commodo hendrerit diam, pretium tempus leo varius sit amet. Etiam interdum, orci at sagittis luctus, lorem libero tempus mauris, a fermentum libero orci semper lacus. Duis tristique fringilla magna, eu egestas dolor molestie non.
      </p>`,
    },
    {
      title_id: "impact",
      title: "Impact",
      content: `
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ultricies massa, a dapibus libero porta nec. Sed facilisis dictum vestibulum. Fusce commodo hendrerit diam, pretium tempus leo varius sit amet. Etiam interdum, orci at sagittis luctus, lorem libero tempus mauris, a fermentum libero orci semper lacus. Duis tristique fringilla magna, eu egestas dolor molestie non.
      </p>`,
    },
  ],
  second_paragraphs: [
    {
      title_id: "achievements",
      title: "Achievements and Milestones",
      content: `
      <p>
        This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ultricies massa, a dapibus libero porta nec. Sed facilisis dictum vestibulum. Fusce commodo hendrerit diam, pretium tempus leo varius sit amet. Etiam interdum, orci at sagittis luctus, lorem libero tempus mauris, a fermentum libero orci semper lacus. Duis tristique fringilla magna, eu egestas dolor molestie non.
      </p>`,
    },
  ],
};
