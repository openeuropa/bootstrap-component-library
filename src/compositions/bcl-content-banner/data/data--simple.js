const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  background: "white",
  title: "This is the title of this page",
  content: `<div class="my-3"><span class="text-muted me-3">17 October 2019</span></div>${getDummyText(
    3,
    true
  )}`,
};
