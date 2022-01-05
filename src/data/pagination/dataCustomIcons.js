module.exports = {
  aria_label: "Test aria label",
  enable_icon: true,
  prev: {
    label: "Previous",
    path: "#",
    aria_label: "previous",
    icon: {
      name: "arrow-left-short",
      path: "/icons.svg",
    },
  },
  next: {
    label: "Next",
    path: "#",
    aria_label: "next",
    icon: {
      name: "arrow-right-short",
      path: "/icons.svg",
    },
  },
  items: [
    {
      label: "1",
      path: "#",
      disabled: true,
    },
    {
      label: "2",
      path: "#",
      active: true,
    },
    {
      label: "3",
      path: "#",
    },
  ],
};
