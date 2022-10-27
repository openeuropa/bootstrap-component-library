const drupalAttribute = require("drupal-attribute");
const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  status_lists: {
    items: [
      {
        content: [
          {
            variant: "horizontal",
            items: [
              {
                term: "EU contribution amount",
                definition:
                  "290 366,97 Euro <a href='/example.html'>(contribution details)</a>",
              },
              {
                term: "Funding source",
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
                term: "Contact",
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
    title: "Partner organisations",
    title_attributes: new drupalAttribute().setAttribute("id", "partners"),
    items: [
      {
        content: [
          {
            variant: "horizontal",
            items: [
              {
                term: '<p class="mb-0 d-inline-block">Name</p>',
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
                term: '<p class="mb-0 d-inline-block">Country</p>',
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
                term: '<p class="mb-0 d-inline-block">Role</p>',
                definition: "Beneficiary",
              },
              {
                term: '<p class="mb-0 d-inline-block">EU Contribution</p>',
                definition: "EUR 16.314.672,00",
              },
            ],
          },
          {
            variant: "horizontal",
            items: [
              {
                term: '<p class="mb-0 d-inline-block">Name</p>',
                definition: [
                  {
                    link: {
                      label: getDummyText(1, false),
                      path: "/example.html",
                    },
                  },
                ],
              },
              {
                term: '<p class="mb-0 d-inline-block">Country</p>',
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
                term: '<p class="mb-0 d-inline-block">Role</p>',
                definition: "Beneficiary",
              },
              {
                term: '<p class="mb-0 d-inline-block">EU Contribution</p>',
                definition: "EUR 16.314.672,00",
              },
            ],
          },
          {
            variant: "horizontal",
            items: [
              {
                term: '<p class="mb-0 d-inline-block">Name</p>',
                definition: [
                  {
                    link: {
                      label: getDummyText(1, false),
                      path: "/example.html",
                    },
                  },
                ],
              },
              {
                term: '<p class="mb-0 d-inline-block">Country</p>',
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
                term: '<p class="mb-0 d-inline-block">Role</p>',
                definition: "Beneficiary",
              },
              {
                term: '<p class="mb-0 d-inline-block">EU Contribution</p>',
                definition: "EUR 16.314.672,00",
              },
            ],
          },
          {
            variant: "horizontal",
            items: [
              {
                term: '<p class="mb-0 d-inline-block">Name</p>',
                definition: [
                  {
                    link: {
                      label: getDummyText(1, false),
                      path: "/example.html",
                    },
                  },
                ],
              },
              {
                term: '<p class="mb-0 d-inline-block">Country</p>',
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
                term: '<p class="mb-0 d-inline-block">Role</p>',
                definition: "Beneficiary",
              },
              {
                term: '<p class="mb-0 d-inline-block">EU Contribution</p>',
                definition: "EUR 16.314.672,00",
              },
            ],
          },
        ],
      },
    ],
  },
};
