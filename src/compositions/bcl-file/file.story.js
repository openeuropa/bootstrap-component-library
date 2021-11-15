import { withDesign } from "storybook-addon-designs";
import file from "@openeuropa/bcl-file/file.html.twig";
import demoData from "@openeuropa/bcl-file/data";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

const getArgs = (data) => {
  return {
    inline_download: data.inline_download || true,
  };
};

const getArgTypes = () => {
  return {
    inline_download: {
      name: "inline download",
      type: { name: "boolean" },
      description: "Inline download button",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
        category: "Style",
      },
    },
  };
};

export default {
  title: "Paragraphs/File",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Mockup - File",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=6818%3A91821",
      },
    ],
  },
};

const correctPaths = (data) => {
  data.icon.path = defaultSprite;
  data.download.icon.path = defaultSprite;
  data.other_dropdown.dropdown_label.icon.path = defaultSprite;
  data.other_dropdown.items.forEach(item => {
    if (item.type != "content") {
      item.download.icon.path = defaultSprite;
    }
  });


  return data;
};

export const File = () => file(correctPaths(demoData));

File.storyName = "File";
File.args = getArgs(demoData);
File.argTypes = getArgTypes();
