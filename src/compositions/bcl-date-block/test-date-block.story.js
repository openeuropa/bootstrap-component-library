import dateBlock from "@openeuropa/bcl-date-block/date-block.html.twig";
import demoData from "@openeuropa/bcl-date-block/data/data--end-date";

export default {
  title: "Compositions/Date block",
  parameters: {
    badges: ["deprecated"],
  },
};

export const EndDate = () => dateBlock(demoData);
