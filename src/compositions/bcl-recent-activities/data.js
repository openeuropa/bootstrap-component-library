const drupalAttribute = require("drupal-attribute");

module.exports = {
  activities: [
    {
      image:
        "<img class='rounded-circle me-3-5' src='https://picsum.photos/50/50?random=1'>",
      content:
        "<a href='#' class='fw-bold'>Adjur Tichar</a> commented on the article <a href='#'>SpaceX satellites spotted: how good is this for our health and environment?</a>",
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
      image:
        "<img class='rounded-circle me-3-5' src='https://picsum.photos/50/50?random=2'>",
      content:
        "<a href='#' class='fw-bold'>Steve Di Marzio</a> published the article <a href='#'>SpaceX satellites spotted: how good is this for our health and environment?</a> in <a href='#'>News</a>",
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
      image:
        "<img class='rounded-circle me-3-5' src='https://picsum.photos/50/50?random=3'>",
      content:
        "<a href='#' class='fw-bold'>Adjur Tichar</a> commented on the article <a href='#'>SpaceX satellites spotted: how good is this for our health and environment?</a>",
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
