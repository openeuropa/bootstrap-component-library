import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import { correctPaths } from "@openeuropa/bcl-story-utils";
import isChromatic from "chromatic/isChromatic";
import { within, userEvent } from "@storybook/testing-library";

import demoData from "@openeuropa/bcl-language-switcher/data.js";
import languageSwitcher from "@openeuropa/bcl-language-switcher/language-switcher.html.twig";

export default {
  title: "Compositions/Language Switcher",
  decorators: [withCode, withDesign],
  parameters: {
    badges: ["stable", "deprecated"],
    layout: "padded",
    controls: { disable: true },
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit---Components?node-id=0%3A1",
      },
    ],
  },
};

export const Default = () => languageSwitcher(correctPaths(demoData));
if (isChromatic()) {
  Default.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Choose another language");
    await userEvent.click(button);
  };
}
