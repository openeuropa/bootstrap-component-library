import demoData from "@openeuropa/bcl-data-modal/data.js";
import modal from "@openeuropa/bcl-modal/modal.html.twig";

const getArgs = () => ({
  size: "default",
  static_backdrop: false,
  verticaly_centered: false,
  scrollable: false,
});

const getArgTypes = () => ({
  size: {
    name: "size",
    type: { name: "select" },
    description: "Modal size",
    options: ["default", "sm", "lg", "xl", "fullscreen"],
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Style",
    },
    control: {
      type: "select",
      labels: {
        default: "default",
        sm: "small",
        lg: "large",
        xl: "extra large",
        fullscreen: "fullscreen",
      },
    },
  },
  static_backdrop: {
    name: "static backdrop",
    type: { name: "boolean" },
    description: "Modal will not close when clicking outside it",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
      category: "Style",
    },
  },
  verticaly_centered: {
    name: "verticaly centered",
    type: { name: "boolean" },
    description: "Vertically center the modal",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
      category: "Style",
    },
  },
  scrollable: {
    type: { name: "boolean" },
    description: "Scrolling long content in modal dialog",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
      category: "Style",
    },
  },
});

const applyArgs = (data, args) => {
  if (args.size === "default") {
    args.size = "";
  }

  return Object.assign(data, args);
};

// Decoration
const modalButton = (story) => {
  const demo = story();
  return `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button>${demo}`;
};

// Stories
export default {
  title: "Components/Modal",
  decorators: [modalButton],
  parameters: {
    badges: ["deprecated"],
  },
};

export const Default = (args) => modal(applyArgs(demoData, args));
Default.args = getArgs();
Default.argTypes = getArgTypes();
