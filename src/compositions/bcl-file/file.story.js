import { withDesign } from "storybook-addon-designs";
import file from "@openeuropa/bcl-file/file.html.twig";
import demoData from "@openeuropa/bcl-file/data";
import demoCardData from "@openeuropa/bcl-file/dataCard";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

export default {
  title: "Paragraphs/File",
  decorators: [withDesign],
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
    controls: {
      disable: true,
    },
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
  if (data.icon) {
    data.icon.path = defaultSprite;
  }
  data.download.icon.path = defaultSprite;
  data.translation.label.icon.path = defaultSprite;
  data.translation.items.forEach((item) => {
    if (item.type != "content") {
      item.download.icon.path = defaultSprite;
    }
  });

  return data;
};

export const Default = () => file(correctPaths(demoData));

export const Card = () => file(correctPaths(demoCardData));
