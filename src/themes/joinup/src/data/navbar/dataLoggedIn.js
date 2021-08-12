const drupalAttribute = require("drupal-attribute");

module.exports = {
  attributes: new drupalAttribute(),
  breakpoint: "",
  brand: {
    src: "/src/themes/joinup/images/logo.svg",
    alt: "JoinUp logo",
    motto: "Interoperability solutions",
    link: "/example.html",
  },
  collapse_id: "navbar",
  list_id: "list",
  buttons: [
    {
      id: "notif",
      icon: {
        name: "bell-fill",
        path: "static/media/bootstrap/bootstrap-icons.svg",
      },
      type: "notifications",
      amount: "2",
      notifications: [
        {
          link: "/example.html",
          title: "Title of the notification",
          text: "Lorem ipsum dolor sit amet, consectet eusia adipiscing elit. Aenean euismod...",
          days_ago: "2",
          unread: true,
        },{
          link: "/example.html",
          title: "Title of the notification",
          text: "Lorem ipsum dolor sit amet, consectet eusia adipiscing elit. Aenean euismod...",
          days_ago: "3",
          unread: true,
        },{
          link: "/example.html",
          title: "Title of the notification",
          text: "Lorem ipsum dolor sit amet, consectet eusia adipiscing elit. Aenean euismod...",
          days_ago: "5",
          unread: false,
        },
      ],
      mark_all_as_read: "Mark all as read",
      days_ago: "d ago",
      see_all: {
        link: "/example.html",
        label: "See all"
      },
    },
    {
      id: "account",
      icon: {
        name: "person",
        path: "static/media/bootstrap/bootstrap-icons.svg",
      },
      label: "Logged in",
      type: "links",
      links: [
        {
          link: "/example",
          label: "My created content",
          extra_classes: "",
          separator: false,
        },
        {
          link: "/example",
          label: "My favourite topics",
          extra_classes: "",
          separator: false,
        },
        {
          link: "/example",
          label: "My subscriptions",
          extra_classes: "",
          separator: false,
        },
        {
          separator: true,
        },
        {
          link: "/example",
          label: "My profile",
          extra_classes: "",
          separator: false,
        },
        {
          separator: true,
        },
        {
          link: "/example",
          label: "Log out",
          extra_classes: "",
          separator: false,
        },
      ],
    },
  ],
};
