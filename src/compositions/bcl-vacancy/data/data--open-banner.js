import { getDummyText } from "@openeuropa/bcl-data-utils";

const data = {
  background: "gray",
  title: "Senior Expert on Internal Models",
  badges: [
    {
      label: "Opened",
      background: "info",
      rounded_pill: true,
    },
    {
      label: "Type 2",
      outline: true,
      rounded_pill: true,
    },
  ],
  content: getDummyText(3, true),
  action_bar: `<div class="d-grid d-md-block mt-3-5"><button class="btn btn-primary btn-md" type="button"><svg class="me-2-5 bi icon--fluid"><use xlink:href="/icons.svg#pencil-fill"></use></svg>Apply now</button></div>`,
};

export default data;
