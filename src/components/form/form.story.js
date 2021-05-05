import { withDesign } from "storybook-addon-designs";
import demoData from "@oe/data-form/data";
import demoDisabled from "@oe/data-form/data-disabled";
import demoGrid from "@oe/data-form/data-grid";
import demoHorizontal from "@oe/data-form/data-horizontal";
import demoInline from "@oe/data-form/data-inline";
import form from "./form.html.twig";

export default {
  title: "Components/Forms/Form",
  decorators: [withDesign],
  parameters: {
    controls: { disable: true },
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=53%3A24",
    },
  },
};

export const Basic = () => form(demoData);

export const Disabled = () => form(demoDisabled);

export const Grid = () => form(demoGrid);

export const Horizontal = () => form(demoHorizontal);

export const Inline = () => form(demoInline);
