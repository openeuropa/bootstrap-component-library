const drupalAttribute = require("drupal-attribute");

module.exports = {
  chart: true,
  corporate_contributions: 70,
  legend: {
    variant: "horizontal",
    items: [
      {
        term: [
          {
            label: "Total budget",
            color: "bg-gray-400",
          },
        ],
        definition: "EUR 16.314.672,00",
      },
      {
        term: [
          {
            label: "EC contribution",
            color: "bg-primary",
          },
        ],
        definition: "EUR 9.994.672,00",
      },
    ],
    attributes: new drupalAttribute().addClass("mb-0"),
  },
};
