import { withDesign } from "storybook-addon-designs";
import { getFlagNames } from "@openeuropa/bcl-story-utils";
import demoData from "@openeuropa/bcl-data-icon/data.js";
import defaultSprite from "@openeuropa/bcl-theme-default/icons/bcl-default-icons.svg";
import flagsSprite from "@ecl/resources-flag-icons/dist/sprites/icons-flag.svg";
import icon from "@openeuropa/bcl-icon/icon.html.twig";
import "!!null-loader!@openeuropa/bcl-theme-default/src/scss/_icon.scss";
import { getIconControls } from "@openeuropa/bcl-story-utils";

const flagData = {
  ...demoData,
  path: flagsSprite,
  name: "cyprus",
  size: "xl",
};

const getArgs = (data) => {
  return {
    name: data.name || "",
    transformation: "",
    size: data.size || "s",
  };
};

const getArgTypes = (data) => {
  return {
    ...getIconControls("icon", data),
    name: {
      name: "icon name",
      type: { name: "select" },
      options: [...getFlagNames()],
      description: "Icon name",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Icon",
      },
    },
  };
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: "Components/Icon",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=2892%3A7237",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.1/extend/icons/",
      },
    ],
  },
};

export const Default = (args) =>
  icon(applyArgs({ ...demoData, path: defaultSprite }, args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);

export const Flags = (args) => icon(applyArgs(flagData, args));

Flags.args = getArgs(flagData);
Flags.argTypes = getArgTypes(flagData);
