import { withDesign } from "storybook-addon-designs";
import { screen, userEvent } from "@storybook/testing-library";
import file from "@openeuropa/bcl-file/file.html.twig";
import demoData from "@openeuropa/bcl-file/data";
import demoCardData from "@openeuropa/bcl-file/dataCard";
import { correctPaths } from "@openeuropa/bcl-story-utils";

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

export const Default = () => file(correctPaths(demoData));

export const Card = () => file(correctPaths(demoCardData));

Card.play = async () => {
  const languages = screen.getByText("Other languages (3)");
  await userEvent.click(languages);
};
