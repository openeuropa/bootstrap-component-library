import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-data-breadcrumb/data.js";
import breadcrumb from "@openeuropa/bcl-breadcrumb/breadcrumb.html.twig";
import defaultSprite from "@openeuropa/bcl-theme-default/icons/bcl-default-icons.svg";

const getArgs = (data) => {
  return {
    links: data.links,
  };
};

const getArgTypes = (data) => {
  return {
    links: {
      type: { name: "object" },
      description: "Links",
      table: {
        type: { summary: "object" },
        category: "Content",
      },
    },
  };
};

const applyArgs = (data, args) => {
  data.icon_path = defaultSprite;
  return Object.assign(data, args);
};

export default {
  title: "Components/Breadcrumb",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=1%3A512",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.1/components/breadcrumb/",
      },
    ],
  },
};

export const Default = (args) => breadcrumb(applyArgs(demoData, args));

Default.storyName = "Default";
Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);
