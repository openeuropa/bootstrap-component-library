module.exports = {
  label: "A link with tooltip",
  path: "/example.html",
  toggle: true,
  toggle_type: "tooltip",
  extra_attributes: [
    {
      name: "title",
      value: "This is a tooltip",
    },
    {
      name: "data-bs-placement",
      value: "bottom",
    },
  ],
};
