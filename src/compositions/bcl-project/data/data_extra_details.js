const drupalAttribute = require("drupal-attribute");

module.exports = {
  banner: {
    background: "gray",
    title: {
      content: "Life IP Artisan",
    },
    badges: [
      {
        label: "Project type",
        outline: true,
        rounded_pill: true,
      },
    ],
    content:
      "<p>Achieving Resiliency by Triggering Implementation of nature-based Solutions for climate Adaptation at a National scale. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
    image: {
      path: "https://picsum.photos/255/255?random=6",
      alt: "alt img",
    },
    button: {
      label: "Action button",
      variant: "secondary",
      attributes: new drupalAttribute().addClass("mb-3"),
    },
  },
  sidebar: {
    title: "Page content",
    id: "bcl-inpage-navigation",
    attributes: new drupalAttribute().addClass(["d-none", "d-lg-block"]),
    links: [
      {
        label: "Project detail",
        path: "#project-details",
      },
      {
        label: "Summary",
        path: "#summary",
      },
      {
        label: "Objective",
        path: "#objective",
      },
      {
        label: "Impact",
        path: "#impact",
      },
      {
        label: "Contributors",
        path: "#contributors",
      },
      {
        label: "Achievements and milestones",
        path: "#achievements",
      },
      {
        label: "Gallery",
        path: "#gallery",
      },
    ],
  },
};
