import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import { getFormControls } from "@openeuropa/bcl-story-utils";
import demoData from "@openeuropa/bcl-data-form-input/data";
import formInput from "@openeuropa/bcl-form-input/form-input.html.twig";
import drupalAttribute from "drupal-attribute";

const getArgs = (data, input_type) => {
  const args = {
    input_type,
    label: data.label || "",
    hidden_label: false,
    helper_text: data.helper_text || "",
    invalid: data.invalid || false,
    disabled: data.disabled || false,
    required: data.required || false,
    valid: data.valid || false,
    invalid_feedback: data.invalid_feedback || "",
    valid_feedback: data.valid_feedback || "",
  };
  if (input_type === "text" || input_type === "file") {
    args.readonly = data.readonly || false;
  }
  if (
    input_type === "text" ||
    input_type === "textarea" ||
    input_type === "multiselect"
  ) {
    args.placeholder = data.placeholder || "text here";
    if (input_type !== "file") {
      args.floating = false;
    }
  }
  if (input_type === "checkbox") {
    args.switch = data.switch || false;
  }
  if (input_type === "radio" || input_type === "checkbox") {
    args.toggle = false;
    args.toggle_variant = data.variant || "primary";
  }

  return args;
};

const getArgTypes = (data, type) => ({
  input_type: {
    name: "input type",
    type: { name: "select" },
    description: "Type of the text input",
    options: [
      "text",
      "email",
      "password",
      "radio",
      "checkbox",
      "file",
      "color",
      "date",
      "datetime-local",
      "search",
      "range",
      "tel",
      "time",
      "url",
      "week",
      "number",
      "month",
      "hidden",
    ],
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "text" },
      category: "Content",
    },
  },
  ...getFormControls(data, type),
});

const resetAttrs = (data, args) => {
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

// Stories
export default {
  title: "Components/Forms/Form input",
  decorators: [withCode, withDesign],
};

export const FormInput = (args) => formInput(applyArgs(demoData, args));

FormInput.storyName = "text field";
FormInput.args = getArgs(demoData, "text");
FormInput.argTypes = getArgTypes(demoData, "text");
FormInput.parameters = {
  design: [
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=3700%3A3078",
    },
    {
      name: "Bootstrap docs",
      type: "iframe",
      url: "https://getbootstrap.com/docs/5.1/forms/form-control/",
    },
  ],
};

const checkboxData = { ...demoData, input_type: "checkbox" };
export const Checkbox = (args) => formInput(applyArgs(checkboxData, args));

Checkbox.storyName = "checkbox";
Checkbox.args = getArgs(checkboxData, "checkbox");
Checkbox.argTypes = getArgTypes(checkboxData, "checkbox");
Checkbox.parameters = {
  design: [
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=3555%3A5",
    },
    {
      name: "Bootstrap docs",
      type: "iframe",
      url: "https://getbootstrap.com/docs/5.1/forms/checks-radios/",
    },
  ],
};

const switchData = { ...demoData, input_type: "checkbox", switch: true };
export const Switch = (args) => formInput(applyArgs(switchData, args));

Switch.storyName = "switch";
Switch.args = getArgs(switchData, "checkbox");
Switch.argTypes = getArgTypes(switchData, "checkbox");
Switch.parameters = {
  design: [
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=3555%3A5",
    },
    {
      name: "Bootstrap docs",
      type: "iframe",
      url: "https://getbootstrap.com/docs/5.1/forms/checks-radios/#switches",
    },
  ],
};

const radioData = { ...demoData, input_type: "radio" };
export const Radio = (args) => formInput(applyArgs(radioData, args));

Radio.storyName = "radio";
Radio.args = getArgs(radioData, "radio");
Radio.argTypes = getArgTypes(radioData, "radio");
Radio.parameters = {
  design: [
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=3555%3A5",
    },
    {
      name: "Bootstrap docs",
      type: "iframe",
      url: "https://getbootstrap.com/docs/5.1/forms/checks-radios/",
    },
  ],
};

const fileData = { ...demoData, input_type: "file" };
export const File = (args) => formInput(applyArgs(fileData, args));

File.storyName = "file";
File.args = getArgs(fileData, "file");
File.argTypes = getArgTypes(fileData, "file");
File.parameters = {
  design: [
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=3812%3A21840",
    },
    {
      name: "Bootstrap docs",
      type: "iframe",
      url: "https://getbootstrap.com/docs/5.1/forms/form-control/#file-input",
    },
  ],
  chromatic: { disableSnapshot: true },
};
