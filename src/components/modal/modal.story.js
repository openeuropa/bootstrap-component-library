import { withDesign } from "storybook-addon-designs";
import demoData from "@oe/data-modal/data";
import modal from "./modal.html.twig";

// Controls
const getArgTypes = () => {
  return {
    size: {
      name: "size",
      type: { name: "select" },
      defaultValue: "",
      description: "Modal size",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
      control: {
        type: "select",
        options: {
          default: "",
          small: "sm",
          large: "lg",
          "extra large": "xl",
          fullscreen: "fullscreen",
        },
      },
    },
  };
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

// Decoration
const modalButton = (story, controls) => {
  const demo = story();
  return `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button>${demo}`;
};

// Stories
export default {
  title: "Components/Modal",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2617%3A191",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/components/modal/",
      },
    ],
  },
};

export const Modal = (args) => modal(applyArgs(demoData, args));

Modal.storyName = "default";
Modal.argTypes = getArgTypes();
Modal.decorators = [modalButton];
