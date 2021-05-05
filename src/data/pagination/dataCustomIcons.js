module.exports = {
  aria_label: "Test aria label",
  enable_icon: true,
  prev: {
    label: "Previous",
    path: "#",
    icon: {
      name: "arrow-left-short",
      path: "boostrap-icons.svg",
    },
  },
  next: {
    label: "Next",
    path: "#",
    icon: {
      name: "arrow-right-short",
      path: "boostrap-icons.svg",
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
