import demoData from "@openeuropa/bcl-data-link/data.js";
import toggleDemoData from "@openeuropa/bcl-data-link/toggleData.js";
import tooltipDemoData from "@openeuropa/bcl-data-link/tooltipData.js";
import link from "@openeuropa/bcl-link/link.html.twig";
import { getIconControls, getVariants } from "@openeuropa/bcl-story-utils";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";
import drupalAttribute from "drupal-attribute";

const withCollapse = (story) => {
  const demo = story();
  const target = toggleDemoData.path.substring(1);
  return `${demo} <div class="collapse mt-3" id="${target}">${toggleDemoData.collapse_text}</div>`;
};

const getArgs = (data) => {
  return {
    label: data.label,
    path: data.path,
    variant: data.variant,
    name: "none",
  };
};

const getArgTypes = (data) => {
  return {
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
    ...getIconControls("link"),
  };
};

const resetAttrs = (data) => {
  data.attributes.removeClass(`link-${data.variant}`);
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
  return Object.assign(data, args);
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
  title: "Components/Link",
};

export const Default = (args) => link(applyArgs(demoData, args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);

export const Collapse = (args) => link(applyArgs(toggleDemoData, args));

Collapse.args = getArgs(toggleDemoData);
Collapse.argTypes = getArgTypes(toggleDemoData);
Collapse.decorators = [withCollapse];
Collapse.parameters = {
  design: {
    name: "Bootstrap docs",
    type: "iframe",
    url: "https://getbootstrap.com/docs/5.0/components/collapse/",
  },
};

export const Tooltip = (args) => link(applyArgs(tooltipDemoData, args));

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
