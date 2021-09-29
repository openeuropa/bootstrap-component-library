const drupalAttribute = require("drupal-attribute");

module.exports = {
  attributes: new drupalAttribute().addClass(["align-items-center mb-3"]),
  media: {
    path: "https://picsum.photos/50/50?random=1",
    alt: "Stefan Mayer",
    extra_classes: "rounded-pill",
  },
  text: {
    content:
      "<a href='example.html' class='fs-5 text-decoration-none d-block mb-0'>Stefan Mayer</a><span class='text-muted me-4-5'>DG Test</span><span class='text-muted me-4-5'>Manager</span>",
    extra_classes: "ms-3",
  },
};
