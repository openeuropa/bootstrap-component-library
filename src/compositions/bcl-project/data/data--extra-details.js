const drupalAttribute = require("drupal-attribute");
const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  sidebar: {
    title: "Page content",
    id: "bcl-inpage-navigation",
    attributes: new drupalAttribute().addClass(["d-none", "d-lg-block"]),
    links: [
      {
        label: "Project details",
        path: "#project-details",
      },
      {
        label: "Summary",
        path: "#summary",
      },
      {
        label: "Objective",
        path: "#objective",
      },
      {
        label: "Impact",
        path: "#impact",
      },
      {
        label: "Contributors",
        path: "#contributors",
      },
      {
        label: "Achievements and milestones",
        path: "#achievements",
      },
      {
        label: "Gallery",
        path: "#gallery",
      },
    ],
  },
  first_paragraphs: [
    {
      title_id: "summary",
      title: "Summary",
      content: getDummyText(6),
    },
    {
      title_id: "objective",
      title: "Objective",
      content: getDummyText(6),
    },
    {
      title_id: "impact",
      title: "Impact",
      content: getDummyText(6),
    },
  ],
  second_paragraphs: [
    {
      title_id: "achievements",
      title: "Achievements and Milestones",
      content: getDummyText(6),
    },
  ],
};
