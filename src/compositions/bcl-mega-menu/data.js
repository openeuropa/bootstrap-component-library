module.exports = {
  trigger: {
    label: "A link with dropdown",
    path: "/example.html",
  },
  id: "dropdown-megamenu",
  content_link: {
    label: "Discover more",
    path: "/example.html",
    icon: {
      name: "arrow-right",
    },
  },
  content_block:
    "<h4>Mega Menu Content Title</h4><p>Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
  items: [
    {
      id: "dropdown-megamenu-inner",
      trigger: {
        label: "Base Category Item",
        path: "/example.html",
      },
      items: [
        {
          label: "Base Sub Category Item",
          path: "/example.html",
        },
        {
          label: "Base Sub Category Item",
          path: "/example.html",
        },
        {
          label: "Base Sub Category Item",
          path: "/example.html",
        },
        {
          label: "Base Sub Category Item",
          path: "/example.html",
        },
        {
          label: "Base Sub Category Item",
          path: "/example.html",
        },
      ],
    },
    {
      label: "Base Category Item",
      path: "/example.html",
    },
    {
      id: "dropdown-megamenu-inner-2",
      trigger: {
        label: "Base Category Item",
        path: "/example.html",
      },
      collapse:
        "<a href='#' class='mb-3 d-block'> Example link</a><img src='https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg' alt='image'>",
      items: [
        {
          label: "Base Sub Category Item",
          path: "/example.html",
        },
        {
          label: "Base Sub Category Item",
          path: "/example.html",
        },
        {
          label: "Base Sub Category Item",
          path: "/example.html",
        },
        {
          label: "Base Sub Category Item",
          path: "/example.html",
        },
        {
          label: "Base Sub Category Item",
          path: "/example.html",
        },
      ],
    },
    {
      label: "Base Category Item",
      path: "/example.html",
    },
    {
      label: "Base Category Item",
      path: "/example.html",
    },
    {
      label: "Base Category Item",
      path: "/example.html",
    },
  ],
};
