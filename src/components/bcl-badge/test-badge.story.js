import { initBadges } from "@openeuropa/bcl-story-utils";
import withCode from "@openeuropa/storybook-addon-code";
import isChromatic from "chromatic/isChromatic";
import { within, userEvent } from "@storybook/testing-library";
import demoData from "@openeuropa/bcl-data-badge/data.js";
import badge from "@openeuropa/bcl-badge/badge.html.twig";
import defaultSprite from "@openeuropa/bcl-theme-default/icons/bcl-default-icons.svg";

const chromatic = process.env.STORYBOOK_ENV;

demoData.icon_path = defaultSprite;

export default {
  title: "Components/Badge",
  decorators: [withCode, initBadges],
};

export const Dismissible = () => badge({ ...demoData, dismissible: true });

export const RoundedPill = () => badge({ ...demoData, rounded_pill: true });

RoundedPill.storyName = "Rounded pill";

export const Outline = () => badge({ ...demoData, outline: true });

export const Link = () => badge({ ...demoData, url: true });

export const HoverFocus = () =>
  badge({ ...demoData, url: true, outline: true, dismissible: true });
HoverFocus.storyName = "Hover and focus";
if (isChromatic() || chromatic) {
  HoverFocus.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const link = canvas.getByTitle("A simple badge!", {
      selector: "a",
    });

    await userEvent.tab(link);
  };
}
