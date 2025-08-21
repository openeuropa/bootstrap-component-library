import drupalAttribute from "drupal-attribute";
import { getDummyText } from "@openeuropa/bcl-data-utils";

const data = {
  status_lists: {
    items: [
      {
        content: [
          {
            variant: "horizontal",
            items: [
              {
                term: "Website",
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
                term: "Funding Programme",
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
                term: "Project ID",
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
          },
          {
            variant: "horizontal",
            items: [
              {
                term: '<p class="mb-0 d-inline-block">Coordinator</p>',
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
    title: "Contributors",
    title_attributes: new drupalAttribute().setAttribute("id", "contributors"),
    items: [
      {
        content: [
          {
            variant: "horizontal",
            items: [
              {
                term: '<p class="mb-0 d-inline-block">Name</p>',
                definition:
                  "Commissariat à l’Energie Atomique <br>et aux Energies Alternatives",
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
                term: '<p class="mb-0 d-inline-block">Contribution</p>',
                definition: "EUR 297.700.00",
              },
            ],
          },
          {
            variant: "horizontal",
            items: [
              {
                term: '<p class="mb-0 d-inline-block">Name</p>',
                definition: getDummyText(1, false),
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
                term: '<p class="mb-0 d-inline-block">Contribution</p>',
                definition: "EUR 297.700.00",
              },
            ],
          },
          {
            variant: "horizontal",
            items: [
              {
                term: '<p class="mb-0 d-inline-block">Name</p>',
                definition: getDummyText(1, false),
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
                term: '<p class="mb-0 d-inline-block">Contribution</p>',
                definition: "EUR 297.700.00",
              },
            ],
          },
          {
            variant: "horizontal",
            items: [
              {
                term: '<p class="mb-0 d-inline-block">Name</p>',
                definition: getDummyText(1, false),
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
                term: '<p class="mb-0 d-inline-block">Contribution</p>',
                definition: "EUR 297.700.00",
              },
            ],
          },
        ],
      },
    ],
  },
  featured_lists: {
    title: "Lead contributor",
    items: [
      {
        content: [
          {
            variant: "horizontal",
            items: [
              {
                term: '<p class="mb-0 d-inline-block">Name</p>',
                definition:
                  "Commissariat à l’Energie Atomique <br>et aux Energies Alternatives",
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
                term: '<p class="mb-0 d-inline-block">Contribution</p>',
                definition: "EUR 297.700.00",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default data;
