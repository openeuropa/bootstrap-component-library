import { withDesign } from "storybook-addon-designs";
import demoData from "@oe/data-breadcrumb/data";
import breadcrumb from "./breadcrumb.html.twig";

const getArgTypes = (data) => {
  return {
    links: {
      type: { name: "object" },
      description: "Links",
      defaultValue: data.links,
      table: {
        type: { summary: "object" },
        category: "Content",
      },
    },
  };
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: "Components/Breadcrumb",
  decorators: [withDesign],
  design: {
    type: "figma",
    url: "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2714%3A403",
  },
};

export const Default = (args) => breadcrumb(applyArgs(demoData, args));

Default.storyName = "Default";
Default.argTypes = getArgTypes(demoData);
