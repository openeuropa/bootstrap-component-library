import { withDesign } from "storybook-addon-designs";
import { screen, userEvent } from "@storybook/testing-library";
import isChromatic from "chromatic/isChromatic";
import demoData from "@openeuropa/bcl-data-link/data.js";
import toggleDemoData from "@openeuropa/bcl-data-link/toggleData.js";
import tooltipDemoData from "@openeuropa/bcl-data-link/tooltipData.js";
import link from "@openeuropa/bcl-link/link.html.twig";
import {
  getIconControls,
  getVariants,
  initTooltip,
} from "@openeuropa/bcl-story-utils";
import defaultSprite from "@openeuropa/bcl-theme-default/icons/bcl-default-icons.svg";
import drupalAttribute from "drupal-attribute";

const withCollapse = (story) => {
  const demo = story();
  const target = toggleDemoData.path.substring(1);
  return `${demo} 
  <div class="collapse mt-3${
    toggleDemoData.horizontal_collapse ? " collapse-horizontal" : ""
  }" id="${target}">
    <div class="card card-body" style="width: 300px;">
      ${toggleDemoData.collapse_text}
    </div>
  </div>`;
};

const getArgs = (data, type) => {
  const args = {
    label: data.label,
    path: data.path,
    variant: data.variant,
    standalone: data.standalone || false,
    name: "none",
  };
  if (type === "tooltip") {
    args.tooltip_position = "top";
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
      description: "Label of the link",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    path: {
      type: { name: "string" },
      description: "Href of the link",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "#" },
        category: "Content",
      },
    },
    variant: {
      type: { name: "select" },
      description: "Variant of the link",
      options: getVariants(),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
    },
    standalone: {
      type: { name: "boolean" },
      description: "Standalone link",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    ...getIconControls("link"),
  };

  if (type === "tooltip") {
    argTypes.tooltip_position = {
      name: "tooltip position",
      type: "select",
      options: ["top", "bottom", "left", "right"],
      description: "Position for the tooltip",
      table: {
        type: { summary: "attribute" },
        defaultValue: { summary: "top" },
        category: "Tooltip",
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

const resetAttrs = (data) => {
  data.attributes.removeClass("standalone");
  data.attributes.removeClass(`link-${data.variant}`);
  data.attributes.removeClass("bg-dark");
};

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }
  resetAttrs(data);
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
  if (args.tooltip_position) {
    data.attributes.setAttribute("data-bs-placement", args.tooltip_position);
  }
  if (args.variant == "light") {
    data.attributes.addClass("bg-dark");
  }

  return Object.assign(data, args);
};

export default {
  title: "Components/Link",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=3854%3A47229",
      },
    ],
  },
};

export const Default = (args) => link(applyArgs(demoData, args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);

export const Collapse = (args) => link(applyArgs(toggleDemoData, args));

Collapse.args = getArgs(toggleDemoData, "collapse");
Collapse.argTypes = getArgTypes(toggleDemoData, "collapse");
Collapse.decorators = [withCollapse];
Collapse.parameters = {
  design: {
    name: "Bootstrap docs",
    type: "iframe",
    url: "https://getbootstrap.com/docs/5.1/components/collapse/",
  },
};
if (isChromatic()) {
  Collapse.play = async () => {
    const button = screen.getByRole("button");
    await userEvent.click(button);
  };
}

export const Tooltip = (args) => link(applyArgs(tooltipDemoData, args));

Tooltip.args = getArgs(tooltipDemoData, "tooltip");
Tooltip.argTypes = getArgTypes(tooltipDemoData, "tooltip");
Tooltip.decorators = [initTooltip];
Tooltip.parameters = {
  design: {
    name: "Bootstrap docs",
    type: "iframe",
    url: "https://getbootstrap.com/docs/5.1/components/tooltips/",
  },
};
if (isChromatic()) {
  Tooltip.play = async () => {
    const button = screen.getByRole("button");
    await userEvent.hover(button);
  };
}
