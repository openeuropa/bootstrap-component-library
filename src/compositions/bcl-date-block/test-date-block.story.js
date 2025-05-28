import { correctPaths } from "@openeuropa/bcl-story-utils";
import dateBlock from "@openeuropa/bcl-date-block/date-block.html.twig";
import demoData from "@openeuropa/bcl-date-block/data/data--end-date";

export default {
  title: "Compositions/Date block",
  parameters: {
    badges: ["deprecated"],
  },
};

const applyArgs = (data) => {
  correctPaths(data);

  return Object.assign(data);
};

export const EndDate = () => dateBlock(applyArgs(demoData));
