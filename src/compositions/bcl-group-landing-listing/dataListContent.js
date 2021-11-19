const drupalAttribute = require("drupal-attribute");

module.exports = {
  data: {
    main_title: "Content in the group (18)",
    banner: {
      title: "Group Name",
      actions: [
        {
          type: "dropdown",
          id: "dropdown-1",
          remove_wrapper: true,
          trigger: {
            label: "Create content",
            path: "#",
            attributes: new drupalAttribute().addClass([
              "d-inline-block",
              "mt-3",
              "mt-md-0",
              "mb-4",
              "mb-md-0",
            ]),
          },
          items: [
            {
              label: "I'm a link",
              path: "#",
            },
            {
              label: "I'm a button",
              button: true,
            },
            {
              divider: true,
            },
            {
              label: "I'm a disabled button",
              button: true,
              disabled: true,
            },
            {
              label: "I'm a active button",
              button: true,
              active: true,
            },
          ],
        },
      ],
      content:
        "<h2 class='mb-0'>Group name</h2><div><a href='#'>Leave group</a><button></div>",
      extra_classes_body: "p-3-5",
      attributes: new drupalAttribute().addClass("border-0"),
    },
    navigation: {
      nav: true,
      tabs: true,
      attributes: new drupalAttribute().addClass([
        "bcl__nav",
        "bg-gray",
        "mb-3-5",
        "mb-lg-5",
        "n-mx-container",
      ]),
      items: [
        {
          label: "Home",
          path: "/example.html",
        },
        {
          label: "Members",
          path: "/example.html",
        },
        {
          label: "Content",
          path: "/example.html",
          active: true,
        },
        {
          id: "dropdown-1",
          link: true,
          dropdown: true,
          trigger: {
            label: "Links",
            path: "#",
            attributes: new drupalAttribute().addClass("nav-link"),
          },
          items: [
            {
              label: "I'm a link",
              path: "/example.html",
            },
            {
              label: "I'm a button",
              button: true,
            },
            {
              divider: true,
            },
            {
              label: "I'm a disabled button",
              button: true,
              disabled: true,
            },
            {
              label: "I'm a active button",
              button: true,
              active: true,
            },
          ],
        },
        {
          label: "Link",
          path: "/example.html",
        },
      ],
    },
    offcanvas: {
      id: "bcl-offcanvas",
      attributes: new drupalAttribute().addClass(
        "bcl-offcanvas offcanvas-start"
      ),
      extra_classes_close: "d-lg-none",
      extra_classes_header: "pb-2-5 p-lg-0",
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
              classes: "mb-3",
              label: "Content types",
              type: "select",
              attributes: new drupalAttribute(),
              options: [
                { value: 1, label: "a select option" },
                { value: 2, label: "another select option" },
                { value: 3, label: "another option" },
                { value: 4, label: "last option" },
                { label: "the selected option", selected: true },
              ],
            },
          ],
          [
            {
              classes: "mb-3",
              label: "Filter A",
              type: "select",
              attributes: new drupalAttribute().addClass("multi-select"),
              multiple: true,
              clean_class: true,
              options: [
                { value: 1, label: "a select option" },
                { value: 2, label: "another select option" },
                { value: 3, label: "another option" },
                { value: 4, label: "last option" },
                { label: "the selected option", selected: true },
              ],
            },
          ],
          [
            {
              type: "fieldset",
              classes: "col-sm-10",
              legend: "Filter B",
              fieldset_classes: "mb-3",
              legend_classes: "col-form-label",
            },
            {
              input_type: "checkbox",
              label: "Checked checkbox",
              checked: true,
            },
            {
              input_type: "checkbox",
              label: "Default checkbox",
            },
          ],
          [
            {
              type: "fieldset",
              legend: "Creation date (from)",
              legend_classes: "col-form-label",
            },
            {
              input_type: "date",
              attributes: new drupalAttribute().addClass("mb-2"),
            },
          ],
          [
            {
              type: "fieldset",
              legend: "Creation date (to)",
              fieldset_classes: "mb-3",
              legend_classes: "col-form-label",
            },
            {
              input_type: "date",
              attributes: new drupalAttribute().addClass("mb-2"),
            },
          ],
        ],
        submit: {
          multiple: true,
          wrapper: "mt-4 d-grid d-md-block",
          items: [
            {
              label: "Refine",
              type: "submit",
              variant: "primary",
              attributes: new drupalAttribute().addClass([
                "me-md-3",
                "mb-3-5",
                "mb-md-0",
              ]),
            },
            {
              label: "Clear",
              type: "submit",
              variant: "light",
            },
          ],
        },
      },
    },
    listing: {
      attributes: new drupalAttribute(),
      variant: "default-1-col",
      remove_horizontal_spacer: true,
      items: [
        {
          badges: [
            {
              label: "Public",
            },
          ],
          extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
          title: {
            content:
              "<a href='/example.html' class='text-underline-hover'>Group name</a>",
          },
          text: {
            classes: "mb-2",
            content:
              "Some quick example text to build on the card and title and make up the bulk of the cards content.",
          },
          content:
            "<span class='text-muted me-4'>8 hours ago</span><span class='text-muted me-4'>1 comment</span>",
          image: {
            path: "https://picsum.photos/160?random=1",
            alt: "alt img",
            position: "top",
          },
        },
        {
          badges: [
            {
              label: "Public",
            },
          ],
          extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
          title: {
            content:
              "<a href='/example.html' class='text-underline-hover'>Group name</a>",
          },
          text: {
            classes: "mb-2",
            content:
              "Some quick example text to build on the card and title and make up the bulk of the cards content.",
          },
          content:
            "<span class='text-muted me-4'>8 hours ago</span><span class='text-muted me-4'>1 comment</span>",
          image: {
            path: "https://picsum.photos/160?random=2",
            alt: "alt img",
            position: "top",
          },
        },
        {
          badges: [
            {
              label: "Public",
            },
          ],
          extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
          title: {
            content:
              "<a href='/example.html' class='text-underline-hover'>Group name</a>",
          },
          text: {
            classes: "mb-2",
            content:
              "Some quick example text to build on the card and title and make up the bulk of the cards content.",
          },
          content:
            "<span class='text-muted me-4'>8 hours ago</span><span class='text-muted me-4'>1 comment</span>",
          image: {
            path: "https://picsum.photos/160?random=3",
            alt: "alt img",
            position: "top",
          },
        },
        {
          badges: [
            {
              label: "Public",
            },
          ],
          extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
          title: {
            content:
              "<a href='/example.html' class='text-underline-hover'>Group name</a>",
          },
          text: {
            classes: "mb-2",
            content:
              "Some quick example text to build on the card and title and make up the bulk of the cards content.",
          },
          content:
            "<span class='text-muted me-4'>8 hours ago</span><span class='text-muted me-4'>1 comment</span>",
          image: {
            path: "https://picsum.photos/160?random=4",
            alt: "alt img",
            position: "top",
          },
        },
        {
          badges: [
            {
              label: "Public",
            },
          ],
          extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
          title: {
            content:
              "<a href='/example.html' class='text-underline-hover'>Group name</a>",
          },
          text: {
            classes: "mb-2",
            content:
              "Some quick example text to build on the card and title and make up the bulk of the cards content.",
          },
          content:
            "<span class='text-muted me-4'>8 hours ago</span><span class='text-muted me-4'>1 comment</span>",
          image: {
            path: "https://picsum.photos/160?random=5",
            alt: "alt img",
            position: "top",
          },
        },
        {
          badges: [
            {
              label: "Public",
            },
          ],
          extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
          title: {
            content:
              "<a href='/example.html' class='text-underline-hover'>Group name</a>",
          },
          text: {
            classes: "mb-2",
            content:
              "Some quick example text to build on the card and title and make up the bulk of the cards content.",
          },
          content:
            "<span class='text-muted me-4'>8 hours ago</span><span class='text-muted me-4'>1 comment</span>",
          image: {
            path: "https://picsum.photos/160?random=6",
            alt: "alt img",
            position: "top",
          },
        },
      ],
    },
    pagination: {
      attributes: new drupalAttribute().addClass(["mb-5", "mt-4"]),
      alignment: "center",
      border_top: true,
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
      ],
    },
    filter_button: {
      label: "Filter options",
      type: "button",
      variant: "light",
      attributes: new drupalAttribute()
        .addClass(["d-lg-none", "w-100", "mb-3-5"])
        .setAttribute("data-bs-toggle", "offcanvas")
        .setAttribute("data-bs-target", "#bcl-offcanvas")
        .setAttribute("aria-controls", "bcl-offcanvas"),
      icon_position: "before",
      icon: {
        name: "filter",
        size: "xs",
        attributes: new drupalAttribute().addClass(["ms-2"]),
      },
    },
    badges: [
      {
        label: "Group name",
        background: "light",
        attributes: new drupalAttribute().addClass([
          "me-2",
          "text-dark",
          "mb-2",
        ]),
      },
      {
        label: "Restricted",
        background: "light",
        dismissible: true,
        attributes: new drupalAttribute().addClass([
          "me-2",
          "text-dark",
          "mb-2",
        ]),
      },
      {
        label: "Private",
        background: "light",
        dismissible: true,
        attributes: new drupalAttribute().addClass([
          "me-2",
          "text-dark",
          "mb-2",
        ]),
      },
    ],
    sort_select: {
      label: "Sort&nbsp;by",
      attributes: new drupalAttribute().addClass("mb-4 mb-md-0 ms-md-4"),
      options: [
        { value: 1, label: "a select option" },
        { value: 2, label: "another select option" },
        { value: 3, label: "another option" },
        { value: 4, label: "last option" },
        { label: "Joined date", selected: true },
      ],
    },
  },
};
