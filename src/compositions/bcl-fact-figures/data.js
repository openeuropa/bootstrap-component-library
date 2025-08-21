import { getDummyText } from "@openeuropa/bcl-data-utils";

const data = {
  responsive_columns: 3,
  icon_path: "/icons.svg",
  equal_height: true,
  display_icons: true,
  title_tag: "h2",
  items: [
    {
      icon: {
        name: "sticky",
        size: "l",
        path: "/icons.svg",
      },
      subtitle: "Jira Tickets",
      title: "1529 JIRA Ticket",
      description: getDummyText(2),
    },
    {
      icon: {
        name: "inboxes",
        path: "/icons.svg",
      },
      subtitle: "Feature tickets",
      title: "337 Features",
      description: getDummyText(1),
    },
    {
      icon: {
        name: "shield-check",
        size: "l",
        path: "/icons.svg",
      },
      subtitle: "Test tickets",
      title: "107 Tests",
      description: getDummyText(2),
    },
    {
      icon: {
        name: "file-earmark-code",
        size: "l",
        path: "/icons.svg",
      },
      subtitle: "Test variants",
      title: "5670 Variants",
      description: getDummyText(3),
    },
    {
      icon: {
        name: "inbox",
        size: "l",
        path: "/icons.svg",
      },
      subtitle: "Jira ticket",
      title: "345 Dev Ticket",
      description: getDummyText(2),
    },
    {
      icon: {
        name: "eye",
        size: "l",
        path: "/icons.svg",
      },
      subtitle: "Figma components",
      title: "43 Components",
      description: getDummyText(1),
    },
  ],
  link_more: {
    path: "/example.html",
    label: "Read more",
  },
};

export default data;
