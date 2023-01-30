const drupalAttribute = require("drupal-attribute");
const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  form: {
    attributes: new drupalAttribute().addClass("needs-validation"),
    items: [
      [
        {
          type: "fieldset",
          classes: "col-sm-10",
          legend: "Your content subscription",
          legend_classes: "col-form-label",
        },
        {
          input_type: "checkbox",
          label: "First check",
          id: "exampleInputRadios1",
          value: "option1",
          wrapper_classes: "mb-3",
        },
        {
          input_type: "checkbox",
          label: "Second check",
          id: "exampleInputRadios2",
          value: "option2",
          wrapper_classes: "mb-3",
        },
        {
          input_type: "checkbox",
          label: "Third check",
          id: "exampleInputRadios3",
          value: "option3",
          wrapper_classes: "mb-5",
        },
      ],
      [
        {
          wrapper_classes: "mb-3",
          type: "select",
          multiple: true,
          options: [
            { value: 1, label: "a select option" },
            { value: 2, label: "another select option" },
            { value: 3, label: "another option" },
            { value: 4, label: "last option" },
          ],
          label: "Choose the language(s) of your choice",
          attributes: new drupalAttribute().addClass("multi-select"),
        },
      ],
    ],
  },
  table: {
    alignment: "middle",
    table_head: {
      variant: "light",
      cells: [
        {
          content: "<input type='checkbox'>",
        },
        {
          content:
            'TITLE<svg class="ms-2-5 bi icon--fluid text-muted"><use xlink:href="/icons.svg#caret-down-fill"></use></svg>',
        },
        {
          content: "OPERATIONS",
        },
      ],
    },
    rows: [
      {
        cells: [
          {
            content: "<input type='checkbox'>",
          },
          {
            content: getDummyText(1),
          },
          {
            content:
              '<button class="btn btn-danger" type="button"><svg class="me-2-5 bi icon--fluid"><use xlink:href="/icons.svg#trash-fill"></use></svg>Delete</button>',
          },
        ],
      },
      {
        cells: [
          {
            content: "<input type='checkbox'>",
          },
          {
            content: getDummyText(1),
          },
          {
            content:
              '<button class="btn btn-danger" type="button"><svg class="me-2-5 bi icon--fluid"><use xlink:href="/icons.svg#trash-fill"></use></svg>Delete</button>',
          },
        ],
      },
      {
        cells: [
          {
            content: "<input type='checkbox'>",
          },
          {
            content: getDummyText(1),
          },
          {
            content:
              '<button class="btn btn-danger" type="button"><svg class="me-2-5 bi icon--fluid"><use xlink:href="/icons.svg#trash-fill"></use></svg>Delete</button>',
          },
        ],
      },
      {
        cells: [
          {
            content: "<input type='checkbox'>",
          },
          {
            content: getDummyText(1),
          },
          {
            content:
              '<button class="btn btn-danger" type="button"><svg class="me-2-5 bi icon--fluid"><use xlink:href="/icons.svg#trash-fill"></use></svg>Delete</button>',
          },
        ],
      },
    ],
  },
  submit: {
    label: "Save changes",
    type: "submit",
    attributes: new drupalAttribute().addClass("mt-5"),
  },
};
