import { withDesign } from "storybook-addon-designs";
import { screen, userEvent } from "@storybook/testing-library";
import isChromatic from "chromatic/isChromatic";
import demoData from "@openeuropa/bcl-data-dropdown/data.js";
import dropdown from "@openeuropa/bcl-dropdown/dropdown.html.twig";
import drupalAttribute from "drupal-attribute";

const chromatic = process.env.STORYBOOK_ENV;

const getArgs = (data) => {
  return {
    direction: "default",
    dark: false,
  };
};

const getArgTypes = (data) => {
  return {
    direction: {
      type: { name: "select" },
      description: "Direction of dropdown menu",
      options: ["default", "dropup", "dropend", "dropstart"],
      control: {
        type: "select",
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
    },
    dark: {
      type: { name: "boolean" },
      description: "Enables dark mode for dropdown menu",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
  };
};

const resetAttrs = (data) => {
  data.attributes.removeClass("dropdown-menu-dark");
};

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }

  if (args.direction === "default") {
    args.direction = "";
  }

  resetAttrs(data);

  return Object.assign(data, args);
};

const paddingBody = (story) => {
  const demo = story();
  return `<div style="padding: 10rem 0 10rem 14rem">${demo}</div>`;
};

export default {
  title: "Components/Dropdown",
  decorators: [withDesign, paddingBody],
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=21%3A16",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.1/components/dropdowns/",
      },
    ],
  },
};

export const Default = (args) => dropdown(applyArgs(demoData, args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);
if (isChromatic() || chromatic) {
  Default.play = async () => {
    const button = screen.getByRole("button");
    await userEvent.click(button);
  };
}
