import { withDesign } from "storybook-addon-designs";
import { getFormControls } from "@oe/story-utils";
import demoData from "@oe/data-textarea/data";
import textarea from "./textarea.html.twig";

const getArgTypes = (data) => {
  return {
    ...getFormControls(data, "textarea"),
    rows: {
      type: { name: "number" },
      description: "Number or rows",
      defaultValue: 4,
      table: {
        type: { summary: "integer" },
        min: 1,
        step: 1,
        defaultValue: { summary: "4" },
        category: "Size",
      },
    },
  };
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

// Stories
export default {
  title: "Components/Forms/Textarea",
  decorators: [withDesign],
  parameters: {
    design: {
      name: "Wireframe",
      type: "figma",
      url: "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=53%3A24",
    },
  },
};

export const Textarea = (args) => textarea(applyArgs(demoData, args));

Textarea.storyName = "default";
Textarea.argTypes = getArgTypes(demoData);
