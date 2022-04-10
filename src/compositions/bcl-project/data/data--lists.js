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
  content_lists: {
    main_title: "Contributors",
    main_title_id: "contributors",
    items: [
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
  chart_lists: {
    main_title: "Lead contributor",
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
    ],
  },
};
