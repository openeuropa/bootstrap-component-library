export const getFormControls = (data, type) => {
  const argTypes = {
    label: {
      type: { name: "string", required: true },
      description: "Label of the form element",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    hidden_label: {
      name: "hidden label",
      type: { name: "boolean" },
      description: "Hidden label",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    helper_text: {
      name: "helper text",
      type: { name: "string", required: false },
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
      description: "Disabled form element",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
        category: "States",
        disable: (type !== "element") & (type !== "select"),
      },
    },
    required: {
      name: "required",
      type: "boolean",
      description: "Sets the required attribute on the form element",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
        category: "States",
      },
    },
  };
  if (type === "text" || type === "textarea" || type === "multiselect") {
    argTypes.placeholder = {
      name: "placeholder text",
      type: "string",
      description: "Text to be shown when the form element is not filled in",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    };
  }

  if (type === "text" || type === "textarea" || type === "file") {
    argTypes.readonly = {
      name: "readonly",
      type: "boolean",
      description: `Marks the form element as readonly`,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
        category: "States",
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
    }
  }

  if (
    type === "text" ||
    type === "textarea" ||
    type === "file" ||
    type === "select"
  ) {
    argTypes.size = {
      name: "size",
      type: { name: "select" },
      options: ["sm", "lg"],
      description: "The width of the form element {sm: small, lg: large}",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: data.size },
        category: "Size",
      },
      control: {
        type: "select",
        labels: {
          sm: "small",
          lg: "large",
        },
      },
    };
  }

  if (type === "checkbox") {
    argTypes.switch = {
      type: { name: "boolean" },
      description: "Turns a checkbox into a switcher",
      defaultValue: data.switch,
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
    };
    argTypes.toggle_variant = {
      name: "toggle variant",
      type: { name: "select" },
      description: "Variant of the button",
      options: getVariants(true, ["link"]),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
        category: "Style",
      },
    };
  }

  if (type === "multiselect") {
    argTypes.select_by_group = {
      name: "select by group",
      type: { name: "boolean" },
      description: `Select a group for multiselect`,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    };
  }

  return argTypes;
};

export const getVariants = (outline, add) => {
  let variants = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];
  if (outline) {
    variants = [...variants, ...variants.map((el) => `outline-${el}`)];
  }
  if (add) {
    variants = [...variants, ...add];
  }

  return variants;
};

export const getIconControls = (type, data) => {
  const argTypes = {
    name: {
      name: "icon name",
      type: { name: "select" },
      options: getIconNames(),
      description: "Icon name",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Icon",
      },
    },
    transformation: {
      name: "icon transformation",
      type: { name: "select" },
      options: [
        "rotate-90",
        "rotate-180",
        "rotate-270",
        "flip-horizontal",
        "flip-vertical",
      ],
      description: "Icon transformation",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Icon",
      },
    },
  };
  if (type == "icon") {
    argTypes.size = {
      name: "icon size",
      options: ["2xs", "xs", "s", "m", "l", "xl", "2xl", "fluid"],
      type: { name: "select" },
      description: "Size of icon",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "s" },
        category: "Icon",
      },
    };
  } else {
    argTypes.icon_size = {
      name: "icon size",
      options: ["2xs", "xs", "s", "m", "l", "xl", "2xl", "fluid"],
      type: { name: "select" },
      description: "Size of icon",
      defaultValue: "s",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "s" },
        category: "Icon",
      },
    };
    argTypes.icon_position = {
      name: "icon position",
      options: ["before", "after"],
      type: { name: "inline-radio" },
      description: "Icon position inside the button or link",
      defaultValue: "after",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "after" },
        category: "Icon",
        disable: (type !== "link") & (type !== "button"),
      },
    };
  }

  return argTypes;
};

export const getIconNames = () => {
  return [
    "none",
    "alarm",
    "arrow-left",
    "arrow-right",
    "chat",
    "cloud",
    "file-earmark-arrow-down",
    "wifi",
    "share",
    "mouse",
    "key",
    "hand-index",
    "fonts",
    "fullscreen",
    "fullscreen-exit",
    "filter",
    "files",
    "eye",
    "eye-slash",
  ];
};
