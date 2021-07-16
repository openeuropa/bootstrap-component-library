import { withDesign } from "storybook-addon-designs";
import { getFormControls } from "@openeuropa/bcl-story-utils";
import demoData from "@openeuropa/bcl-data-select/data.js";
import select from "./select.html.twig";
import drupalAttribute from "drupal-attribute";

const getArgs = (data) => {
  return {
    label: data.label,
    hidden_label: false,
    helper_text: data.helper_text,
    invalid: false,
    disabled: false,
    required: true,
    size: "sm",
  };
};

const getArgTypes = (data, type) => {
  return {
    ...getFormControls(data, type),
  };
};

const resetAttrs = (data, args) => {
  data.attributes.removeClass("form-select-" + data.size);
  if (!args.disabled) {
    data.attributes.removeAttribute("disabled");
  }
  if (!args.required) {
    data.attributes.removeAttribute("required");
  }
  if (!args.multiple) {
    data.attributes.removeAttribute("multiple");
  }
  if (!args.invalid) {
    data.attributes.removeClass("is-invalid");
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
  title: "Components/Forms/Select",
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
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/forms/select/",
      },
    ],
  },
};

export const Default = (args) => select(applyArgs(demoData, args));

Default.args = getArgs(demoData, "select");
Default.argTypes = getArgTypes(demoData, "select");
