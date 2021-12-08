import dateBlock from "@openeuropa/bcl-date-block/date-block.html.twig";
import demoData from "@openeuropa/bcl-date-block/data/data";

const getArgs = (data) => {
  return {
    day: data.day,
    month: data.month,
    year: data.year,
    date_time: data.date_time,
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
  };
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: "Compositions/Date block",
};

export const Standalone = (args) => dateBlock(applyArgs(demoData, args));

Standalone.args = getArgs(demoData);
Standalone.argTypes = getArgTypes(demoData);
