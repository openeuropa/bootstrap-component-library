module.exports = {
  items: [
    {
      term: {
        label: "<p class='d-inline-block mb-0'>Only title label with icon</p>",
        icon: {
          name: "geo-alt-fill",
          size: "xs",
          path: "/icons.svg",
        },
      },
      definition: "<p class='mb-2'>Description text goes here.</p>",
    },
    {
      term: [
        {
          label: "First title label",
        },
        {
          label: '<p class="mb-0 d-inline-block">Second title label</p>',
          icon: {
            name: "geo-alt-fill",
            size: "xs",
            path: "/icons.svg",
          },
        },
      ],
      definition: "<p class='mb-2'>Description text goes here.</p>",
    },
    {
      term: {
        label: "Only title label",
      },
      definition: [
        {
          label: "<p class='mb-2'>Description text goes here.</p>",
        },
        {
          label: "<p class='mb-2'>Description text goes here.</p>",
        },
      ],
    },
  ],
};
