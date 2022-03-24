import { withDesign } from "storybook-addon-designs";
import dateBlock from "@openeuropa/bcl-date-block/date-block.html.twig";
import demoData from "@openeuropa/bcl-date-block/data/data";

const getArgs = (data) => {
  return {
    day: data.day,
    month: data.month,
    year: data.year,
    date_time: data.date_time,
    end_day: "",
    end_month: "",
    end_year: "",
  };
};

const getArgTypes = () => {
  return {
    day: {
      type: { name: "string" },
      description: "Day",
      table: {
        type: { summary: "integer" },
        defaultValue: { summary: "" },
      },
    },
    month: {
      type: { name: "string" },
      description: "Month",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    year: {
      type: { name: "string" },
      description: "Year",
      table: {
        type: { summary: "integer" },
        defaultValue: { summary: "" },
      },
    },
    date_time: {
      name: "datetime attribute",
      type: { name: "string" },
      description: "Valid date format",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    end_day: {
      name: "end day",
      type: { name: "string" },
      description: "End Day",
      table: {
        type: { summary: "integer" },
        defaultValue: { summary: "" },
      },
    },
    end_month: {
      name: "end month",
      type: { name: "string" },
      description: "End Month",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    end_year: {
      name: "end year",
      type: { name: "string" },
      description: "End Year",
      table: {
        type: { summary: "integer" },
        defaultValue: { summary: "" },
      },
    },
  };
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: "Compositions/Date block",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit---Components?node-id=4332%3A42035",
      },
    ],
  },
};

export const Standalone = (args) => dateBlock(applyArgs(demoData, args));

Standalone.args = getArgs(demoData);
Standalone.argTypes = getArgTypes(demoData);
