import { DrupalAttribute } from "drupal-attribute";

export const sortBy = {
  label: "Sort by",
  attributes: new DrupalAttribute().addClass(
    "mt-2 mt-md-0 mb-4 mb-md-0 mx-md-4 w-auto",
  ),
  aria_label: "sort-select",
  label_extra_classes: "mb-0",
  options: [
    { value: 1, label: "A-Z" },
    { value: 2, label: "Z-A" },
    { value: 3, label: "Recent entry", selected: true },
    { value: 4, label: "Oldest Entry" },
    { value: 5, label: "Latest update" },
  ],
};

export const itemsPerPage = {
  label: "Items per page",
  attributes: new DrupalAttribute().addClass(
    "mt-2 mt-md-0 mb-md-0 ms-md-4 w-auto",
  ),
  aria_label: "sort-select",
  label_extra_classes: "mb-0",
  options: [
    { value: 10, label: 10 },
    { value: 20, label: 20, selected: true },
    { value: 50, label: 50 },
  ],
};
