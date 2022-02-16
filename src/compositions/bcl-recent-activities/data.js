const drupalAttribute = require("drupal-attribute");

module.exports = {
  activities: [
    {
      image:
        "<img class='rounded-circle me-3-5' alt='recent-image-1' src='https://picsum.photos/50/50?random=1'>",
      content:
        "<a href='/example.html' class='fw-bold'>Adjur Tichar</a> commented on the article <a href='#' aria-label='spacex-1'>SpaceX satellites spotted: how good is this for our health and environment?</a>",
      meta: [
        {
          icon: {
            name: "clock",
            size: "xs",
            path: "/icons.svg",
            attributes: new drupalAttribute().addClass([
              "me-2",
              "align-top",
              "mt-1",
            ]),
          },
          label: "8 hours ago",
        },
      ],
    },
    {
      image:
        "<img class='rounded-circle me-3-5' alt='recent-image-2' src='https://picsum.photos/50/50?random=2'>",
      content:
        "<a href='/example.html' class='fw-bold'>Steve Di Marzio</a> published the article <a href='/example.html' aria-label='spacex-2'>SpaceX satellites spotted: how good is this for our health and environment?</a> in <a href='/example.html'>News</a>",
      meta: [
        {
          icon: {
            name: "clock",
            size: "xs",
            path: "/icons.svg",
            attributes: new drupalAttribute().addClass([
              "me-2",
              "align-top",
              "mt-1",
            ]),
          },
          label: "8 hours ago",
        },
      ],
    },
    {
      image:
        "<img class='rounded-circle me-3-5' alt='recent-image-3' src='https://picsum.photos/50/50?random=3'>",
      content:
        "<a href='/example.html' class='fw-bold'>Adjur Tichar</a> commented on the article <a href='/example.html' aria-label='spacex-3'>SpaceX satellites spotted: how good is this for our health and environment?</a>",
      meta: [
        {
          icon: {
            name: "clock",
            size: "xs",
            path: "/icons.svg",
            attributes: new drupalAttribute().addClass([
              "me-2",
              "align-top",
              "mt-1",
            ]),
          },
          label: "8 hours ago",
        },
      ],
    },
  ],
};
