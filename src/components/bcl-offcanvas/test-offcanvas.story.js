import { screen, userEvent } from "@storybook/testing-library";
import demoData from "@openeuropa/bcl-data-offcanvas/data.js";
import offCanvas from "@openeuropa/bcl-offcanvas/offcanvas.html.twig";

const initOffcanvas = (story) => {
  const demo = story();
  return `
    <script>
      var offcanvasElementList = [].slice.call(
        document.querySelectorAll(".offcanvas")
      );
      var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
        var offCanvas = new bootstrap.Offcanvas(offcanvasEl);
      });
    </script>
  ${demo}`;
};

const offCanvasTrigger = (story) => {
  const demo = story();
  return `<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            Toggle offcanvas
          </button>${demo}`;
};

export default {
  title: "Components/Offcanvas",
  decorators: [offCanvasTrigger, initOffcanvas],
  parameters: {
    chromatic: {
      vieports: [1200],
    },
  },
};

export const Opened = () => offCanvas(demoData);

Opened.play = async () => {
  const modalButton = screen.getByRole("button");
  await userEvent.click(modalButton);
};
