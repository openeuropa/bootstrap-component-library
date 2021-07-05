const drupalAttribute = require("drupal-attribute");

module.exports = {
  caption: "List of users",
  attributes: new drupalAttribute(),
  table_head: {
    cells: [
      {
        content: "ID",
      },
      {
        content: "Name",
      },
      {
        content: "Description",
      },
      {
        content: "Position",
      },
    ],
  },
  table_footer: {
    cells: [
      {
        content: "ID",
      },
      {
        content: "Name",
      },
      {
        content: "Description",
      },
      {
        content: "Position",
      },
    ],
  },
  rows: [
    {
      cells: [
        {
          content: "1",
        },
        {
          content: "Name 1",
        },
        {
          content: "Description 1",
        },
        {
          content: "Position 1",
        },
      ],
    },
    {
      variant: "primary",
      active: true,
      cells: [
        {
          content: "2",
        },
        {
          content: "Name 2",
        },
        {
          content: "Description 2",
        },
        {
          content: "Position 2",
        },
      ],
    },
    {
      variant: "secondary",
      cells: [
        {
          content: "3",
        },
        {
          content: "Name 3",
        },
        {
          content: "Description 3",
        },
        {
          content: "Position 3",
        },
      ],
    },
  ],
};
