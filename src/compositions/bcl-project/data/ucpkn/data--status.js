const drupalAttribute = require("drupal-attribute");

module.exports = {
  title: "Overview",
  title_attributes: new drupalAttribute().setAttribute("id", "overview"),
  label: "Status",
  start_date: "19/12/2020",
  start_label: "Start",
  end_date: "19/12/2027",
  end_label: "End",
  progress: 25,
};
