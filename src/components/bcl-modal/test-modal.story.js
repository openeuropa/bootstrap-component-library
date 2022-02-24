import { screen, userEvent } from "@storybook/testing-library";
import demoData from "@openeuropa/bcl-data-modal/data.js";
import modal from "@openeuropa/bcl-modal/modal.html.twig";

const modalButton = (story) => {
  const demo = story();
  return `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button>${demo}`;
};

export default {
  title: "Components/Modal",
  decorators: [modalButton],
};

export const Opened = () => modal(demoData);

Opened.parameters = {
  chromatic: {
    viewports: [1200],
  },
};

Opened.play = async () => {
  const modalButton = screen.getByRole("button");
  await userEvent.click(modalButton);
};
