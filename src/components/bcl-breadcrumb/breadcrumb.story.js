import { correctPaths } from "@openeuropa/bcl-story-utils";

import demoData from "@openeuropa/bcl-data-breadcrumb/data.js";
import breadcrumb from "@openeuropa/bcl-breadcrumb/breadcrumb.html.twig";

const getArgs = (data) => ({
  links: data.links,
});

const getArgTypes = () => ({
  links: {
    type: { name: "object" },
    description: "Links",
    table: {
      type: { summary: "object" },
      category: "Content",
    },
  },
});

const applyArgs = (data, args) => Object.assign(correctPaths(data), args);

export default {
  title: "Components/Breadcrumb",
};

export const Default = (args) => breadcrumb(applyArgs(demoData, args));

Default.storyName = "Default";
Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);
