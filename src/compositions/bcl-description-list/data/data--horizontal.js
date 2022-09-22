module.exports = {
  variant: "horizontal",
  items: [
    {
      term: [
        {
          label: "<p class='mb-0'>Only title label with <em>icon</em></p>",
          icon: {
            name: "geo-alt-fill",
            size: "xs",
            path: "/icons.svg",
          },
        },
      ],
      definition:
        "Long Description text goes here.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim, quam at sollicitudin volutpat, ipsum arcu maximus massa, quis egestas diam tellus vitae nulla.",
    },
    {
      term: [
        {
          label: "First title label",
          color: "bg-success",
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
      definition: "Description text goes here.",
    },
    {
      term: '<svg class="me-2 bi icon--fluid"><use xlink:href="/icons.svg#printer-fill"></use></svg>Only title <strong>label</strong> with <em>inline icon</em>',
      definition: [
        {
          label: "Description text goes here.",
        },
        {
          label: "Description text goes here.",
          icon: {
            name: "geo-alt-fill",
            size: "xs",
            path: "/icons.svg",
          },
        },
      ],
    },
  ],
};
