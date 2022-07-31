import { initBadges, correctPaths } from "@openeuropa/bcl-story-utils";
import withCode from "@openeuropa/storybook-addon-code";
import isChromatic from "chromatic/isChromatic";
import { within, userEvent } from "@storybook/testing-library";
import demoData from "@openeuropa/bcl-data-badge/data";
import badge from "@openeuropa/bcl-badge/badge.html.twig";

const chromatic = process.env.STORYBOOK_ENV;

const data = correctPaths(demoData);

export default {
  title: "Components/Badge",
  decorators: [withCode, initBadges],
};

export const Dismissible = () => badge({ ...data, dismissible: true });

export const RoundedPill = () => badge({ ...data, rounded_pill: true });

RoundedPill.storyName = "Rounded pill";

export const Outline = () => badge({ ...data, outline: true });

export const Link = () => badge({ ...data, url: true });

export const HoverFocus = () =>
  badge({ ...data, url: true, outline: true, dismissible: true });
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
