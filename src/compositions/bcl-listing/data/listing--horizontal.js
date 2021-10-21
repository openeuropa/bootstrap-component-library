module.exports = {
  variant: "horizontal",
  title: "Listing item block title",
  link: {
    path: "/example",
    label: "Listing item block CTA",
    icon: {
      path: "/icons.svg",
    },
  },
  items: [
    {
      title: {
        content: '<a href="/example">Card title</a>',
      },
      text: {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        classes: "mb-3",
      },
      image: {
        path: "https://picsum.photos/160?random=1",
        alt: "alt img",
        rounded: 1,
      },
      content: `<div><span class="text-muted">Article</span><span class="text-muted">Brussels, Belgium</span><span class="text-muted">17 October 2019</span></div>`,
    },
    {
      body_classes: "p-md-0 pt-sm-3",
      title: {
        content: '<a href="/example">Article title</a>',
      },
      text: {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        classes: "mb-3",
      },
      content: `<div><span class="text-muted">Article</span><span class="text-muted">Brussels, Belgium</span><span class="text-muted">17 October 2019</span></div>`,
    },
    {
      title: {
        content: '<a href="/example">Article title</a>',
      },
      text: {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        classes: "mb-3",
      },
      image: {
        path: "https://picsum.photos/160?random=2",
        alt: "alt img",
        rounded: 1,
      },
      content: `<div><span class="text-muted">Article</span><span class="text-muted">Brussels, Belgium</span><span class="text-muted">17 October 2019</span></div>`,
    },
    {
      title: {
        content: '<a href="/example">Article title</a>',
      },
      text: {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        classes: "mb-3",
      },
      image: {
        path: "https://picsum.photos/160?random=3",
        alt: "alt img",
        rounded: 1,
      },
      content: `<div><span class="text-muted">Article</span><span class="text-muted">Brussels, Belgium</span><span class="text-muted">17 October 2019</span></div>`,
    },
  ],
};
