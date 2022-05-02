const drupalAttribute = require("drupal-attribute");

module.exports = {
  background: "gray",
  title: "This is the title of this page",
  badges: [
    {
      label: "Category 1",
      outline: true,
      rounded_pill: true,
    },
    {
      label: "Category 2",
      outline: true,
      rounded_pill: true,
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
  image: {
    path: "https://picsum.photos/255/255?random=6",
    alt: "alt img",
  },
  service_buttons: [
    {
      label: "Print",
      outline: true,
      attributes: new drupalAttribute().addClass("w-auto me-3"),
      icon: {
        path: "/icons.svg",
        name: "printer-fill",
        size: "s",
      },
    },
    {
      label: "Export",
      outline: true,
      attributes: new drupalAttribute().addClass("w-auto"),
      icon: {
        path: "/icons.svg",
        name: "file-arrow-down-fill",
        size: "s",
      },
    },
  ],
};
