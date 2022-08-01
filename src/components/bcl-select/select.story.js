import withCode from "@openeuropa/storybook-addon-code";
import { withDesign } from "storybook-addon-designs";
import { getFormControls } from "@openeuropa/bcl-story-utils";
import drupalAttribute from "drupal-attribute";

import demoData from "@openeuropa/bcl-data-select/data.js";
import demoMultiData from "@openeuropa/bcl-data-select/data--multiselect.js";
import select from "@openeuropa/bcl-select/select.html.twig";

const getArgs = (data) => {
  const args = {
    label: data.label || "",
    hidden_label: data.hidden_label || false,
    helper_text: data.helper_text || "",
    invalid: data.invalid || false,
    disabled: data.disabled || false,
    required: data.required || true,
    valid: data.valid || false,
    invalid_feedback: data.invalid_feedback || "",
    valid_feedback: data.valid_feedback || "",
  };

  return args;
};

const getArgTypes = (data, type) => ({
  ...getFormControls(data, type),
});

const resetAttrs = (data, args) => {
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
  if (!args.valid) {
    data.attributes.removeClass("is-valid");
  }
};

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }
  resetAttrs(data, args);
  return Object.assign(data, args);
};

const initMultiselect = (story) => {
  const demo = story();
  return `
    <script>
      if (document.querySelector(".multi-select")) {
        new SlimSelect({
          select: ".multi-select",
          selectByGroup: true,
          placeholder: "Please select a value",
        });
      }
    </script>
  ${demo}`;
};

// Stories
export default {
  title: "Components/Forms/Select",
  decorators: [withCode, withDesign],
};

export const Default = (args) => select(applyArgs(demoData, args));

Default.args = getArgs(demoData, "select");
Default.argTypes = getArgTypes(demoData, "select");
Default.parameters = {
  design: [
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=3807%3A21838",
    },
    {
      name: "Bootstrap docs",
      type: "iframe",
      url: "https://getbootstrap.com/docs/5.1/forms/select/",
    },
  ],
};

export const Multiselect = (args) => select(applyArgs(demoMultiData, args));

Multiselect.argTypes = getArgTypes(demoMultiData, "multiselect");
Multiselect.args = getArgs(demoMultiData, "multiselect");
Multiselect.decorators = [initMultiselect];
Multiselect.parameters = {
  a11y: {
    config: {
      rules: [
        { id: "aria-input-field-name", enabled: false },
        { id: "scrollable-region-focusable", enabled: false },
      ],
    },
  },
  design: [
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=3626%3A0",
    },
    {
      name: "Slim select docs",
      type: "iframe",
      url: "https://slimselectjs.com/",
    },
  ],
};
