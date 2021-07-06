import demoData from "@openeuropa/bcl-data-link/data.js";
import toggleDemoData from "@openeuropa/bcl-data-link/toggleData.js";
import tooltipDemoData from "@openeuropa/bcl-data-link/tooltipData.js";
import link from "./link.html.twig";
import { getIconControls, getVariants } from "@openeuropa/bcl-story-utils";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";
import drupalAttribute from "drupal-attribute";

const withCollapse = (story) => {
  const demo = story();
  const target = toggleDemoData.path.substring(1);
  return `${demo} <div class="collapse mt-3" id="${target}">${toggleDemoData.collapse_text}</div>`;
};

const getArgTypes = (data) => {
  return {
    label: {
      type: { name: "string" },
      description: "Label of the link",
      defaultValue: data.label,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    path: {
      type: { name: "string" },
      description: "Href of the link",
      defaultValue: data.path,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "#" },
        category: "Content",
      },
    },
    variant: {
      type: { name: "select" },
      description: "Variant of the link",
      defaultValue: "",
      control: {
        type: "select",
        options: getVariants(),
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
    },
    ...getIconControls("link"),
  };
};

const applyArgs = (data, args) => {
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

export default {
  title: "Components/Link",
};

export const Default = (args) => link(applyArgs(demoData, args));

Default.argTypes = getArgTypes(demoData);

export const Collapse = (args) => link(applyArgs(toggleDemoData, args));

Collapse.storyName = "Collapse";
Collapse.argTypes = getArgTypes(toggleDemoData);
Collapse.decorators = [withCollapse];

export const Tooltip = (args) => link(applyArgs(tooltipDemoData, args));

Tooltip.storyName = "Tooltip";
Tooltip.argTypes = getArgTypes(tooltipDemoData);
Tooltip.parameters = {
  design: {
    name: "Bootstrap docs",
    type: "iframe",
    url: "https://getbootstrap.com/docs/5.0/components/tooltips/",
  },
};
