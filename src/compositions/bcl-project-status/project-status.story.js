import { withDesign } from "storybook-addon-designs";

import dataOngoing from "@openeuropa/bcl-project-status/data/data--ongoing";
import projectStatus from "@openeuropa/bcl-project-status/project-status.html.twig";

const getArgs = (data) => {
  return {
    title: data.title,
    status: data.status,
    badge: data.badge,
    start_date: data.start_date,
    end_date: data.start_date,
    progress: data.progress,
    corporate_contribution: data.corporate_contribution,
    chart_legend: data.chart_legend,
  };
};

const getArgTypes = (data) => {
  return {
    title: {
      type: { name: "string", required: true },
      description: "Project status title",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    status: {
      type: { name: "select" },
      options: ["ongoing", "planned", "closed"],
      description: "Status of the project",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "planned" },
        category: "Content",
      },
    },
    badge: {
      type: { name: "string", required: true },
      description: "Label of the badge status",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    start_date: {
      type: "string",
      description: "Project start date",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    end_date: {
      type: "string",
      description: "Project end date",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    progress: {
      type: { name: "number" },
      description: "Progress of the project",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "" },
        category: "Content",
      },
      control: {
        type: "range",
        min: 0,
        max: 100,
      },
    },
    corporate_contribution: {
      type: { name: "number" },
      description: "Corporate contribution percentage to the project",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "" },
        category: "Content",
      },
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 5,
      },
    },
    chart_legend: {
      type: { name: "object" },
      description: "Legend of the corporation contribution chart",
      control: {
        type: "object",
      },
      table: {
        type: { summary: "object" },
        defaultValue: { summary: "{}" },
        category: "Content",
      },
    },
  };
};

const applyArgs = (data, args) => Object.assign(data, args);

export default {
  title: "Compositions/Project status",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=4298%3A144965",
      },
    ],
  },
};

export const Default = (args) => projectStatus(applyArgs(dataOngoing, args));

Default.args = getArgs(dataOngoing);
Default.argTypes = getArgTypes(dataOngoing);
