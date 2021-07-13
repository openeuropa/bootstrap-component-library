import { withDesign } from "storybook-addon-designs";
import demoDataGroup from "@openeuropa/bcl-data-card-layout/dataGroup.js";
import demoDataGrid from "@openeuropa/bcl-data-card-layout/dataGrid.js";
import demoDataMasonry from "@openeuropa/bcl-data-card-layout/dataMasonry.js";
import cardLayout from "./card-layout.html.twig";

const getArgTypes = (data, type) => {
  let argTypes = {};
  argTypes.type = {
    name: "type",
    type: { name: "select" },
    description: "Layout type of multiple cards",
    defaultValue: type,
    control: {
      type: "select",
      options: [type],
    },
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
      defaultValue: true,
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
      defaultValue: 1,
      control: {
        type: "select",
        options: ["2", "3"],
      },
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
      defaultValue: data.responsive_colums,
      control: {
        type: "select",
        options: ["2", "3"],
      },
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
      defaultValue: data.responsiveness,
      control: {
        type: "select",
        options: ["sm", "md", "lg", "xl", "xxl"],
      },
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
      defaultValue: "4",
      control: {
        type: "select",
        options: ["0", "1", "2", "3", "4", "5"],
      },
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
  data.items.forEach((item) => {
    item.attributes.removeClass("h-100");
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
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2788%3A0",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/components/card/",
      },
    ],
  },
};

export const Group = (args) => cardLayout(applyArgs(demoDataGroup, args));

Group.storyName = "Group";
Group.argTypes = getArgTypes(demoDataGroup, "group");

export const Grid = (args) => cardLayout(applyArgs(demoDataGrid, args));

Grid.storyName = "Grid";
Grid.argTypes = getArgTypes(demoDataGrid, "grid");

export const Masonry = (args) => cardLayout(applyArgs(demoDataMasonry, args));

Masonry.storyName = "Masonry";
Masonry.argTypes = getArgTypes(demoDataMasonry, "masonry");
Masonry.decorators = [withScript];
