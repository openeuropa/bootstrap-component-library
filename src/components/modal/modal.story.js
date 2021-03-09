import modal from "./modal.html.twig";

export default {
  title: "Components/Modal",
};

export const Modal = (args) => modal(args);

Modal.storyName = "default";
