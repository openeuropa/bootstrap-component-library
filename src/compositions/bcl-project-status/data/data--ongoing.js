const drupalAttribute = require("drupal-attribute");

module.exports = {
  title: "Project details",
  title_id: "project-details",
  status: "ongoing",
  label: "Status",
  badge: "Ongoing",
  start_date: "18 January 2020",
  start_label: "Start",
  end_date: "19 December 2027",
  end_label: "End",
  progress: 25,
  corporate_contribution: 70,
  chart_legend: {
    variant: "horizontal",
    items: [
      {
        term: {
          label: "Total budget",
          color: "bg-gray-400",
        },
        definition: "EUR 16.314.672,00",
      },
      {
        term: {
          label: "EC contribution",
          color: "bg-primary",
        },
        definition: "EUR 9.994.672,00",
      },
    ],
    attributes: new drupalAttribute().addClass("mb-0"),
  },
};
