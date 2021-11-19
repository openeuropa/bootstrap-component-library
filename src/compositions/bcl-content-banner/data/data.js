const drupalAttribute = require("drupal-attribute");

module.exports = {
  background: "gray",
  title: {
    content: "This is the title of this news",
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
    path: "https://picsum.photos/255/255?random=6",
    alt: "alt img",
  },
  button: {
    label: "Action button",
    variant: "secondary",
    attributes: new drupalAttribute().addClass("mb-3"),
  },
  service_buttons: [
    {
      label: "Print",
      variant: "light",
      attributes: new drupalAttribute().addClass("w-auto mt-3 me-3"),
      icon: {
        path: "/icons.svg",
        name: "printer-fill",
        size: "s",
      },
    },
    {
      label: "Export",
      variant: "light",
      attributes: new drupalAttribute().addClass("w-auto mt-3"),
      icon: {
        path: "/icons.svg",
        name: "file-arrow-down-fill",
        size: "s",
      },
    },
  ],
};
