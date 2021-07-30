import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-data-modal/data.js";
import modal from "@openeuropa/bcl-modal/modal.html.twig";

const getArgs = () => {
  return {
    size: "",
  };
};

const getArgTypes = () => {
  return {
    size: {
      name: "size",
      type: { name: "select" },
      description: "Modal size",
      options: ["", "sm", "lg", "xl", "fullscreen"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
      control: {
        type: "select",
        labels: {
          "": "default",
          sm: "small",
          lg: "large",
          xl: "extra large",
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
const modalButton = (story) => {
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
        url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2617%3A191",
      },
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=29%3A0",
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
Modal.args = getArgs();
Modal.argTypes = getArgTypes();
Modal.decorators = [modalButton];
