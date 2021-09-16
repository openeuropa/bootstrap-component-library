import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-data-button/data.js";
import toggleDemoData from "@openeuropa/bcl-data-button/toggleData.js";
import popoverDemoData from "@openeuropa/bcl-data-button/popoverData.js";
import tooltipDemoData from "@openeuropa/bcl-data-button/tooltipData.js";
import spinnerDemoData from "@openeuropa/bcl-data-button/spinnerData.js";
import button from "@openeuropa/bcl-button/button.html.twig";
import { getIconControls, getVariants } from "@openeuropa/bcl-story-utils";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";
import drupalAttribute from "drupal-attribute";

const withCollapse = (story) => {
  const demo = story();
  return `
    ${demo} 
    <div class="collapse mt-3" id="collapseExample">
      ${toggleDemoData.collapse_text}
    </div>`;
};

const getArgs = (data) => {
  return {
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
};

const getArgTypes = (data) => {
  return {
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
};

const resetAttrs = (data, args) => {
  data.attributes.removeClass(`btn-${data.variant}`);
  data.attributes.removeClass(`btn-outline-${data.variant}`);
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
    data.icon.path = defaultSprite;
    data.icon.transformation = args.transformation;
    data.icon.attributes = new drupalAttribute();
  }
  if (args.name == "none") {
    data.icon = null;
  }
  return Object.assign(data, args);
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
  ${demo}`;
};

const initTooltip = (story) => {
  const demo = story();
  return `
    <script>
      var tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
    </script>
  ${demo}`;
};

export default {
  title: "Components/Button",
  decorators: [withDesign],
};

export const Default = (args) => button(applyArgs(demoData, args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);
Default.parameters = {
  design: [
    {
      name: "Wireframe",
      type: "figma",
      url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2624%3A00",
    },
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=1%3A815",
    },
    {
      name: "Bootstrap docs",
      type: "iframe",
      url: "https://getbootstrap.com/docs/5.0/components/buttons/",
    },
  ],
};

export const Collapse = (args) => button(applyArgs(toggleDemoData, args));

Collapse.storyName = "Collapse";
Collapse.args = getArgs(toggleDemoData);
Collapse.argTypes = getArgTypes(toggleDemoData);
Collapse.decorators = [withCollapse];
Collapse.parameters = {
  design: [
    {
      name: "Wireframe",
      type: "figma",
      url: "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2726%3A0",
    },
    {
      name: "Bootstrap docs",
      type: "iframe",
      url: "https://getbootstrap.com/docs/5.0/components/collapse/",
    },
  ],
};

export const Popover = (args) => button(applyArgs(popoverDemoData, args));

Popover.storyName = "Popover";
Popover.args = getArgs(popoverDemoData);
Popover.argTypes = getArgTypes(popoverDemoData);
Popover.decorators = [initPopover];
Popover.parameters = {
  design: [
    {
      name: "Wireframe",
      type: "figma",
      url: "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2738%3A345",
    },
    {
      name: "Bootstrap docs",
      type: "iframe",
      url: "https://getbootstrap.com/docs/5.0/components/popovers/",
    },
  ],
};

export const Tooltip = (args) => button(applyArgs(tooltipDemoData, args));

Tooltip.storyName = "Tooltip";
Tooltip.args = getArgs(tooltipDemoData);
Tooltip.argTypes = getArgTypes(tooltipDemoData);
Tooltip.decorators = [initTooltip];
Tooltip.parameters = {
  design: {
    name: "Bootstrap docs",
    type: "iframe",
    url: "https://getbootstrap.com/docs/5.0/components/tooltips/",
  },
};

export const Spinner = (args) => button(applyArgs(spinnerDemoData, args));

Spinner.storyName = "Spinner";
Spinner.args = getArgs(spinnerDemoData);
Spinner.argTypes = getArgTypes(spinnerDemoData);
Spinner.parameters = {
  design: [
    {
      name: "Wireframe",
      type: "figma",
      url: "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=3142%3A10921",
    },
    {
      name: "Bootstrap docs",
      type: "iframe",
      url: "https://getbootstrap.com/docs/5.0/components/spinners/",
    },
  ],
};
