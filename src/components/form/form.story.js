import { withDesign } from "storybook-addon-designs";
import demoData from "@oe/data-form/data.js";
import demoDisabled from "@oe/data-form/data-disabled.js";
import demoGrid from "@oe/data-form/data-grid.js";
import demoHorizontal from "@oe/data-form/data-horizontal.js";
import demoInline from "@oe/data-form/data-inline.js";
import form from "./form.html.twig";

export default {
  title: "Components/Forms/Form",
  decorators: [withDesign],
  parameters: {
    controls: { disable: true },
    parameters: {
      design: [
        {
          name: "Wireframe",
          type: "figma",
          url: "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=53%3A24",
        },
        {
          name: "Bootstrap docs",
          type: "iframe",
          url: "https://getbootstrap.com/docs/5.0/forms/overview/",
        },
      ],
    },
  },
};

export const Basic = () => form(demoData);

export const Disabled = () => form(demoDisabled);

export const Grid = () => form(demoGrid);

export const Horizontal = () => form(demoHorizontal);

export const Inline = () => form(demoInline);
