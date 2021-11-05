import dateBlock from "@openeuropa/bcl-date-block/date-block.html.twig";
import listing from "@openeuropa/bcl-listing/listing.html.twig";
import demoData from "@openeuropa/bcl-date-block/data/data";
import demoListingData from "@openeuropa/bcl-date-block/data/data--listing";

const getArgs = (data) => {
  return {
    day: data.day,
    month: data.month,
    year: data.year,
  };
};

const getArgTypes = () => {
  return {
    day: {
      type: { name: "string" },
      description: "Day",
      table: {
        type: { summary: "integer" },
        StandaloneValue: { summary: "" },
      },
    },
    month: {
      type: { name: "string" },
      description: "Month",
      table: {
        type: { summary: "string" },
        StandaloneValue: { summary: "" },
      },
    },
    year: {
      type: { name: "string" },
      description: "Year",
      table: {
        type: { summary: "integer" },
        StandaloneValue: { summary: "" },
      },
    },
  };
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: "Compositions/Date block",
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const Standalone = (args) => dateBlock(applyArgs(demoData));

Standalone.args = getArgs(demoData);
Standalone.argTypes = getArgTypes();

export const Listing = () => listing(demoListingData);

Listing.storyName = "In a listing item";
Listing.parameters = {
  viewport: {
    defaultViewport: "responsive",
  },
};
