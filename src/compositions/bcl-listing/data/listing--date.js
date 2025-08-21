import drupalAttribute from "drupal-attribute";
import { getDummyText } from "@openeuropa/bcl-data-utils";

const data = {
  variant: "default-2-col",
  title: "Listing item block title",
  image_size: "small",
  link: {
    path: "/example.html",
    label: "Listing item block CTA",
    icon: {
      path: "/icons.svg",
    },
  },
  items: [
    {
      title: '<a href="/example.html" class="standalone">Card title</a>',
      text: {
        content: getDummyText(3),
        classes: "mb-3",
      },
      date: {
        year: "2021",
        month: "Oct",
        day: "17",
        end_day: "20",
        end_month: "Oct",
      },
      content: `<div>
            <span class="text-muted d-lg-inline d-block me-4 mb-2 mb-md-0">Various time (see detail)</span>
            <span class="text-muted d-lg-inline d-block me-4 mb-2 mb-md-0">Barcelona, Spain</span>
            <span class="d-lg-inline d-block text-muted mb-2 mb-md-0">Published: 3 September 2020</span>
          </div>`,
      badges: [
        {
          rounded_pill: true,
          label: "Culture",
          outline: true,
          attributes: new drupalAttribute().addClass(["me-2"]),
        },
        {
          rounded_pill: true,
          outline: true,
          label: "Technology",
          attributes: new drupalAttribute().addClass(["me-2"]),
        },
      ],
    },
    {
      title: '<a href="/example.html" class="standalone">Card title</a>',
      text: {
        content: getDummyText(2),
        classes: "mb-3",
      },
      date: {
        year: "2021",
        month: "Oct",
        day: "17",
      },
      content: `<div>
            <span class="text-muted d-lg-inline d-block me-4 mb-2 mb-md-0">08.00 - 18.00 (CET)</span>
            <span class="text-muted d-lg-inline d-block me-4 mb-2 mb-md-0">Barcelona, Spain</span>
            <span class="d-lg-inline d-block text-muted mb-2 mb-md-0">Published: 3 September 2020</span>
          </div>`,
      badges: [
        {
          rounded_pill: true,
          label: "Culture",
          outline: true,
          attributes: new drupalAttribute().addClass(["me-2"]),
        },
        {
          rounded_pill: true,
          label: "Type 2",
          outline: true,
          attributes: new drupalAttribute().addClass(["me-2"]),
        },
        {
          rounded_pill: true,
          label: "Type 3",
          outline: true,
          attributes: new drupalAttribute().addClass(["me-2"]),
        },
      ],
    },
    {
      title: "Title card",
      text: {
        content: getDummyText(3),
        classes: "mb-3",
      },
      date: {
        year: "2021",
        month: "Oct",
        day: "17",
      },
      content: `<div>
            <span class="text-muted d-lg-inline d-block me-4 mb-2 mb-md-0">08.00 - 18.00 (CET)</span>
            <span class="text-muted d-lg-inline d-block me-4 mb-2 mb-md-0">Barcelona, Spain</span>
            <span class="d-lg-inline d-block text-muted mb-2 mb-md-0">Published: 3 September 2020</span>
          </div>`,
      badges: [
        {
          rounded_pill: true,
          label: "Culture",
          outline: true,
          attributes: new drupalAttribute().addClass(["me-2"]),
        },
        {
          rounded_pill: true,
          label: "Type 2",
          outline: true,
          attributes: new drupalAttribute().addClass(["me-2"]),
        },
        {
          rounded_pill: true,
          label: "Type 3",
          outline: true,
          attributes: new drupalAttribute().addClass(["me-2"]),
        },
      ],
    },
    {
      title: '<a href="/example.html" class="standalone">Card title</a>',
      text: {
        content: getDummyText(4),
        classes: "mb-3",
      },
      date: {
        year: "2021",
        month: "Oct",
        day: "17",
      },
      content: `<div>
            <span class="text-muted d-lg-inline d-block me-4 mb-2 mb-md-0">08.00 - 18.00 (CET)</span>
            <span class="text-muted d-lg-inline d-block me-4 mb-2 mb-md-0">Barcelona, Spain</span>
            <span class="d-lg-inline d-block text-muted mb-2 mb-md-0">Published: 3 September 2020</span>
          </div>`,
      badges: [
        {
          rounded_pill: true,
          label: "Culture",
          outline: true,
          attributes: new drupalAttribute().addClass(["me-2"]),
        },
        {
          rounded_pill: true,
          label: "Type 2",
          outline: true,
          attributes: new drupalAttribute().addClass(["me-2"]),
        },
        {
          rounded_pill: true,
          label: "Type 3",
          outline: true,
          attributes: new drupalAttribute().addClass(["me-2"]),
        },
      ],
    },
    {
      title: '<a href="/example.html" class="standalone">Card title</a>',
      text: {
        content: getDummyText(5),
        classes: "mb-3",
      },
      date: {
        year: "2021",
        month: "Oct",
        day: "17",
      },
      content: `<div>
            <span class="text-muted d-lg-inline d-block me-4 mb-2 mb-md-0">08.00 - 18.00 (CET)</span>
            <span class="text-muted d-lg-inline d-block me-4 mb-2 mb-md-0">Barcelona, Spain</span>
            <span class="d-lg-inline d-block text-muted mb-2 mb-md-0">Published: 3 September 2020</span>
          </div>`,
      badges: [
        {
          rounded_pill: true,
          label: "Culture",
          outline: true,
          attributes: new drupalAttribute().addClass(["me-2"]),
        },
        {
          rounded_pill: true,
          label: "Type 2",
          outline: true,
          attributes: new drupalAttribute().addClass(["me-2"]),
        },
        {
          rounded_pill: true,
          label: "Type 3",
          outline: true,
          attributes: new drupalAttribute().addClass(["me-2"]),
        },
      ],
    },
    {
      title: '<a href="/example.html" class="standalone">Card title</a>',
      text: {
        content: getDummyText(3),
        classes: "mb-3",
      },
      date: {
        year: "2021",
        month: "Oct",
        day: "17",
      },
      content: `<div>
            <span class="text-muted d-lg-inline d-block me-4 mb-2 mb-md-0">08.00 - 18.00 (CET)</span>
            <span class="text-muted d-lg-inline d-block me-4 mb-2 mb-md-0">Barcelona, Spain</span>
            <span class="d-lg-inline d-block text-muted mb-2 mb-md-0">Published: 3 September 2020</span>
          </div>`,
      badges: [
        {
          rounded_pill: true,
          label: "Culture",
          outline: true,
          attributes: new drupalAttribute().addClass(["me-2"]),
        },
        {
          rounded_pill: true,
          label: "Type 2",
          outline: true,
          attributes: new drupalAttribute().addClass(["me-2"]),
        },
        {
          rounded_pill: true,
          label: "Type 3",
          outline: true,
          attributes: new drupalAttribute().addClass(["me-2"]),
        },
      ],
    },
  ],
};

export default data;
