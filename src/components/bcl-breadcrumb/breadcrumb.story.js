import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-data-breadcrumb/data.js";
import breadcrumb from "@openeuropa/bcl-breadcrumb/breadcrumb.html.twig";

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
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2714%3A403",
      },
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=1%3A512",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/components/breadcrumb/",
      },
    ],
  },
};

export const Default = (args) => breadcrumb(applyArgs(demoData, args));

Default.storyName = "Default";
Default.argTypes = getArgTypes(demoData);
