const drupalAttribute = require("drupal-attribute");

module.exports = {
  banner: {
    title: {
      content: "Stefan Mayer",
      attributes: new drupalAttribute().addClass("fw-bold"),
    },
    image: {
      path: "https://picsum.photos/200/200?random=6",
      alt: "alt img",
      position: "top",
    },
    action_button: {
      label: "Manage profile",
      variant: "light",
      attributes: new drupalAttribute().addClass("mb-3"),
    },
    content: `<div class="mb-4 mt-4">
      <span class="text-muted me-3">DG Test</span><span class="text-muted">Director</span>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ultricies massa, a dapibus libero porta nec. Sed facilisis dictum vestibulum. Fusce commodo hendrerit diam, pretium tempus leo varius sit amet. Etiam interdum, orci at sagittis luctus, lorem libero tempus mauris, a fermentum libero orci semper lacus. Duis tristique fringilla magna, eu egestas dolor molestie non.</p>`,
  },
};
