import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import { within, userEvent } from "@storybook/testing-library";
import isChromatic from "chromatic/isChromatic";
import demoData from "@openeuropa/bcl-data-offcanvas/data.js";
import offCanvas from "@openeuropa/bcl-offcanvas/offcanvas.html.twig";
import drupalAttribute from "drupal-attribute";

const chromatic = process.env.STORYBOOK_ENV;

const getArgs = (data) => {
  return {
    body: data.body,
    with_close: true,
    placement: data.placement,
    with_backdrop: true,
    with_body_scroll: false,
  };
};

const getArgTypes = (data) => {
  return {
    body: {
      type: { name: "string" },
      description: "Content of the offcanvas",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    with_close: {
      name: "close button",
      type: { name: "boolean" },
      description: "Enable the close button",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Content",
      },
    },
    placement: {
      type: { name: "select" },
      description: "Position of the offcanvas",
      options: ["bottom", "top", "start", "end"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Behaviour",
      },
    },
    with_backdrop: {
      name: "enable backdrop",
      type: { name: "boolean" },
      description: "Enable backdrop",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Behaviour",
      },
    },
    with_body_scroll: {
      name: "enable body scrolling",
      type: { name: "boolean" },
      description: "Enable body scrolling",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Behaviour",
      },
    },
  };
};

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

const resetAttrs = (data, args) => {
  data.attributes.removeClass(`offcanvas-${data.placement}`);
  data.attributes.removeClass(`btn-outline-${data.variant}`);
  if (args.with_backdrop) {
    data.attributes.removeAttribute("data-bs-backdrop");
  }
  if (!args.with_body_scroll) {
    data.attributes.removeAttribute("data-bs-scroll");
  }
};

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }

  resetAttrs(data, args);
  return Object.assign(data, args);
};

export default {
  title: "Components/Offcanvas",
  decorators: [withCode, withDesign, initOffcanvas],
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=3501%3A5602",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.1/components/offcanvas/",
      },
    ],
  },
  chromatic: { disableSnapshot: true },
};

export const Default = (args) => offCanvas(applyArgs(demoData, args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);
Default.decorators = [offCanvasTrigger];
if (isChromatic() || chromatic) {
  Default.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const offCanvasButton = canvas.getByRole("button");
    await userEvent.click(offCanvasButton);
  };
}
