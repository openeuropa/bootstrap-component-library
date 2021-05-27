import { withDesign } from "storybook-addon-designs";
import { getFormControls } from "@oe/story-utils";
import demoData from "@oe/data-select/data";
import select from "./select.html.twig";

const getArgTypes = (data, type) => {
  return {
    ...getFormControls(data, type),
  };
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

// Stories
export default {
  title: "Components/Forms/Select",
  decorators: [withDesign],
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
        url: "https://getbootstrap.com/docs/5.0/forms/select/",
      },
    ],
  },
};

export const Default = (args) => select(applyArgs(demoData, args));

Default.argTypes = getArgTypes(demoData, "select");
