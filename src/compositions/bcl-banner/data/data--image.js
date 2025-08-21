import drupalAttribute from "drupal-attribute";

const data = {
  title: "EU Budget for the future",
  description: "Innovation, economy, environment and geopolitics",
  link: {
    label: "Subscribe",
    path: "/example.html",
    icon: {
      name: "chevron-right",
      path: "/icons.svg",
      size: "fluid",
    },
    attributes: new drupalAttribute().addClass(["btn", "btn-primary"]),
  },
  image: "https://picsum.photos/id/154/1200/800",
  attributes: new drupalAttribute().addClass([
    "bg-lighter",
    "text-dark",
    "text-center",
  ]),
};

export default data;
