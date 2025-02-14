module.exports = {
  trigger: {
    label: "A link with dropdown",
    path: "/example.html",
  },
  id: "dropdown-megamenu",
  content_block:
    "<h4>Mega Menu Content Title</h4><p>Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
  items: [
    {
      id: "dropdown-megamenu-inner",
      trigger: {
        label: "A link with dropdown",
        path: "/example.html",
      },
      items: [
        {
          label: "I'm a link",
          path: "/example.html",
        },
        {
          label: "I'm a button",
          button: true,
        },
      ],
    },
    {
      label: "A simple link!",
      path: "/example.html",
    },
    {
      id: "dropdown-megamenu-inner-2",
      trigger: {
        label: "A link with dropdown and column",
        path: "/example.html",
      },
      collapse:
        "<a href='#' class='mb-3 d-block'> Example link</a><img src='https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg' alt='image'>",
      items: [
        {
          label: "I'm a link",
          path: "/example.html",
        },
        {
          label: "I'm a button",
          button: true,
        },
        {
          label: "I'm a disabled button",
          button: true,
          disabled: true,
        },
        {
          label: "I'm a active button",
          button: true,
        },
      ],
    },
    {
      label: "A simple link!",
      path: "/example.html",
    },
    {
      label: "A simple link!",
      path: "/example.html",
    },
    {
      label: "A simple link!",
      path: "/example.html",
    },
  ],
};
