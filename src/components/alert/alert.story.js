import alert from "./alert.html.twig";

export default {
  title: "Components/Alert",
};

export const Default = (args) => alert(args);

Default.storyName = "default";
Default.argTypes = {
  variant: {
    type: { name: "select" },
    description: "Available variants",
    defaultValue: "alert-primary",
    table: {
      type: { summary: "select" },
    },
    control: {
      type: "select",
      options: [
        "alert-primary",
        "alert-secondary",
        "alert-success",
        "alert-danger",
        "alert-warning",
        "alert-info",
        "alert-light",
        "alert-dark",
      ],
    },
  },
};
