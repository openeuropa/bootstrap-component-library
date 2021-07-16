import { withDesign } from "storybook-addon-designs";
import { getFormControls } from "@openeuropa/bcl-story-utils";
import demoData from "@openeuropa/bcl-data-form-input/data.js";
import formInput from "./form-input.html.twig";
import drupalAttribute from "drupal-attribute";

const getArgs = (data, type) => {
  let args = {
    type: type,
    label: data.label,
    hidden_label: false,
    helper_text: data.helper_text,
    invalid: data.invalid,
    disabled: data.disabled,
    required: data.required,
  };
  if (type === "text" || type === "textarea" || type === "file") {
    args.readonly = data.readonly;
    args.horizontal = false;
    args.horizontal_class = "col-sm-10";
    args.horizontal_label_class = "col-sm-2";
  }
  if (type !== "file") {
    args.floating = false;
    args.placeholder = "";
  }

  if (
    type === "text" ||
    type === "textarea" ||
    type === "file" ||
    type === "select"
  ) {
    args.size = data.size;
  }
  if (type === "checkbox") {
    args.switch = data.switch;
  }
  if (type === "radio" || type === "checkbox") {
    args.toggle = false;
    args.toggle_variant = data.variant || "primary";
  }

  return args;
};

const getArgTypes = (data, type) => {
  return {
    type: {
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
  decorators: [withDesign],
};

const formTextData = { ...demoData, placeholder: "text here" };
export const FormInput = (args) => formInput(applyArgs(formTextData, args));

FormInput.storyName = "text field";
FormInput.args = getArgs(formTextData, "text");
FormInput.argTypes = getArgTypes(formTextData, "text");
FormInput.parameters = {
  design: [
    {
      name: "Wireframe",
      type: "figma",
      url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2695%3A58",
    },
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=53%3A24",
    },
    {
      name: "Bootstrap docs",
      type: "iframe",
      url: "https://getbootstrap.com/docs/5.0/forms/form-control/",
    },
  ],
};

const checkboxData = { ...demoData, type: "checkbox" };
export const Checkbox = (args) => formInput(applyArgs(checkboxData, args));

Checkbox.storyName = "checkbox";
Checkbox.args = getArgs(checkboxData, "checkbox");
Checkbox.argTypes = getArgTypes(checkboxData, "checkbox");
Checkbox.parameters = {
  design: [
    {
      name: "Wireframe",
      type: "figma",
      url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2695%3A58",
    },
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=53%3A24",
    },
    {
      name: "Bootstrap docs",
      type: "iframe",
      url: "https://getbootstrap.com/docs/5.0/forms/checks-radios/",
    },
  ],
};

const switchData = { ...demoData, type: "checkbox", switch: true };
export const Switch = (args) => formInput(applyArgs(switchData, args));

Switch.storyName = "switch";
Switch.args = getArgs(switchData, "checkbox");
Switch.argTypes = getArgTypes(switchData, "checkbox");
Switch.parameters = {
  design: [
    {
      name: "Wireframe",
      type: "figma",
      url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2695%3A58",
    },
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=53%3A24",
    },
    {
      name: "Bootstrap docs",
      type: "iframe",
      url: "https://getbootstrap.com/docs/5.0/forms/checks-radios/#switches",
    },
  ],
};

const radioData = { ...demoData, type: "radio" };
export const Radio = (args) => formInput(applyArgs(radioData, args));

Radio.storyName = "radio";
Radio.args = getArgs(radioData, "radio");
Radio.argTypes = getArgTypes(radioData, "radio");
Radio.parameters = {
  design: [
    {
      name: "Wireframe",
      type: "figma",
      url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2695%3A58",
    },
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=53%3A24",
    },
    {
      name: "Bootstrap docs",
      type: "iframe",
      url: "https://getbootstrap.com/docs/5.0/forms/checks-radios/",
    },
  ],
};

const fileData = { ...demoData, type: "file" };
export const File = (args) => formInput(applyArgs(fileData, args));

File.storyName = "file";
File.args = getArgs(fileData, "file");
File.argTypes = getArgTypes(fileData, "file");
File.parameters = {
  design: [
    {
      name: "Wireframe",
      type: "figma",
      url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2695%3A58",
    },
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=53%3A24",
    },
    {
      name: "Bootstrap docs",
      type: "iframe",
      url: "https://getbootstrap.com/docs/5.0/forms/form-control/#file-input",
    },
  ],
};
