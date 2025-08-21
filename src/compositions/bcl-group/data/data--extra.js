import drupalAttribute from "drupal-attribute";

const data = {
  banner: {
    main_title: "Group Name",
    actions: [
      {
        type: "dropdown",
        id: "dropdown-content",
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
            label: "Create an event",
            path: "#",
          },
          {
            label: "Add an article",
            button: true,
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
    attributes: new drupalAttribute()
      .addClass(["bcl__nav", "bg-gray", "mb-3-5", "mb-lg-5", "n-mx-container"])
      .setAttribute("aria-label", "content-navigation"),
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
        attributes: new drupalAttribute().setAttribute(
          "aria-label",
          "other-link",
        ),
      },
    ],
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
      icon_path: "/icons.svg",
      attributes: new drupalAttribute().addClass(["me-2", "text-dark", "mb-2"]),
    },
    {
      label: "Private",
      background: "light",
      dismissible: true,
      icon_path: "/icons.svg",
      attributes: new drupalAttribute().addClass(["me-2", "text-dark", "mb-2"]),
    },
  ],
};

export default data;
