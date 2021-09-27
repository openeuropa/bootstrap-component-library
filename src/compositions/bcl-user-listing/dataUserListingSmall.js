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
    cards: [
      {
        attributes: new drupalAttribute().addClass([
          "border-0",
          "mb-3",
          "d-flex",
          "flex-row",
          "align-items-center",
        ]),
        extra_classes_body: "flex-grow-1 ms-3-5 p-0",
        title: {
          content: "Stefan Mayer",
          tag: "a",
          classes: "fs-5 text-decoration-none d-block mb-0",
          attributes: new drupalAttribute().setAttribute(
            "href",
            "example.html"
          ),
        },
        content:
          "<span class='text-muted me-4-5'>DG Test</span><span class='text-muted me-4-5'>Manager</span>",
        extra_classes_image: "rounded-pill",
        image: {
          path: "https://picsum.photos/50/50?random=1",
          alt: "alt img",
          position: "left",
          size_auto: true,
        },
      },
      {
        attributes: new drupalAttribute().addClass([
          "border-0",
          "mb-3",
          "d-flex",
          "flex-row",
          "align-items-center",
        ]),
        extra_classes_body: "flex-grow-1 ms-3-5 p-0",
        title: {
          content: "Ajdur Tichar",
          tag: "a",
          classes: "fs-5 text-decoration-none d-block mb-0",
          attributes: new drupalAttribute().setAttribute(
            "href",
            "example.html"
          ),
        },
        content:
          "<span class='text-muted me-4-5'>DG Test</span><span class='text-muted me-4-5'>Manager</span>",
        extra_classes_image: "rounded-pill",
        image: {
          path: "https://picsum.photos/50/50?random=2",
          alt: "alt img",
          position: "left",
          size_auto: true,
        },
      },
      {
        attributes: new drupalAttribute().addClass([
          "border-0",
          "mb-3",
          "d-flex",
          "flex-row",
          "align-items-center",
        ]),
        extra_classes_body: "flex-grow-1 ms-3-5 p-0",
        title: {
          content: "Szép Mara",
          tag: "a",
          classes: "fs-5 text-decoration-none d-block mb-0",
          attributes: new drupalAttribute().setAttribute(
            "href",
            "example.html"
          ),
        },
        content:
          "<span class='text-muted me-4-5'>DG Test</span><span class='text-muted me-4-5'>Manager</span>",
        extra_classes_image: "rounded-pill",
        image: {
          path: "https://picsum.photos/50/50?random=3",
          alt: "alt img",
          position: "left",
          size_auto: true,
        },
      },
      {
        attributes: new drupalAttribute().addClass([
          "border-0",
          "mb-3",
          "d-flex",
          "flex-row",
          "align-items-center",
        ]),
        extra_classes_body: "flex-grow-1 ms-3-5 p-0",
        title: {
          content: "Daniel Cardoso Rocha",
          tag: "a",
          classes: "fs-5 text-decoration-none d-block mb-0",
          attributes: new drupalAttribute().setAttribute(
            "href",
            "example.html"
          ),
        },
        content:
          "<span class='text-muted me-4-5'>DG Test</span><span class='text-muted me-4-5'>Manager</span>",
        extra_classes_image: "rounded-pill",
        image: {
          path: "https://picsum.photos/50/50?random=4",
          alt: "alt img",
          position: "left",
          size_auto: true,
        },
      },
      {
        attributes: new drupalAttribute().addClass([
          "border-0",
          "mb-3",
          "d-flex",
          "flex-row",
          "align-items-center",
        ]),
        extra_classes_body: "flex-grow-1 ms-3-5 p-0",
        title: {
          content: "Aurelia Panicucci",
          tag: "a",
          classes: "fs-5 text-decoration-none d-block mb-0",
          attributes: new drupalAttribute().setAttribute(
            "href",
            "example.html"
          ),
        },
        content:
          "<span class='text-muted me-4-5'>DG Test</span><span class='text-muted me-4-5'>Manager</span>",
        extra_classes_image: "rounded-pill",
        image: {
          path: "https://picsum.photos/50/50?random=5",
          alt: "alt img",
          position: "left",
          size_auto: true,
        },
      },
      {
        attributes: new drupalAttribute().addClass([
          "border-0",
          "mb-3",
          "d-flex",
          "flex-row",
          "align-items-center",
        ]),
        extra_classes_body: "flex-grow-1 ms-3-5 p-0",
        title: {
          content: "Felicyta Kowalska",
          tag: "a",
          classes: "fs-5 text-decoration-none d-block mb-0",
          attributes: new drupalAttribute().setAttribute(
            "href",
            "example.html"
          ),
        },
        content:
          "<span class='text-muted me-4-5'>DG Test</span><span class='text-muted me-4-5'>Manager</span>",
        extra_classes_image: "rounded-pill",
        image: {
          path: "https://picsum.photos/50/50?random=6",
          alt: "alt img",
          position: "left",
          size_auto: true,
        },
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
