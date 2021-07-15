import { withDesign } from "storybook-addon-designs";
import { getFormControls } from "@openeuropa/bcl-story-utils";
import demoData from "@openeuropa/bcl-data-textarea/data.js";
import textarea from "./textarea.html.twig";
import drupalAttribute from "drupal-attribute";

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

const resetAttrs = (data) => {
  data.attributes = new drupalAttribute();
};

const applyArgs = (data, args) => {
  resetAttrs(data);

  return Object.assign(data, args);
};

// Stories
export default {
  title: "Components/Forms/Textarea",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2695%3A58",
      },
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=53%3A24",
      },
    ],
  },
};

export const Textarea = (args) => textarea(applyArgs(demoData, args));

Textarea.storyName = "default";
Textarea.argTypes = getArgTypes(demoData);
