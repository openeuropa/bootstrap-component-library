const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  id: "1",
  items: [
    {
      title_tag: "h5",
      title: "Accordion Item #1",
      content: getDummyText(2),
    },
    {
      title_tag: "h4",
      title: "Accordion Item #2",
      content: getDummyText(2),
    },
    {
      title_tag: "h3",
      title: "Accordion Item #3",
      content: getDummyText(2),
    },
  ],
  open_item_id: 1,
};
