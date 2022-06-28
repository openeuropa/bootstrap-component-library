const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  variant: "default-1-col",
  title: "Listing item block title",
  link: {
    path: "/example.html",
    label: "Listing item block CTA",
    icon: {
      path: "/icons.svg",
    },
  },
  items: [
    {
      title: '<a href="/example.html" class="standalone">Card title</a>',
      text: {
        content: getDummyText(2),
        classes: "mb-3",
      },
      image: {
        path: "https://picsum.photos/160?random=1",
        alt: "alt img",
      },
      content: `<div>
                  <span class="text-muted d-md-inline d-block me-4 mb-2 mb-md-0">Article</span>
                  <span class="text-muted d-md-inline d-block me-4 mb-2 mb-md-0">Brussels, Belgium</span>
                  <span class="d-md-inline d-block text-muted mb-2 mb-md-0">17 October 2019</span>
                </div>`,
    },
    {
      body_classes: "p-md-0 pt-sm-3",
      title: '<a href="/example.html" class="standalone">Article title</a>',
      image: {
        path: "https://picsum.photos/160?random=8",
        alt: "alt img",
      },
      text: {
        content: getDummyText(4),
        classes: "mb-3",
      },
      content: `<div>
                  <span class="text-muted d-md-inline d-block me-4 mb-2 mb-md-0">Article</span>
                  <span class="text-muted d-md-inline d-block me-4 mb-2 mb-md-0">Brussels, Belgium</span>
                  <span class="d-md-inline d-block text-muted mb-2 mb-md-0">17 October 2019</span>
                </div>`,
    },
    {
      title: '<a href="/example.html" class="standalone">Article title</a>',
      text: {
        content: getDummyText(6),
        classes: "mb-3",
      },
      image: {
        path: "https://picsum.photos/160?random=2",
        alt: "alt img",
      },
      content: `<div>
                  <span class="text-muted d-md-inline d-block me-4 mb-2 mb-md-0">Article</span>
                  <span class="text-muted d-md-inline d-block me-4 mb-2 mb-md-0">Brussels, Belgium</span>
                  <span class=" text-muted d-md-inline d-block mb-2 mb-md-0">17 October 2019</span>
                </div>`,
    },
    {
      title: '<a href="/example.html" class="standalone">Article title</a>',
      text: {
        content: getDummyText(3),
        classes: "mb-3",
      },
      image: {
        path: "https://picsum.photos/160?random=3",
        alt: "alt img",
      },
      content: `<div>
                  <span class="text-muted d-md-inline d-block me-4 mb-2 mb-md-0">Article</span>
                  <span class="text-muted d-md-inline d-block me-4 mb-2 mb-md-0">Brussels, Belgium</span>
                  <span class="d-md-inline d-block text-muted mb-2 mb-md-0">17 October 2019</span>
                </div>`,
    },
  ],
};
