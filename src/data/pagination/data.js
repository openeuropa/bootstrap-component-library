module.exports = {
  aria_label: "Test aria label",
  enable_prev_next_icon: false,
  enable_first_last_icon: true,
  first: {
    label: "First",
    path: "#",
    icon: {
      name: "chevron-double-left",
      path: "/icons.svg",
      size: "fluid",
    },
  },
  prev: {
    label: "Previous",
    path: "#",
    icon: {
      name: "chevron-left",
      path: "/icons.svg",
      size: "fluid",
    },
  },
  next: {
    label: "Next",
    path: "#",
    icon: {
      name: "chevron-right",
      path: "/icons.svg",
      size: "fluid",
    },
  },
  last: {
    label: "Last",
    path: "#",
    icon: {
      name: "chevron-double-right",
      path: "/icons.svg",
      size: "fluid",
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
