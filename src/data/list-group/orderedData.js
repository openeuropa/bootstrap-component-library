module.exports = {
  items: [
    {
      variant: "info",
      html: "Ordered Label",
    },
    {
      variant: "light",
      html: "Ordered Label",
    },
    {
      variant: "dark",
      html: "Ordered Label",
    },
    {
      variant: "success",
      html: "Ordered Label",
    },
    {
      required: false,
      label: "Example form input",
      readonly: false,
      id: "example-form-input-1",
      size: "sm",
      input: true,
      type: "radio",
      remove_wrapper: true,
    },
    {
      variant: "warning",
      html:
        '<div class="ms-2 me-auto"><div class="fw-bold">Subheading</div>Cras justo odio</div>',
      extra_classes: "d-flex justify-content-between align-items-center",
      badge: {
        label: "10",
        rounded_pill: true,
      },
    },
  ],
};
