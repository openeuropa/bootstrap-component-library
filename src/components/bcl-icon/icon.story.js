import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-data-icon/data.js";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";
import icon from "@openeuropa/bcl-icon/icon.html.twig";
import "!!null-loader!@openeuropa/bcl-theme-default/scss/_icon.scss";
import { getIconControls } from "@openeuropa/bcl-story-utils";

const getArgs = (data) => {
  return {
    name: data.name || "",
    transformation: "",
    size: "s",
  };
};

const getArgTypes = (data) => {
  return {
    ...getIconControls("icon", data),
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
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2892%3A1152",
      },
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=2892%3A7237",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/extend/icons/",
      },
    ],
  },
};

export const Default = (args) =>
  icon(applyArgs({ ...demoData, path: defaultSprite }, args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);
