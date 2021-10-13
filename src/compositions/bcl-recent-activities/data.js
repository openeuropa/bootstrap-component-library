const drupalAttribute = require("drupal-attribute");

module.exports = {
  activities: [
    {
      image: {
        path: "https://picsum.photos/50/50?random=1",
        alt: "profile image",
      },
      content:
        "<p class='mb-2'><a href='#' class='fw-bold'>Adjur Tichar</a> commented on the article <a href='#'>SpaceX satellites spotted: how good is this for our health and environment?</a></p>",
      meta: [
        {
          icon: {
            name: "clock",
            size: "xs",
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
      image: {
        path: "https://picsum.photos/50/50?random=2",
        alt: "profile image",
      },
      content:
        "<p class='mb-2'><a href='#' class='fw-bold'>Steve Di Marzio</a> published the article <a href='#'>SpaceX satellites spotted: how good is this for our health and environment?</a> in <a href='#'>News</a></p>",
      meta: [
        {
          icon: {
            name: "clock",
            size: "xs",
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
      image: {
        path: "https://picsum.photos/50/50?random=3",
        alt: "profile image",
      },
      content:
        "<p class='mb-2'><a href='#' class='fw-bold'>Adjur Tichar</a> commented on the article <a href='#'>SpaceX satellites spotted: how good is this for our health and environment?</a></p>",
      meta: [
        {
          icon: {
            name: "clock",
            size: "xs",
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
  attributes: new drupalAttribute(),
};
