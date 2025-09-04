import drupalAttribute from "drupal-attribute";
import { correctPaths } from "@openeuropa/bcl-story-utils";

import demoData from "@openeuropa/bcl-search-form/data/data--search.js";
import demoDataSubmittable from "@openeuropa/bcl-search-form/data/data--search-submit";
import searchForm from "@openeuropa/bcl-search-form/search-form.html.twig";

const getArgs = (data) => ({
  pill: data.pill || false,
});

const getArgTypes = () => ({
  pill: {
    type: { name: "boolean" },
    description: "Display input as a pill",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
      category: "Style",
    },
  },
});

export default {
  title: "Compositions/Search Form",
  parameters: {
    badges: ["deprecated"],
  },
};

const resetAttrs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }
  if (!args.pill) {
    data.attributes.removeClass("rounded");
  }
};

const applyArgs = (data, args) => {
  resetAttrs(data, args);
  correctPaths(data);
  return Object.assign(data, args);
};

export const Default = (args) => searchForm(applyArgs(demoData, args));
Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);

export const Submittable = (args) =>
  searchForm(applyArgs(demoDataSubmittable, args));
Submittable.args = getArgs(demoDataSubmittable);
Submittable.argTypes = getArgTypes(demoDataSubmittable);
