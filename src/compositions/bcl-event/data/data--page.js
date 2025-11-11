const { DrupalAttribute } = require("drupal-attribute");
const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  banner: {
    background: "gray",
    title:
      "Translation, Interpreting, Culture 2: Human Factor in translation Technologies",
    badges: [
      {
        label: "Culture",
        outline: true,
        rounded_pill: true,
      },
      {
        label: "Technology",
        outline: true,
        rounded_pill: true,
      },
    ],
    content: `<div class="my-3"><span class="text-muted me-3">Published: 3 September 2020</span></div>${getDummyText(
      5,
      true,
    )}`,
    image: {
      path: "https://picsum.photos/255/255?random=6",
      alt: "alt img",
    },
    image_size: "lg",
    links: [
      {
        label: "Register",
        path: "/example.html",
        icon_position: "before",
        icon: {
          name: "calendar-check",
          path: "/icons.svg",
        },
        attributes: new DrupalAttribute().addClass([
          "btn",
          "btn-primary",
          "d-block",
          "d-md-inline-block",
        ]),
      },
    ],
  },
  sidebar: {
    title: "Page content",
    title_attributes: new DrupalAttribute().addClass("mb-0"),
    id: "bcl-inpage-navigation",
    icon_path: "/icons.svg",
    dropdown_id: "bcl-inpage-navigation-dropdown",
    links: [
      {
        label: "Description",
        path: "#item-1",
      },
      {
        label: "Related documents",
        path: "#item-2",
      },
    ],
  },
};
