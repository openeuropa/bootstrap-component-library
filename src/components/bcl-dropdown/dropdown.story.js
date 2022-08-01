import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import { correctPaths } from "@openeuropa/bcl-story-utils";
import { within, userEvent } from "@storybook/testing-library";
import isChromatic from "chromatic/isChromatic";
import drupalAttribute from "drupal-attribute";

import demoData from "@openeuropa/bcl-data-dropdown/data.js";
import dropdown from "@openeuropa/bcl-dropdown/dropdown.html.twig";

const chromatic = process.env.STORYBOOK_ENV;

const getArgs = () => ({
  direction: "default",
  dark: false,
});

const getArgTypes = () => ({
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
});

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

  return Object.assign(correctPaths(data), args);
};

const paddingBody = (story) => {
  const demo = story();
  return `<div style="padding: 10rem 0 10rem 14rem">${demo}</div>`;
};

export default {
  title: "Components/Dropdown",
  decorators: [withCode, withDesign, paddingBody],
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
  Default.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);
  };
}
