import { withDesign } from "storybook-addon-designs";
import { getFormControls } from "@openeuropa/bcl-story-utils";
import demoData from "@openeuropa/bcl-data-form-input/data.js";
import formInput from "./form-input.html.twig";

const getArgTypes = (data, type) => {
  return {
    type: {
      type: { name: "select" },
      description: "Type of the text input",
      defaultValue: type,
      control: {
        type: "select",
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
      },
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
  resetAttrs(data, args);
  return Object.assign(data, args);
};

// Stories
export default {
  title: "Components/Forms/Form input",
  decorators: [withDesign],
};

export const FormInput = (args) => formInput(applyArgs(demoData, args));

FormInput.storyName = "text field";
FormInput.argTypes = getArgTypes(
  { ...demoData, placeholder: "text here" },
  "text"
);
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

export const Checkbox = (args) =>
  formInput(applyArgs({ ...demoData, type: "checkbox" }, args));

Checkbox.storyName = "checkbox";
Checkbox.argTypes = getArgTypes(demoData, "checkbox");
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

export const Switch = (args) =>
  formInput(applyArgs({ ...demoData, type: "checkbox", switch: true }, args));

Switch.storyName = "switch";
Switch.argTypes = getArgTypes({ ...demoData, switch: "true" }, "checkbox");
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

export const Radio = (args) =>
  formInput(applyArgs({ ...demoData, type: "radio" }, args));

Radio.storyName = "radio";
Radio.argTypes = getArgTypes(demoData, "radio");
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

export const File = (args) =>
  formInput(applyArgs({ ...demoData, type: "file" }, args));

File.storyName = "file";
File.argTypes = getArgTypes(demoData, "file");
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
