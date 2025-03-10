import {
  initTooltip,
  getIconControls,
  getVariants,
  correctPaths,
} from "@openeuropa/bcl-story-utils";
import drupalAttribute from "drupal-attribute";

import demoData from "@openeuropa/bcl-data-button/data.js";
import toggleDemoData from "@openeuropa/bcl-data-button/data--toggle";
import popoverDemoData from "@openeuropa/bcl-data-button/data--popover";
import tooltipDemoData from "@openeuropa/bcl-data-button/data--tooltip";
import spinnerDemoData from "@openeuropa/bcl-data-button/data--spinner";
import button from "@openeuropa/bcl-button/button.html.twig";

const withCollapse = (story) => {
  const demo = story();
  return `
    ${demo}
    <div class="collapse mt-3${
      toggleDemoData.horizontal_collapse ? " collapse-horizontal" : ""
    }" id="collapseExample">
      <div class="card card-body" style="width: 300px;">
        ${toggleDemoData.collapse_text}
      </div>
    </div>`;
};

const getArgs = (data, type) => {
  const args = {
    label: data.label,
    type: "button",
    assistive_text: "",
    outline: false,
    variant: data.variant || "primary",
    size: "md",
    disabled: false,
    text_nowrap: false,
    name: data.name || "",
    transformation: "",
    icon_size: "",
    icon_position: "after",
  };

  if (type === "tooltip" || type === "popover") {
    args.placement = "bottom";
  }

  if (type === "collapse") {
    args.horizontal_collapse = false;
  }

  return args;
};

const getArgTypes = (data, type) => {
  const argTypes = {
    label: {
      type: { name: "string" },
      description: "Label of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    type: {
      type: { name: "select" },
      description: "Type of the button",
      options: {
        Button: "button",
        Submit: "submit",
        Reset: "reset",
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "button" },
        category: "Content",
      },
    },
    assistive_text: {
      type: { name: "string" },
      name: "Additional text visually hidden",
      description:
        "Text inside the button to be visible on assistive technologies",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    outline: {
      type: { name: "boolean" },
      description: "Enable outline style",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    variant: {
      type: { name: "select" },
      options: getVariants(false, ["link"]),
      description: "Variant of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
        category: "Style",
      },
    },
    size: {
      type: { name: "select" },
      description: "Size of the button",
      options: { small: "sm", medium: "md", large: "lg" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "md" },
        category: "Style",
      },
    },
    disabled: {
      type: { name: "boolean" },
      description: "Enable the disabled state",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    text_nowrap: {
      type: { name: "boolean" },
      name: "Prevent label from wrapping",
      description: "Button text should not wrap",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    ...getIconControls("button"),
  };
  if (type === "tooltip" || type === "popover") {
    let defaultPosition = "top";
    if (type === "popover") {
      defaultPosition = "right";
    }
    argTypes.placement = {
      name: `${type} position`,
      type: "select",
      options: ["top", "bottom", "left", "right"],
      description: `Position for the ${type}`,
      table: {
        type: { summary: "attribute" },
        defaultValue: { summary: defaultPosition },
        category: "Behaviour",
      },
    };
  }
  if (type === "collapse") {
    argTypes.horizontal_collapse = {
      type: { name: "boolean" },
      name: "horizontal collapse",
      description: "Make the collapse shows horizontal",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    };
  }

  return argTypes;
};

const resetAttrs = (data, args) => {
  data.attributes.removeClass([
    `btn-${data.variant}`,
    `btn-outline-${data.variant}`,
    `btn-${data.size}`,
  ]);

  if (!args.disabled) {
    data.attributes.removeAttribute("disabled");
    data.attributes.removeAttribute("aria-disabled");
  }
  if (!args.text_nowrap) {
    data.attributes.removeClass("text-nowrap");
  }
};

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }
  resetAttrs(data, args);
  if (args.name && args.name !== "none") {
    data.icon = {};
    data.icon.name = args.name;
    data.icon.size = args.icon_size;
    data.icon.path = "/icons.svg";
    data.icon.transformation = args.transformation;
    data.icon.attributes = new drupalAttribute();
  }
  if (args.name === "none") {
    data.icon = null;
  }
  if (args.placement) {
    data.attributes.setAttribute("data-bs-placement", args.placement);
  }

  return Object.assign(correctPaths(data), args);
};

const initPopover = (story) => {
  const demo = story();
  return `
    <script>
      var popoverTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="popover"]')
      );
      var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
      });
    </script>
    <div style="padding: 6rem 0 6rem 14rem">${demo}</div>`;
};

export default {
  title: "Components/Button",
};

export const Default = (args) => button(applyArgs(demoData, args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);
Default.parameters = {
  badges: ["deprecated"],
  design: [
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=1%3A815",
    },
    {
      name: "Bootstrap docs",
      type: "iframe",
      url: "https://getbootstrap.com/docs/5.2/components/buttons/",
    },
  ],
};

export const Collapse = (args) => button(applyArgs(toggleDemoData, args));

Collapse.storyName = "Collapse";
Collapse.args = getArgs(toggleDemoData, "collapse");
Collapse.argTypes = getArgTypes(toggleDemoData, "collapse");
Collapse.decorators = [withCollapse];
Collapse.parameters = {
  badges: ["deprecated"],
  design: [
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=16%3A105",
    },
    {
      name: "Bootstrap docs",
      type: "iframe",
      url: "https://getbootstrap.com/docs/5.2/components/collapse/",
    },
  ],
};

export const Popover = (args) => button(applyArgs(popoverDemoData, args));

Popover.storyName = "Popover";
Popover.args = getArgs(popoverDemoData, "popover");
Popover.argTypes = getArgTypes(popoverDemoData, "popover");
Popover.decorators = [initPopover];
Popover.parameters = {
  badges: ["deprecated"],
  design: [
    {
      name: "Wireframe",
      type: "figma",
      url: "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2738%3A345",
    },
    {
      name: "Bootstrap docs",
      type: "iframe",
      url: "https://getbootstrap.com/docs/5.2/components/popovers/",
    },
  ],
};

export const Tooltip = (args) => button(applyArgs(tooltipDemoData, args));

Tooltip.storyName = "Tooltip";
Tooltip.args = getArgs(tooltipDemoData, "tooltip");
Tooltip.argTypes = getArgTypes(tooltipDemoData, "tooltip");
Tooltip.decorators = [initTooltip];
Tooltip.parameters = {
  badges: ["deprecated"],
  design: {
    name: "Bootstrap docs",
    type: "iframe",
    url: "https://getbootstrap.com/docs/5.2/components/tooltips/",
  },
};

export const Spinner = (args) => button(applyArgs(spinnerDemoData, args));

Spinner.storyName = "Spinner";
Spinner.args = getArgs(spinnerDemoData);
Spinner.argTypes = getArgTypes(spinnerDemoData);
Spinner.parameters = {
  badges: ["deprecated"],
  design: [
    {
      name: "Wireframe",
      type: "figma",
      url: "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=3142%3A10921",
    },
    {
      name: "Bootstrap docs",
      type: "iframe",
      url: "https://getbootstrap.com/docs/5.2/components/spinners/",
    },
  ],
};
