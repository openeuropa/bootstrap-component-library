const drupalAttribute = require("drupal-attribute");

module.exports = {
  status_lists: {
    items: [
      {
        content: [
          {
            variant: "horizontal",
            items: [
              {
                term: {
                  label: "EU contribution amount",
                },
                definition: [
                  {
                    label:
                      "290 366,97 Euro <a href='/example.html'>(contribution details)</a>",
                  },
                ],
              },
              {
                term: {
                  label: "Funding source",
                },
                definition: [
                  {
                    link: {
                      label: "External link",
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
                  label: "Contact",
                },
                definition: [
                  {
                    link: {
                      label: "mail.to@address.eu",
                      path: "/example.html",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  content_lists: {
    main_title: "Partner organisations",
    main_title_id: "partners",
    items: [
      {
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
                    link: {
                      label:
                        "Commissariat à l’Energie Atomique et aux Energies Alternatives",
                      path: "/example.html",
                    },
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
                  label: '<p class="mb-0 d-inline-block">Role</p>',
                },
                definition: [
                  {
                    label: "Beneficiary",
                  },
                ],
              },
              {
                term: {
                  label: '<p class="mb-0 d-inline-block">EU Contribution</p>',
                },
                definition: [
                  {
                    label: "EUR 16.314.672,00",
                  },
                ],
              },
            ],
          },
          {
            variant: "horizontal",
            items: [
              {
                term: {
                  label: '<p class="mb-0 d-inline-block">Name</p>',
                },
                definition: [
                  {
                    link: {
                      label: "Lorem Ipsum Color Sit Amet",
                      path: "/example.html",
                    },
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
                  label: '<p class="mb-0 d-inline-block">Role</p>',
                },
                definition: [
                  {
                    label: "Beneficiary",
                  },
                ],
              },
              {
                term: {
                  label: '<p class="mb-0 d-inline-block">EU Contribution</p>',
                },
                definition: [
                  {
                    label: "EUR 16.314.672,00",
                  },
                ],
              },
            ],
          },
          {
            variant: "horizontal",
            items: [
              {
                term: {
                  label: '<p class="mb-0 d-inline-block">Name</p>',
                },
                definition: [
                  {
                    link: {
                      label: "Lorem Ipsum Color Sit Amet",
                      path: "/example.html",
                    },
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
                  label: '<p class="mb-0 d-inline-block">Role</p>',
                },
                definition: [
                  {
                    label: "Beneficiary",
                  },
                ],
              },
              {
                term: {
                  label: '<p class="mb-0 d-inline-block">EU Contribution</p>',
                },
                definition: [
                  {
                    label: "EUR 16.314.672,00",
                  },
                ],
              },
            ],
          },
          {
            variant: "horizontal",
            items: [
              {
                term: {
                  label: '<p class="mb-0 d-inline-block">Name</p>',
                },
                definition: [
                  {
                    link: {
                      label: "Lorem Ipsum Color Sit Amet",
                      path: "/example.html",
                    },
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
                  label: '<p class="mb-0 d-inline-block">Role</p>',
                },
                definition: [
                  {
                    label: "Beneficiary",
                  },
                ],
              },
              {
                term: {
                  label: '<p class="mb-0 d-inline-block">EU Contribution</p>',
                },
                definition: [
                  {
                    label: "EUR 16.314.672,00",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
