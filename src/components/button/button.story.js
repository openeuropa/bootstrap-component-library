import button from "./button.html.twig";

export default {
  title: "Components/Button",
};

export const Button = (args) => button(args);

Button.storyName = "default";
Button.argTypes = {
  variant: {
    type: { name: "select" },
    description: "Available variants",
    defaultValue: "btn-primary",
    table: {
      type: { summary: "select" },
    },
    control: {
      type: "select",
      options: [
        "btn-primary",
        "btn-secondary",
        "btn-success",
        "btn-danger",
        "btn-warning",
        "btn-info",
        "btn-light",
        "btn-dark",
      ],
    },
  },
};
