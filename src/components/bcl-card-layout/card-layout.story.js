import { withDesign } from "storybook-addon-designs";
import demoDataGroup from "@openeuropa/bcl-data-card-layout/dataGroup.js";
import demoDataGrid from "@openeuropa/bcl-data-card-layout/dataGrid.js";
import demoDataMasonry from "@openeuropa/bcl-data-card-layout/dataMasonry.js";
import cardLayout from "@openeuropa/bcl-card-layout/card-layout.html.twig";

const getArgs = (data, type) => {
  let args = { type: type };
  if (type == "grid") {
    args.equal_height = true;
  }
  if (type == "grid") {
    args.grid_columns = 1;
    args.responsive_colums = data.responsive_colums;
    args.responsiveness = data.responsiveness;
    args.gutter = data.gutter || 4;
  }

  return args;
};

const getArgTypes = (data, type) => {
  let argTypes = {};
  argTypes.type = {
    type: { name: "select" },
    description: "Layout type of multiple cards",
    options: [type],
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Style",
    },
  };
  if (type == "grid") {
    argTypes.equal_height = {
      type: { name: "boolean" },
      name: "equal height",
      description: "Cards height to be equal",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    };
  }
  if (type == "grid" || type == "masonry") {
    argTypes.grid_columns = {
      name: "grid columns",
      type: { name: "select" },
      description: "Number of columns",
      options: [1, 2, 3],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Layout",
      },
    };
    argTypes.responsive_colums = {
      name: "responsive columns",
      type: { name: "select" },
      description: "Number of columns for responsive",
      options: [2, 3],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Layout",
      },
    };
    argTypes.responsiveness = {
      name: "responsiveness",
      type: { name: "select" },
      description: "Breakpoint for responsive columns",
      options: ["sm", "md", "lg", "xl", "xxl"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Layout",
      },
    };
    argTypes.gutter = {
      name: "gutter",
      type: { name: "select" },
      description: "Gutters size",
      options: [0, 1, 2, 3, 4, 5],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "4" },
        category: "Style",
      },
    };
  }

  return argTypes;
};

const applyArgs = (data, args) => {
  data.attributes.removeClass([
    `g-${data.gutter}`,
    `row-cols-${data.grid_columns}`,
    `row-cols-${data.responsiveness}-${data.responsive_colums}`,
  ]);
  data.items.forEach((item) => {
    if (item.attributes) {
      item.attributes.removeClass("h-100");
    }
  });

  return Object.assign(data, args);
};

const withScript = (story) => {
  const demo = story();
  return `<script
  src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
  integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
  crossorigin="anonymous"
  async
></script>${demo}`;
};

export default {
  title: "Components/Card/Layout",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=4150%3A35066",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.1/components/card/",
      },
    ],
  },
};

export const Group = (args) => cardLayout(applyArgs(demoDataGroup, args));

Group.args = getArgs(demoDataGroup, "group");
Group.argTypes = getArgTypes(demoDataGroup, "group");

export const Grid = (args) => cardLayout(applyArgs(demoDataGrid, args));

Grid.args = getArgs(demoDataGrid, "grid");
Grid.argTypes = getArgTypes(demoDataGrid, "grid");

export const Masonry = () => cardLayout(demoDataMasonry);

Masonry.decorators = [withScript];
Masonry.parameters = { options: { showPanel: false } };
