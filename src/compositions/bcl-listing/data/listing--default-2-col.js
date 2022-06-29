const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  variant: "default-2-col",
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
        path: "https://picsum.photos/160?random=5",
        alt: "alt img",
      },
      content: `<div>
            <span class="text-muted d-lg-inline d-block me-4 mb-2 mb-md-0">Article</span>
            <span class="text-muted d-lg-inline d-block me-4 mb-2 mb-md-0">Brussels, Belgium</span>
            <span class="d-lg-inline d-block text-muted mb-2 mb-md-0">17 October 2019</span>
          </div>`,
    },
    {
      title: '<a href="/example.html" class="standalone">Card title</a>',
      text: {
        content: getDummyText(4),
        classes: "mb-3",
      },
      image: {
        path: "https://picsum.photos/160?random=4",
        alt: "alt img",
      },
      content: `<div>
            <span class="text-muted d-lg-inline d-block me-4 mb-2 mb-md-0">Article</span>
            <span class="text-muted d-lg-inline d-block me-4 mb-2 mb-md-0">Brussels, Belgium</span>
            <span class="d-lg-inline d-block text-muted mb-2 mb-md-0">17 October 2019</span>
          </div>`,
    },
    {
      title: "Title card",
      text: {
        content: getDummyText(3),
        classes: "mb-3",
      },
      image: {
        path: "https://picsum.photos/160?random=3",
        alt: "alt img",
        position: "top",
      },
      content: `<div>
            <span class="text-muted d-lg-inline d-block me-4 mb-2 mb-md-0">Article</span>
            <span class="text-muted d-lg-inline d-block me-4 mb-2 mb-md-0">Brussels, Belgium</span>
            <span class="d-lg-inline d-block text-muted mb-2 mb-md-0">17 October 2019</span>
          </div>`,
    },
    {
      title: '<a href="/example.html" class="standalone">Card title</a>',
      text: {
        content: getDummyText(5),
        classes: "mb-3",
      },
      image: {
        path: "https://picsum.photos/160?random=2",
        alt: "alt img",
      },
      content: `<div>
            <span class="text-muted d-lg-inline d-block me-4 mb-2 mb-md-0">Article</span>
            <span class="text-muted d-lg-inline d-block me-4 mb-2 mb-md-0">Brussels, Belgium</span>
            <span class="d-lg-inline d-block text-muted mb-2 mb-md-0">17 October 2019</span>
          </div>`,
    },
    {
      title: '<a href="/example.html" class="standalone">Card title</a>',
      text: {
        content: getDummyText(3),
        classes: "mb-3",
      },
      image: {
        path: "https://picsum.photos/160?random=1",
        alt: "alt img",
      },
      content: `<div>
            <span class="text-muted d-lg-inline d-block me-4 mb-2 mb-md-0">Article</span>
            <span class="text-muted d-lg-inline d-block me-4 mb-2 mb-md-0">Brussels, Belgium</span>
            <span class="d-lg-inline d-block text-muted mb-2 mb-md-0">17 October 2019</span>
          </div>`,
    },
    {
      title: '<a href="/example.html" class="standalone">Card title</a>',
      text: {
        content: getDummyText(4),
        classes: "mb-3",
      },
      image: {
        path: "https://picsum.photos/160?random=6",
        alt: "alt img",
        position: "right",
      },
      content: `<div>
            <span class="text-muted d-lg-inline d-block me-4 mb-2 mb-md-0">Article</span>
            <span class="text-muted d-lg-inline d-block me-4 mb-2 mb-md-0">Brussels, Belgium</span>
            <span class="d-lg-inline d-block text-muted mb-2 mb-md-0">17 October 2019</span>
          </div>`,
    },
  ],
};
