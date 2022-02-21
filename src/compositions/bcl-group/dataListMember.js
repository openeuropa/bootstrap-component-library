const drupalAttribute = require("drupal-attribute");

module.exports = {
  sidebar: {
    id: "bcl-offcanvas",
    attributes: new drupalAttribute().addClass("bcl-offcanvas offcanvas-start"),
    extra_classes_close: "d-lg-none",
    extra_classes_header: "pb-2-5 p-lg-0",
    with_body_scroll: true,
    title: {
      label: "Filter options",
      heading: 4,
      extra_classes: "mb-lg-4",
    },
    search_form: {
      attributes: new drupalAttribute()
        .setAttribute("novalidate", true)
        .setAttribute("onsubmit", "return false;"),
      items: [
        [
          {
            type: "fieldset",
            classes: "col-sm-10",
            legend: "Search by name",
            fieldset_classes: "mb-3",
            legend_classes: "col-form-label",
          },
          {
            classes: "mb-3",
            input_type: "text",
            placeholder: "Name",
          },
        ],
        [
          {
            type: "fieldset",
            classes: "col-sm-10",
            legend: "Search by email",
            fieldset_classes: "mb-3",
            legend_classes: "col-form-label",
          },
          {
            classes: "mb-3",
            input_type: "text",
            placeholder: "Email",
          },
        ],
      ],
      submit: {
        multiple: true,
        wrapper: "mt-4 d-grid d-md-block",
        items: [
          {
            label: "Refine",
            type: "submit",
            variant: "primary",
            attributes: new drupalAttribute().addClass([
              "me-md-3",
              "mb-3-5",
              "mb-md-0",
            ]),
          },
          {
            label: "Clear",
            type: "submit",
            variant: "light",
          },
        ],
      },
    },
  },
  listing: {
    variant: "default-1-col",
    alignment: "center",
    remove_horizontal_spacer: true,
    items: [
      {
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        title: {
          content:
            "<a href='/example.html' class='standalone'>Stefan Mayer</a>",
        },
        content:
          "<span class='text-muted me-2'>DG Demo</span><span class='text-muted me-2'>Director</span>",
        image: {
          path: "https://picsum.photos/200/160?random=1",
          alt: "alt img",
          position: "top",
        },
      },
      {
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        title: {
          content:
            "<a href='/example.html' class='standalone'>Adjur Tichar</a>",
        },
        content:
          "<span class='text-muted me-2'>DG Demo</span><span class='text-muted me-2'>Director</span>",
        image: {
          path: "https://picsum.photos/200/160?random=2",
          alt: "alt img",
          position: "top",
        },
      },
      {
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        title: {
          content: "<a href='/example.html' class='standalone'>Szép Mara</a>",
        },
        content:
          "<span class='text-muted me-2'>DG Demo</span><span class='text-muted me-2'>Director</span>",
        image: {
          path: "https://picsum.photos/200/160?random=3",
          alt: "alt img",
          position: "top",
        },
      },
      {
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        title: {
          content:
            "<a href='/example.html' class='standalone'>Daniel Cardoso Rocha</a>",
        },
        content:
          "<span class='text-muted me-2'>DG Demo</span><span class='text-muted me-2'>Director</span>",
        image: {
          path: "https://picsum.photos/200/160?random=4",
          alt: "alt img",
          position: "top",
        },
      },
      {
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        title: {
          content:
            "<a href='/example.html' class='standalone'>Aurelia Panicucci</a>",
        },
        content:
          "<span class='text-muted me-2'>DG Demo</span><span class='text-muted me-2'>Director</span>",
        image: {
          path: "https://picsum.photos/200/160?random=5",
          alt: "alt img",
          position: "top",
        },
      },
      {
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        title: {
          content:
            "<a href='/example.html' class='standalone'>Felicyta Kowalska</a>",
        },
        content:
          "<span class='text-muted me-2'>DG Demo</span><span class='text-muted me-2'>Director</span>",
        image: {
          path: "https://picsum.photos/200/160?random=6",
          alt: "alt img",
          position: "top",
        },
      },
      {
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        title: {
          content:
            "<a href='/example.html' class='standalone'>Lorenzo Olson</a>",
        },
        content:
          "<span class='text-muted me-2'>DG Demo</span><span class='text-muted me-2'>Director</span>",
        image: {
          path: "https://picsum.photos/200/160?random=7",
          alt: "alt img",
          position: "top",
        },
      },
      {
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        title: {
          content:
            "<a href='/example.html' class='standalone'>Nino Treviño Montalvo</a>",
        },
        content:
          "<span class='text-muted me-2'>DG Demo</span><span class='text-muted me-2'>Director</span>",
        image: {
          path: "https://picsum.photos/200/160?random=8",
          alt: "alt img",
          position: "top",
        },
      },
      {
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        title: {
          content:
            "<a href='/example.html' class='standalone'>José Luis Pabón Barrios</a>",
        },
        content:
          "<span class='text-muted me-2'>DG Demo</span><span class='text-muted me-2'>Director</span>",
        image: {
          path: "https://picsum.photos/200/160?random=9",
          alt: "alt img",
          position: "top",
        },
      },
      {
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        title: {
          content:
            "<a href='/example.html' class='standalone'>Maddison Marsh</a>",
        },
        content:
          "<span class='text-muted me-2'>DG Demo</span><span class='text-muted me-2'>Director</span>",
        image: {
          path: "https://picsum.photos/200/160?random=4",
          alt: "alt img",
          position: "top",
        },
      },
    ],
  },
};
