const drupalAttribute = require("drupal-attribute");

module.exports = {
  data: {
    offcanvas: {
      id: "bcl-offcanvas",
      attributes: new drupalAttribute().addClass(
        "bcl-offcanvas offcanvas-start"
      ),
      extra_classes_close: "d-lg-none",
      extra_classes_header: "p-lg-0",
      with_body_scroll: true,
      title: {
        label: "Filter options",
        heading: 4,
        extra_classes: "mb-lg-4",
        id: "offcanvasExampleLabel",
      },
      search_form: {
        attributes: new drupalAttribute()
          .setAttribute("novalidate", true)
          .setAttribute("onsubmit", "return false;"),
        items: [
          [
            {
              classes: "mb-3 pb-3 border-bottom",
              input_type: "text",
              placeholder: "Search by name or surname",
              size: "sm",
            },
          ],
          [
            {
              classes: "mb-3",
              label: "Organisation",
              type: "select",
              size: "sm",
              attributes: new drupalAttribute(),
              options: [
                { value: 1, label: "a select option" },
                { value: 2, label: "another select option" },
                { value: 3, label: "another option" },
                { value: 4, label: "last option" },
              ],
            },
          ],
          [
            {
              classes: "mb-3",
              label: "Profile Type",
              type: "select",
              size: "sm",
              attributes: new drupalAttribute(),
              options: [
                { value: 1, label: "a select option" },
                { value: 2, label: "another select option" },
                { value: 3, label: "another option" },
                { value: 4, label: "last option" },
              ],
            },
          ],
          [
            {
              classes: "mb-3 pb-3 border-bottom",
              label: "Group",
              type: "select",
              size: "sm",
              attributes: new drupalAttribute(),
              options: [
                { value: 1, label: "a select option" },
                { value: 2, label: "another select option" },
                { value: 3, label: "another option" },
                { value: 4, label: "last option" },
              ],
            },
          ],
          [
            {
              classes: "mb-3",
              label: "Option 1",
              input_type: "text",
              placeholder: "Placeholder",
              size: "sm",
            },
          ],
          [
            {
              classes: "mb-3",
              label: "Option 2",
              input_type: "text",
              placeholder: "Placeholder",
              size: "sm",
            },
          ],
        ],
        submit: {
          multiple: true,
          wrapper: "mt-4",
          items: [
            {
              label: "Refine",
              type: "submit",
              variant: "primary",
              attributes: new drupalAttribute().addClass("me-2"),
            },
            {
              label: "Clear",
              type: "submit",
              variant: "secondary",
            },
          ],
        },
      },
    },
    users: [
      {
        picture: {
          path: "https://picsum.photos/50/50?random=1",
          alt: "Stefan Mayer profile picture",
        },
        name: {
          text: "Stefan Mayer",
          link: "example.html",
        },
        infos: ["DG Test", "Manager"],
      },
      {
        picture: {
          path: "https://picsum.photos/50/50?random=2",
          alt: "Ajdur Tichar profile picture",
        },
        name: {
          text: "Ajdur Tichar",
          link: "example.html",
        },
        infos: ["DG Test", "Manager"],
      },
      {
        picture: {
          path: "https://picsum.photos/50/50?random=3",
          alt: "Szép Mara profile picture",
        },
        name: {
          text: "Szép Mara",
          link: "example.html",
        },
        infos: ["DG Test", "Manager"],
      },
      {
        picture: {
          path: "https://picsum.photos/50/50?random=4",
          alt: "Daniel Cardoso Rocha profile picture",
        },
        name: {
          text: "Daniel Cardoso Rocha",
          link: "example.html",
        },
        infos: ["DG Test", "Manager"],
      },
      {
        picture: {
          path: "https://picsum.photos/50/50?random=5",
          alt: "Aurelia Panicucci profile picture",
        },
        name: {
          text: "Aurelia Panicucci",
          link: "example.html",
        },
        infos: ["DG Test", "Manager"],
      },
      {
        picture: {
          path: "https://picsum.photos/50/50?random=6",
          alt: "Felicyta Kowalska profile picture",
        },
        name: {
          text: "Felicyta Kowalska",
          link: "example.html",
        },
        infos: ["DG Test", "Manager"],
      },
    ],
    pagination: {
      attributes: new drupalAttribute().addClass(["mt-5"]),
      alignment: "center",
      prev: {
        label: "Previous",
        path: "#",
      },
      next: {
        label: "Next",
        path: "#",
      },
      items: [
        {
          label: "1",
          path: "#",
          active: true,
        },
        {
          label: "2",
          path: "#",
        },
        {
          label: "3",
          path: "#",
        },
        {
          label: "4",
          path: "#",
        },
        {
          label: "5",
          path: "#",
        },
      ],
    },
    filter_button: {
      label: "Filter options",
      type: "button",
      variant: "primary",
      attributes: new drupalAttribute()
        .addClass(["d-lg-none", "w-100", "mb-4"])
        .setAttribute("data-bs-toggle", "offcanvas")
        .setAttribute("data-bs-target", "#bcl-offcanvas")
        .setAttribute("aria-controls", "bcl-offcanvas"),
      icon: {
        name: "sliders",
        size: "xs",
        attributes: new drupalAttribute().addClass(["ms-2"]),
      },
    },
    badges: [
      {
        label: "Name",
        dismissible: true,
        attributes: new drupalAttribute().addClass(["me-2"]),
      },
      {
        label: "Organisation",
        dismissible: true,
        attributes: new drupalAttribute().addClass(["me-2"]),
      },
    ],
    sort_select: {
      label: "Sort by",
      size: "sm",
      attributes: new drupalAttribute().addClass("mb-4"),
      options: [
        { value: 1, label: "a select option" },
        { value: 2, label: "another select option" },
        { value: 3, label: "another option" },
        { value: 4, label: "last option" },
        { label: "A-Z", selected: true },
      ],
    },
  },
};
