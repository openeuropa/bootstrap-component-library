import { initBadges, correctPaths } from "@openeuropa/bcl-story-utils";

import demoData from "@openeuropa/bcl-data-badge/data.js";
import badge from "@openeuropa/bcl-badge/badge.html.twig";

const data = correctPaths(demoData);

export default {
  title: "Components/Badge",
  decorators: [initBadges],
  parameters: {
    badges: ["deprecated"],
  },
};

export const Dismissible = () => badge({ ...data, dismissible: true });

export const RoundedPill = () => badge({ ...data, rounded_pill: true });

RoundedPill.storyName = "Rounded pill";

export const Outline = () => badge({ ...data, outline: true });

export const Link = () => badge({ ...data, url: true });

export const HoverFocus = () =>
  badge({ ...data, url: true, outline: true, dismissible: true });
HoverFocus.storyName = "Hover and focus";
