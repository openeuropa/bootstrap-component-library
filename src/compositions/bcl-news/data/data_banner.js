const drupalAttribute = require("drupal-attribute");

module.exports = {
  horizontal: true,
  horizontal_grid: {
    left_col_classes: "col-md-3",
    right_col_classes: "col-md-9",
  },
  extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
  extra_classes_body: "pt-md-0 px-0 px-md-3 pb-0 pb-md-3",
  title: {
    content: "This is the title of this news",
    tag: "h2",
    classes: "fw-bold",
  },
  badges: [
    {
      label: "Category 1",
      attributes: new drupalAttribute(),
    },
    {
      label: "Category 2",
      attributes: new drupalAttribute(),
    },
  ],
  content: `<div class="mb-4 mt-4">
      <span class="text-muted me-3">8 hours ago</span>
     </div>
     <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ultricies massa, a dapibus libero porta nec.
        Sed facilisis dictum vestibulum. Fusce commodo hendrerit diam, pretium tempus leo varius sit amet.
        Etiam interdum, orci at sagittis luctus, lorem libero tempus mauris, a fermentum libero orci semper lacus.
        Duis tristique fringilla magna, eu egestas dolor molestie non.
     </p>`,
  attributes: new drupalAttribute(),
  image: {
    path: "https://picsum.photos/200/200?random=6",
    alt: "alt img",
  },
};
