const drupalAttribute = require("drupal-attribute");

module.exports = {
  status_lists: {
    listing: [
      {
        content: [
          {
            variant: "horizontal",
            items: [
              {
                term: {
                  label: "Website",
                },
                definition: [
                  {
                    link: {
                      label: "www.website-address.eu",
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
                      label: "www.funding-prog.eu",
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
                      label: "345984678",
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
            attributes: new drupalAttribute().addClass([
              "border-bottom",
              "pb-3",
            ]),
          },
          {
            variant: "horizontal",
            items: [
              {
                term: {
                  label: '<p class="mb-0 d-inline-block">Coordinator</p>',
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
        ],
      },
    ],
  },
  first_paragraphs: [
    {
      title_id: "summary",
      title: "Summary",
      content: `
      <p>
        This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ultricies massa, a dapibus libero porta nec. Sed facilisis dictum vestibulum. Fusce commodo hendrerit diam, pretium tempus leo varius sit amet. Etiam interdum, orci at sagittis luctus, lorem libero tempus mauris, a fermentum libero orci semper lacus. Duis tristique fringilla magna, eu egestas dolor molestie non.
      </p>`,
    },
    {
      title_id: "objective",
      title: "Objective",
      content: `
      <p>
        This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ultricies massa, a dapibus libero porta nec. Sed facilisis dictum vestibulum. Fusce commodo hendrerit diam, pretium tempus leo varius sit amet. Etiam interdum, orci at sagittis luctus, lorem libero tempus mauris, a fermentum libero orci semper lacus. Duis tristique fringilla magna, eu egestas dolor molestie non.
      </p>`,
    },
    {
      title_id: "impact",
      title: "Impact",
      content: `
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ultricies massa, a dapibus libero porta nec. Sed facilisis dictum vestibulum. Fusce commodo hendrerit diam, pretium tempus leo varius sit amet. Etiam interdum, orci at sagittis luctus, lorem libero tempus mauris, a fermentum libero orci semper lacus. Duis tristique fringilla magna, eu egestas dolor molestie non.
      </p>`,
    },
  ],
  content_lists: {
    main_title: "Contributors",
    main_title_id: "contributors",
    listing: [
      {
        title: "HIT Manufacturing sas",
        content: [
          {
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
        ],
      },
      {
        title: "Multi-informatica principado",
        border: true,
        content: [
          {
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
        ],
      },
      {
        border: true,
        content: [
          {
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
        ],
      },
      {
        border: true,
        content: [
          {
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
        ],
      },
    ],
  },
  second_paragraphs: [
    {
      title_id: "achievements",
      title: "Achievements and Milestones",
      content: `
      <p>
        This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ultricies massa, a dapibus libero porta nec. Sed facilisis dictum vestibulum. Fusce commodo hendrerit diam, pretium tempus leo varius sit amet. Etiam interdum, orci at sagittis luctus, lorem libero tempus mauris, a fermentum libero orci semper lacus. Duis tristique fringilla magna, eu egestas dolor molestie non.
      </p>`,
    },
  ],
  gallery: {
    main_title: "Gallery",
    main_title_id: "gallery",
    listing: [
      {
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
      {
        carousel: true,
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
                      alt="Third slide"
                      class="d-block w-100"
                    />`,
          },
        ],
      },
    ],
  },
};
