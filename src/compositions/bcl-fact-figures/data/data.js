const drupalAttribute = require("drupal-attribute");

module.exports = {
  attributes: new drupalAttribute(),
  responsive_columns: 3,
  icons_path: "/icons.svg",
  equal_height: true,
  display_icons: true,
  title: "Fact and figures block",
  items: [
    {
      icon: {
        name: "x-diamond-fill",
        size: "l",
        path: "/icons.svg",
      },
      subtitle: "Jira Tickets",
      title: "1529 JIRA Ticket",
      description:
        "Nunc condimentum sapien ut nibh finibus suscipit vitae at justo. Morbi quis odio faucibus, commodo tortor id, elementum libero.",
    },
    {
      icon: {
        name: "ui-checks",
      },
      subtitle: "Feature tickets",
      title: "337 Features",
      description: "Turpis varius congue venenatis, erat dui feugiat felis.",
    },
    {
      icon: {
        name: "wallet-fill",
        size: "l",
        path: "/icons.svg",
      },
      subtitle: "Test tickets",
      title: "107 Tests",
      description:
        "Cras vestibulum efficitur mi, quis porta tellus rutrum ut. Quisque at pulvinar sem.",
    },
    {
      icon: {
        name: "file-code-fill",
        size: "l",
        path: "/icons.svg",
      },
      subtitle: "Test variants",
      title: "5670 Variants",
      description:
        "Aliquam lacinia diam eu sem malesuada, in interdum ante bibendum.",
    },
    {
      icon: {
        name: "puzzle-fill",
        size: "l",
        path: "/icons.svg",
      },
      subtitle: "Jira ticket",
      title: "345 Dev Ticket",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec lectus tortor.",
    },
    {
      icon: {
        name: "eye-fill",
        size: "l",
        path: "/icons.svg",
      },
      subtitle: "Figma components",
      title: "43 Components",
      description:
        "Sed efficitur bibendum rutrum. Nunc feugiat congue augue ac consectetur.",
    },
  ],
  link_more: {
    path: "/example",
    label: "Read more",
  },
};
