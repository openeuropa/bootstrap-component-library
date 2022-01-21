const drupalAttribute = require("drupal-attribute");

module.exports = {
  banner: {
    background: "gray",
    title: {
      content: "Life IP Artisan",
    },
    badges: [
      {
        label: "Project type",
        outline: true,
        rounded_pill: true,
      },
    ],
    content:
      "<p>Achieving Resiliency by Triggering Implementation of nature-based Solutions for climate Adaptation at a National scale. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
    image: {
      path: "https://picsum.photos/255/255?random=6",
      alt: "alt img",
    },
    button: {
      label: "Action button",
      variant: "secondary",
      attributes: new drupalAttribute().addClass("mb-3"),
    },
  },
  sidebar: {
    attributes: new drupalAttribute().addClass(["d-none", "d-lg-block"]),
    title: "Page content",
    id: "bcl-inpage-navigation",
    links: [
      {
        label: "Link 1",
        path: "#item-1",
      },
      {
        label: "Link 2",
        path: "#item-1",
      },
      {
        label: "Link 3",
        path: "#item-1",
      },
      {
        label: "Link 4",
        path: "#item-1",
      },
      {
        label: "Link 5",
        path: "#item-1",
      },
      {
        label: "Link 6",
        path: "#item-1",
      },
      {
        label: "Link 7",
        path: "#item-1",
      },
      {
        label: "Link 8",
        path: "#item-1",
      },
    ],
  },
  carousel_gallery: {
    id: "carouselExample",
    with_controls: true,
    with_indicators: true,
    prev_label: "Previous",
    next_label: "Next",
    items: [
      {
        classes: "item_extra_class",
        caption: `<h5>First slide label</h5><p>Some representative placeholder content for the first slide.</p>`,
        caption_classes: "d-none d-md-block",
        image: `<img
                  src="https://picsum.photos/800/400?random=1"
                  alt="First slide"
                  class="d-block w-100"
                />`,
      },
      {
        image: `<img
                  src="https://picsum.photos/800/400?random=2"
                  alt="Second slide"
                  class="d-block w-100"
                />`,
      },
      {
        classes: "item_extra_class",
        caption: `<h5>Third slide label</h5><p>Some representative placeholder content for the third slide.</p>`,
        caption_classes: "d-none d-md-block",
        image: `<img
                  src="https://picsum.photos/800/400?random=3"
                  class="d-block w-100"
                />`,
      },
    ],
  },
  status_badge: {
    label: "Ongoing",
    background: "info",
    attributes: new drupalAttribute().addClass(["mb-3", "mb-md-0"]),
  },
  progress: {
    progress: 25,
    variant: "info",
    hidden_label: true,
  },
  details_list: {
    variant: "horizontal",
    items: [
      {
        term: {
          label: "Website",
        },
        definition: [
          {
            link: {
              label: "Link",
              path: "/example.html",
              icon: {
                name: "box-arrow-up-right",
                path: "/icons.svg",
                size: "fluid",
              },
            },
          },
        ],
      },
      {
        term: {
          label: "Funding Programme",
        },
        definition: [
          {
            link: {
              label: "Link",
              path: "/example.html",
              icon: {
                name: "box-arrow-up-right",
                path: "/icons.svg",
                size: "fluid",
              },
            },
          },
        ],
      },
      {
        term: {
          label: "Project ID",
        },
        definition: [
          {
            link: {
              label: "Link",
              path: "/example.html",
              icon: {
                name: "box-arrow-up-right",
                path: "/icons.svg",
                size: "fluid",
              },
            },
          },
        ],
      },
    ],
  },
  cordinator_list: {
    variant: "horizontal",
    items: [
      {
        term: {
          label:
            '<p class="mb-0 d-inline-block">Only title label with icon</p>',
        },
        definition: [
          {
            icon: {
              name: "bulgaria",
              path: "/flags.svg",
              size: "fluid",
            },
            label: "Bulgaria",
          },
        ],
      },
    ],
  },
  contributors: [
    {
      title: "HIT Manufacturing sas",
      border: true,
      list: {
        variant: "horizontal",
        attributes: new drupalAttribute().addClass("border-bottom"),
        items: [
          {
            term: {
              label: '<p class="mb-0 d-inline-block">Name</p>',
            },
            definition: [
              {
                label:
                  "Commissariat à l’Energie Atomique <br>et aux Energies Alternatives",
              },
            ],
          },
          {
            term: {
              label: '<p class="mb-0 d-inline-block">Country</p>',
            },
            definition: [
              {
                icon: {
                  name: "france",
                  path: "/flags.svg",
                  size: "fluid",
                },
                label: "France",
              },
            ],
          },
          {
            term: {
              label: '<p class="mb-0 d-inline-block">Contribution</p>',
            },
            definition: [
              {
                label: "EUR 297.700.00",
              },
            ],
          },
        ],
      },
    },
    {
      title: "Multi-informatica principado",
      border: true,
      list: {
        variant: "horizontal",
        attributes: new drupalAttribute().addClass("border-bottom"),
        items: [
          {
            term: {
              label: '<p class="mb-0 d-inline-block">Name</p>',
            },
            definition: [
              {
                label: "Lorem Ipsum Color Sit Amet",
              },
            ],
          },
          {
            term: {
              label: '<p class="mb-0 d-inline-block">Country</p>',
            },
            definition: [
              {
                icon: {
                  name: "bulgaria",
                  path: "/flags.svg",
                  size: "fluid",
                },
                label: "Bulgaria",
              },
            ],
          },
          {
            term: {
              label: '<p class="mb-0 d-inline-block">Contribution</p>',
            },
            definition: [
              {
                label: "EUR 297.700.00",
              },
            ],
          },
        ],
      },
    },
    {
      border: true,
      list: {
        variant: "horizontal",
        attributes: new drupalAttribute().addClass("border-bottom"),
        items: [
          {
            term: {
              label: '<p class="mb-0 d-inline-block">Name</p>',
            },
            definition: [
              {
                label: "Lorem Ipsum Color Sit Amet",
              },
            ],
          },
          {
            term: {
              label: '<p class="mb-0 d-inline-block">Country</p>',
            },
            definition: [
              {
                icon: {
                  name: "belgium",
                  path: "/flags.svg",
                  size: "fluid",
                },
                label: "Belgium",
              },
            ],
          },
          {
            term: {
              label: '<p class="mb-0 d-inline-block">Contribution</p>',
            },
            definition: [
              {
                label: "EUR 297.700.00",
              },
            ],
          },
        ],
      },
    },
    {
      border: true,
      list: {
        variant: "horizontal",
        items: [
          {
            term: {
              label: '<p class="mb-0 d-inline-block">Name</p>',
            },
            definition: [
              {
                label: "Lorem Ipsum Color Sit Amet",
              },
            ],
          },
          {
            term: {
              label: '<p class="mb-0 d-inline-block">Country</p>',
            },
            definition: [
              {
                icon: {
                  name: "denmark",
                  path: "/flags.svg",
                  size: "fluid",
                },
                label: "Denmark",
              },
            ],
          },
          {
            term: {
              label: '<p class="mb-0 d-inline-block">Contribution</p>',
            },
            definition: [
              {
                label: "EUR 297.700.00",
              },
            ],
          },
        ],
      },
    },
  ],
  featured_gallery: {
    poster_image:
      "https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg",
    tracks: [
      {
        kind: "captions",
        label: "English",
        src: "example.vtt",
        srclang: "en",
      },
    ],
    sources: [
      {
        type: "video/mp4",
        src: "https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.mp4",
      },
      {
        type: "video/webm",
        src: "https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.webm",
      },
    ],
  },
};
