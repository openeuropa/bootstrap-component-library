const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  background: "gray",
  title: "This is the title of this page",
  badges: [
    {
      label: "Category 1",
      outline: true,
      rounded_pill: true,
    },
    {
      label: "Category 2",
      outline: true,
      rounded_pill: true,
    },
  ],
  content: `<div class="mb-3"><span class="text-muted me-3">17 October 2019</span></div>${getDummyText(
    5,
    true
  )}`,
  image: {
    path: "https://picsum.photos/255/255",
    alt: "alt img",
  },
  image_size: "lg",
  action_bar: `<div class="d-flex justify-content-end mt-2 align-items-center">
      <button class="w-auto me-3 btn btn-outline-primary btn-md" type="button">Print<svg class="ms-2-5 bi icon--fluid"><use xlink:href="/icons.svg#printer-fill"></use></svg></button>
      <button class="w-auto btn btn-outline-primary btn-md" type="button">Export<svg class="ms-2-5 bi icon--fluid"><use xlink:href="/icons.svg#file-arrow-down-fill"></use></svg></button>
    </div>`,
  action_button: {
    label: "Action button",
    variant: "secondary",
  },
};
