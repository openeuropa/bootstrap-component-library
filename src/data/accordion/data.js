const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  id: "1",
  items: [
    {
      title: "Accordion Item #1",
      content: getDummyText(8, false),
    },
    {
      title: "Accordion Item #2",
      content: getDummyText(6, false),
    },
    {
      title: "Accordion Item #3",
      content: getDummyText(16, false),
    },
  ],
  open_item_id: 1,
};
