import { withDesign } from "storybook-addon-designs";
import demoData from "@oe/data-pagination/data";
import demoCustomIconsData from "@oe/data-pagination/dataCustomIcons";
import pagination from "./pagination.html.twig";
import defaultSprite from "@oe/bootstrap/bootstrap-icons.svg";

const getArgTypes = (data) => {
  return {
    size: {
      type: { name: "select" },
      description: "size",
      defaultValue: "",
      control: {
        type: "select",
        options: {
          small: "sm",
          medium: "",
          large: "lg",
        },
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
    },
    alignment: {
      type: { name: "select" },
      description: "alignment",
      defaultValue: "",
      control: {
        type: "select",
        options: {
          left: "",
          center: "center",
          right: "end",
        },
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
    },
    enable_icon: {
      name: "enable icon",
      type: { name: "boolean" },
      description: "Enable icon for previous and next",
      defaultValue: data.enable_icon,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
  };
};

const applyArgs = (data, args) => {
  if (data.next.icon) {
    data.next.icon.path = defaultSprite;
    data.next.icon.size = "m";
  }
  if (data.prev.icon) {
    data.prev.icon.path = defaultSprite;
    data.prev.icon.size = "m";
  }
  return Object.assign(data, args);
};

export default {
  title: "Components/Pagination",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2737%3A631",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/components/pagination/",
      },
    ],
  },
};

export const Default = (args) => pagination(applyArgs(demoData, args));

Default.storyName = "Default";
Default.argTypes = getArgTypes(demoData);

export const customIcons = (args) =>
  pagination(applyArgs(demoCustomIconsData, args));

customIcons.storyName = "With Custom Icons";
customIcons.argTypes = getArgTypes(demoCustomIconsData);
