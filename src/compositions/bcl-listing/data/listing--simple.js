const drupalAttribute = require("drupal-attribute");

module.exports = {
  title: "Listing item block title",
  attributes: new drupalAttribute(),
  type: "grid",
  gutter: 4,
  link: {
    path: "/example",
    label: "Listing item block CTA",
    icon: {
      path: "/icons.svg",
      name: "chevron-right",
    },
  },
  items: [
    {
      body_classes: "p-0",
      horizontal: true,
      horizontal_grid: {
        left_col_classes: "col-md-2",
        right_col_classes: "col-md-10",
      },
      title: {
        content: '<a href="/example">Card title</a>',
      },
      text: {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        classes: "mb-3",
      },
      image: {
        path: "https://picsum.photos/seed/1002/600/400",
        alt: "alt img",
        position: "top",
      },
      content: `<div><span class="text-muted">Article</span><span class="text-muted">Brussels, Belgium</span><span class="text-muted">17 October 2019</span></div>`,
      attributes: new drupalAttribute().addClass("px-3 mb-5 border-0"),
    },
    {
      body_classes: "p-0",
      title: {
        content: '<a href="/example">Article title</a>',
      },
      text: {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        classes: "mb-3",
      },
      content: `<div><span class="text-muted">Article</span><span class="text-muted">Brussels, Belgium</span><span class="text-muted">17 October 2019</span></div>`,
      attributes: new drupalAttribute().addClass("px-3 mb-5 border-0"),
    },
    {
      horizontal: true,
      horizontal_grid: {
        left_col_classes: "col-md-2",
        right_col_classes: "col-md-10",
      },
      body_classes: "p-0",
      title: {
        content: '<a href="/example">Article title</a>',
      },
      text: {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        classes: "mb-3",
      },
      image: {
        path: "https://picsum.photos/seed/1002/600/400",
        alt: "alt img",
        position: "top",
      },
      content: `<div><span class="text-muted">Article</span><span class="text-muted">Brussels, Belgium</span><span class="text-muted">17 October 2019</span></div>`,
      attributes: new drupalAttribute().addClass("border-0 px-3 mb-5"),
    },
    {
      horizontal: true,
      horizontal_grid: {
        left_col_classes: "col-md-2 order-1",
        right_col_classes: "col-md-10 order-0",
      },
      title: {
        content: '<a href="/example">Article title</a>',
      },
      text: {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        classes: "mb-3",
      },
      image: {
        path: "https://picsum.photos/seed/1002/600/400",
        alt: "alt img",
        position: "top",
      },
      content: `<div><span class="text-muted">Article</span><span class="text-muted">Brussels, Belgium</span><span class="text-muted">17 October 2019</span></div>`,
      attributes: new drupalAttribute().addClass("px-3 mb-5 border-0"),
    },
  ],
};
