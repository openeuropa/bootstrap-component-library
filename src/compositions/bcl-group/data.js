const drupalAttribute = require("drupal-attribute");

module.exports = {
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
  pagination: {
    attributes: new drupalAttribute().addClass(["mt-4"]),
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
    size: "lg",
    attributes: new drupalAttribute()
      .addClass(["d-lg-none", "w-100", "mb-3-5"])
      .setAttribute("data-bs-toggle", "offcanvas")
      .setAttribute("data-bs-target", "#bcl-offcanvas")
      .setAttribute("aria-controls", "bcl-offcanvas"),
    icon_position: "before",
    icon: {
      name: "filter",
      path: "/icons.svg",
      size: "xs",
    },
  },
  badges: [
    {
      label: "Group name",
      background: "light",
      attributes: new drupalAttribute().addClass(["me-2", "text-dark", "mb-2"]),
    },
    {
      label: "Restricted",
      background: "light",
      dismissible: true,
      icons_path: "/icons.svg",
      attributes: new drupalAttribute().addClass(["me-2", "text-dark", "mb-2"]),
    },
    {
      label: "Private",
      background: "light",
      dismissible: true,
      icons_path: "/icons.svg",
      attributes: new drupalAttribute().addClass(["me-2", "text-dark", "mb-2"]),
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
};
