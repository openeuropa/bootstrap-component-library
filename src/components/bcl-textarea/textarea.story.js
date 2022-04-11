import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import { getFormControls } from "@openeuropa/bcl-story-utils";
import demoData from "@openeuropa/bcl-data-textarea/data.js";
import textarea from "@openeuropa/bcl-textarea/textarea.html.twig";
import drupalAttribute from "drupal-attribute";

const getArgs = (data) => {
  return {
    label: data.label,
    invalid: false,
    valid: false,
    required: false,
    disabled: false,
    helper_text: "",
    placeholder: data.placeholder,
    hidden_label: false,
    floating: false,
    readonly: false,
    rows: 4,
    text: "",
    invalid_feedback: data.invalid_feedback,
    valid_feedback: data.valid_feedback,
  };
};

const getArgTypes = (data) => {
  return {
    ...getFormControls(data, "textarea"),
    rows: {
      type: { name: "number" },
      description: "Number or rows",
      table: {
        type: { summary: "integer" },
        min: 1,
        step: 1,
        defaultValue: { summary: "4" },
        category: "Size",
      },
    },
    text: {
      type: { name: "string" },
      description: "Text filled",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
  };
};

const resetAttrs = (data, args) => {
  if (!args.required) {
    data.attributes.removeAttribute("required");
  }
  if (!args.invalid) {
    data.attributes.removeClass("is-invalid");
  }
  if (!args.valid) {
    data.attributes.removeClass("is-valid");
  }
  if (!args.disabled) {
    data.attributes.removeAttribute("disabled");
  }
  if (!args.readonly) {
    data.attributes.removeAttribute("readonly");
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

// Stories
export default {
  title: "Components/Forms/Textarea",
  decorators: [withCode, withDesign],
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=3700%3A3078",
      },
    ],
  },
};

export const Textarea = (args) => textarea(applyArgs(demoData, args));

Textarea.storyName = "default";
Textarea.args = getArgs(demoData);
Textarea.argTypes = getArgTypes(demoData);
