import {
  getFlagNames,
  getIconNames,
  getIconControls,
} from "@openeuropa/bcl-story-utils";
import flagsSprite from "@ecl/resources-flag-icons/dist/sprites/icons-flag.svg";
import "@openeuropa/bcl-theme-default/src/scss/_icon.scss";

import demoData from "@openeuropa/bcl-data-icon/data.js";
import defaultSprite from "@openeuropa/bcl-theme-default/icons/bcl-default-icons.svg";
import icon from "@openeuropa/bcl-icon/icon.html.twig";

const flagData = {
  ...demoData,
  path: flagsSprite,
  name: "cyprus",
  size: "xl",
};

const getArgs = (data) => ({
  name: data.name || "",
  transformation: "",
  size: data.size || "s",
});

const getArgTypes = (data, type) => ({
  ...getIconControls("icon", data),
  name: {
    name: "icon name",
    type: { name: "select" },
    options: type === "flags" ? [...getFlagNames()] : [...getIconNames()],
    description: "Icon name",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Icon",
    },
  },
});

const applyArgs = (data, args) => Object.assign(data, args);

export default {
  title: "Components/Icon",
  parameters: {
    badges: ["deprecated"],
  },
};

export const Default = (args) =>
  icon(applyArgs({ ...demoData, path: defaultSprite }, args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);

export const Flags = (args) => icon(applyArgs(flagData, args));

Flags.args = getArgs(flagData);
Flags.argTypes = getArgTypes(flagData, "flags");
