const drupalAttribute = require("drupal-attribute");
const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  sidebar: {
    title: "Page content",
    id: "bcl-inpage-navigation",
    title_attributes: new drupalAttribute().addClass("mb-0"),
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
      content: `
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum facilisis ex, ac porta massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Duis fermentum facilisis ex, ac porta massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum facilisis ex, ac porta massa.
      </p>
      ${getDummyText(5)}`,
    },
    {
      title_id: "objective",
      title: "Objective",
      content: `
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum facilisis ex, ac porta massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Duis fermentum facilisis ex, ac porta massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum facilisis ex, ac porta massa.
      </p>
      ${getDummyText(2)}`,
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
      content: `
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum facilisis ex, ac porta massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Duis fermentum facilisis ex, ac porta massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum facilisis ex, ac porta massa.
      </p>
      ${getDummyText(3)}`,
    },
  ],
};
