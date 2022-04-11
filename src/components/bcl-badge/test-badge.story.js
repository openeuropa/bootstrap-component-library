import { initBadges } from "@openeuropa/bcl-story-utils";
import withCode from "@openeuropa/storybook-addon-code";
import demoData from "@openeuropa/bcl-data-badge/data.js";
import badge from "@openeuropa/bcl-badge/badge.html.twig";
import defaultSprite from "@openeuropa/bcl-theme-default/icons/bcl-default-icons.svg";

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
