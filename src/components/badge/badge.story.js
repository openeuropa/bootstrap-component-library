import badge from "./badge.html.twig";

export default {
  title: "Components/Badge",
};

export const Badge = (args) => badge(args);

Badge.storyName = "default";
Badge.argTypes = {
  variant: {
    type: { name: "select" },
    description: "Available variants",
    defaultValue: "bg-primary",
    table: {
      type: { summary: "select" },
    },
    control: {
      type: "select",
      options: [
        "bg-primary",
        "bg-secondary",
        "bg-success",
        "bg-danger",
        "bg-warning",
        "bg-info",
        "bg-light",
        "bg-dark",
      ],
    },
  },
};
