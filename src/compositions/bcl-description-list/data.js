module.exports = {
  items: [
    {
      term: {
        label: "Only title label with icon",
        icon: {
          name: "geo-alt-fill",
          size: "xs",
          path: "/icons.svg",
        },
      },
      definition: [
        {
          label: "Description text goes here.",
        },
      ],
    },
    {
      term: [
        {
          label: "First title label",
        },
        {
          label: "Second title label",
          icon: {
            name: "geo-alt-fill",
            size: "xs",
            path: "/icons.svg",
          },
        },
      ],
      definition: [
        {
          label: "Description text goes here.",
        },
      ],
    },
    {
      term: {
        label: "Only title label",
      },
      definition: [
        {
          label: "Description text goes here.",
        },
        {
          label: "Description text goes here.",
        },
      ],
    },
  ],
};
