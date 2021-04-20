import { withDesign } from "storybook-addon-designs";
import demoData from "@oe/data-link/data";
import link from "./link.html.twig";
import { getVariants } from "@oe/story-utils";

const getArgTypes = (data) => {
  return {
    label: {
      type: { name: "string" },
      description: "Label of the link",
      defaultValue: data.label,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    path: {
      type: { name: "string" },
      description: "Href of the link",
      defaultValue: data.path,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    variant: {
      type: { name: "select" },
      description: "Variant of the link",
      defaultValue: "",
      control: {
        type: "select",
        options: getVariants()
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
    },
  };
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: "Components/Link",
  decorators: [withDesign],
};

export const Default = (args) => link(applyArgs(demoData, args));

Default.argTypes = getArgTypes(demoData);
