module.exports = {
  label: "A link with tooltip",
  path: "/example.html",
  extra_attributes: [
    {
      name: "title",
      value: "This is a tooltip",
    },
    {
      name: "data-bs-placement",
      value: "bottom",
    },
    {
      name: "data-bs-toggle",
      value: "tooltip",
    },
    {
      name: "role",
      value: "button",
    },
  ],
};
