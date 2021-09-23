import demoData from "@openeuropa/bcl-search-bar/dataSearch.js";
import searchBar from "@openeuropa/bcl-search-bar/search-bar.html.twig";
import { getFormControls } from "@openeuropa/bcl-story-utils";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";
import drupalAttribute from "drupal-attribute";

const getArgs = (data) => {
  let args = {
    label: data.label || "",
    hidden_label: false,
    helper_text: data.helper_text || "",
    invalid: data.invalid || false,
    disabled: data.disabled || false,
    required: data.required || false,
    valid: data.valid || false,
    invalid_feedback: data.invalid_feedback || "",
    valid_feedback: data.valid_feedback || "",
    floating: false,
    placeholder: data.placeholder || "text here",
  };

  return args;
};

const getArgTypes = (data) => {
  return {
    ...getFormControls(data, "text"),
  };
};

const resetAttrs = (data, args) => {
  data.attributes.removeClass("form-control-" + data.size);
  if (!args.readonly) {
    data.attributes.removeAttribute("readonly");
  }
  if (!args.required) {
    data.attributes.removeAttribute("required");
  }
  if (!args.invalid) {
    data.attributes.removeClass("is-invalid");
  }
  if (!args.valid) {
    data.attributes.removeClass("is-valid");
  }
  if (!args.placeholder) {
    data.attributes.removeAttribute("placeholder");
  }
};

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }
  resetAttrs(data, args);
  return Object.assign(data, args);
};

export default {
  title: "Compositions/Search Bar",
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=43%3A0",
      },
    ],
  },
};

const correctPaths = (data) => {
  data.icon.path = defaultSprite;

  return data;
};

export const Default = (args) =>
  searchBar(applyArgs(correctPaths(demoData), args));

Default.storyName = "Default";
Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);

export const Pill = (args) =>
  searchBar(applyArgs(correctPaths({ ...demoData, pill: true }), args));

Pill.storyName = "Pill";
Pill.args = getArgs(demoData);
Pill.argTypes = getArgTypes(demoData);
