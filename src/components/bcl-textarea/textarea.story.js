import { withDesign } from "storybook-addon-designs";
import { getFormControls } from "@openeuropa/bcl-story-utils";
import demoData from "@openeuropa/bcl-data-textarea/data.js";
import textarea from "./textarea.html.twig";
import drupalAttribute from "drupal-attribute";

const getArgs = (data) => {
  return {
    label: data.label,
    invalid: false,
    required: false,
    disabled: false,
    placeholder: data.placeholder,
    floating: false,
    readonly: false,
    horizontal: false,
    horizontal_class: "col-sm-10",
    horizontal_label_class: "col-sm-2",
    rows: 4,
    size: "sm",
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
  };
};

const resetAttrs = (data, args) => {
  data.attributes.removeClass("is-invalid");
  data.attributes.removeClass(`form-control-${data.size}`);
  if (!args.required) {
    data.attributes.removeAttribute("required");
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
  decorators: [withDesign],
  parameters: {
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
    ],
  },
};

export const Textarea = (args) => textarea(applyArgs(demoData, args));

Textarea.storyName = "default";
Textarea.args = getArgs(demoData);
Textarea.argTypes = getArgTypes(demoData);
