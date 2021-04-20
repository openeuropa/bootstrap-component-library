export const getFormControls = (data, type) => {
  const argTypes = {
    label: {
      type: { name: "string", required: true },
      defaultValue: data.label,
      description: "Label of the form element",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    helper_text: {
      name: "helper text",
      type: { name: "string", required: false },
      defaultValue: data.helper_text,
      description: "Helper text of the form element",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    invalid: {
      name: "invalid",
      type: "boolean",
      defaultValue: data.invalid,
      description: "Marks the form element as invalid",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
        category: "States",
      },
    },
    disabled: {
      name: "disabled",
      type: "boolean",
      defaultValue: data.disabled,
      description: "Disabled form element",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
        category: "States",
        disable: type !== "element",
      },
    },
    required: {
      name: "required",
      type: "boolean",
      defaultValue: data.required,
      description: "Sets the required attribute on the form element",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
        category: "States",
      },
    },
    hidden_label: {
      name: "hidden label",
      type: { name: "boolean" },
      description: "Hidden label",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
  };

  if (type === "text" || type === "textarea" || type === "file") {
    argTypes.readonly = {
      name: "readonly",
      type: "boolean",
      defaultValue: data.readonly,
      description: `Marks the form element as readonly`,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
        category: "States",
      },
    };
    argTypes.horizontal = {
      type: { name: "boolean" },
      description: "Horizontal layout",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    };
    argTypes.horizontal_class = {
      type: { name: "string" },
      description: "Css class for the form input in an horizontal layout",
      defaultValue: "col-sm-10",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "col-sm-10" },
        category: "Style",
      },
    };
    argTypes.horizontal_label_class = {
      type: { name: "string" },
      description: "Css class for the label in an horizontal layout",
      defaultValue: "col-sm-2",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "col-sm-2" },
        category: "Style",
      },
    };
    argTypes.size = {
      name: "size",
      type: { name: "select" },
      defaultValue: data.size,
      description: "The width of the form element {sm: small, lg: large}",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: data.size },
        category: "Size",
      },
      control: {
        type: "select",
        options: { small: "sm", large: "lg" },
      },
    };
    if (type !== "file") {
      argTypes.floating = {
        name: "floating label",
        type: { name: "boolean" },
        description: "Floating label",
        defaultValue: false,
        table: {
          type: { summary: "boolean" },
          defaultValue: { summary: "false" },
          category: "Style",
        },
      };
      argTypes.placeholder = {
        name: "placeholder text",
        type: "string",
        defaultValue: data.placeholder,
        description: "Text to be shown when the form element is not filled in",
        table: {
          type: { summary: "string" },
          defaultValue: { summary: "" },
          category: "Content",
        },
      };
    }
  }

  if (type === "switch" || type === "checkbox") {
    argTypes.switch = {
      type: { name: "boolean" },
      description: "Turns a checkbox into a switcher",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    };
  }

  if (type === "radio" || type === "checkbox") {
    argTypes.toggle = {
      type: { name: "boolean" },
      description: `Turns a ${type} into a button`,
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    }
    argTypes.toggle_variant = {
      name: "Toggle variant",
      type: { name: "select" },
      description: "Variant of the button",
      defaultValue: data.variant,
      control: {
        type: "select",
        options: [
          "primary",
          "outline-primary",
          "secondary",
          "outline-secondary",
          "success",
          "outline-success",
          "danger",
          "outline-danger",
          "warning",
          "outline-warning",
          "info",
          "outline-info",
          "light",
          "outline-light",
          "dark",
          "outline-dark",
          "link"
        ],
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
        category: "Style",
      },
    }
  }

  return argTypes;
};

export const getVariants = () => {
  return [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ];
}
