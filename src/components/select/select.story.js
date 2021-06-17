import { withDesign } from "storybook-addon-designs";
import { getFormControls } from "@openeuropa/bcl-story-utils";
import demoData from "@openeuropa/bcl-data-select/data.js";
import demoMultiData from "@openeuropa/bcl-data-select/dataMultiselect.js";
import select from "./select.html.twig";

const getArgTypes = (data, type) => {
  return {
    ...getFormControls(data, type),
  };
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

const withInit = (story) => {
  const demo = story();
  return `
    ${demo}
    <script>        
      new SlimSelect({
        select: '.multi-select'
      })
    </script>`;
};

// Stories
export default {
  title: "Components/Forms/Select",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2695%3A58",
      },
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=53%3A24",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/forms/select/",
      },
    ],
  },
};

export const Default = (args) => select(applyArgs(demoData, args));

Default.argTypes = getArgTypes(demoData, "select");

export const Multiselect = (args) => select(applyArgs(demoMultiData, args));

Multiselect.argTypes = getArgTypes(demoMultiData, "select");
Multiselect.decorators = [withInit];
