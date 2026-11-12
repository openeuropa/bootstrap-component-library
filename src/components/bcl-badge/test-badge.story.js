import { expect, userEvent, waitFor } from "storybook/test";
import { DrupalAttribute } from "drupal-attribute";
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

export const Link = () => badge({ ...data, url: "#badge-example" });

export const HoverFocus = () =>
  badge({ ...data, url: "#badge-example", outline: true });
HoverFocus.storyName = "Hover and focus";

export const InteractiveVariants = async () =>
  (
    await Promise.all(
      ["light", "dark", "primary"].map(async (background) => {
        const badges = await Promise.all(
          ["primary", "secondary"].flatMap((variant) =>
            [false, true].flatMap((rounded_pill) =>
              [false, true].map((outline) =>
                badge({
                  ...data,
                  label: `${variant === "secondary" ? "Secondary " : ""}${outline ? "Outline" : "Plain"}${rounded_pill ? " pill" : ""}`,
                  background: variant,
                  url: "#badge-example",
                  outline,
                  rounded_pill,
                }),
              ),
            ),
          ),
        );
        return `
          <div class="bg-${background} p-4 mb-3">
            <div class="d-flex flex-wrap gap-3">${badges.join("")}</div>
          </div>
        `;
      }),
    )
  ).join("");
InteractiveVariants.storyName = "Interactive styles on different backgrounds";
InteractiveVariants.tags = ["badge-test"];
InteractiveVariants.play = async ({ canvasElement }) => {
  const links = canvasElement.querySelectorAll("a.badge");
  const rootSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );
  const beforeBadges = document.createElement("button");
  beforeBadges.textContent = "Before badges";
  canvasElement.prepend(beforeBadges);
  try {
    beforeBadges.focus();
    for (const link of links) {
      const initial = link.getBoundingClientRect();
      if (window.matchMedia("(min-width: 768px)").matches) {
        await expect(initial.height).toBeCloseTo(rootSize * 1.75, 1);
      }
      await userEvent.tab();
      await expect(link).toHaveFocus();
      await expect(link.matches(":focus-visible")).toBe(true);
      // Hover must not override the keyboard focus treatment.
      await userEvent.hover(link);
      const focused = getComputedStyle(link);
      await expect(focused.outlineStyle).toBe("solid");
      await expect(parseFloat(focused.outlineWidth)).toBeCloseTo(
        rootSize / 8,
        1,
      );
      await waitFor(() =>
        expect(getComputedStyle(link).boxShadow).toContain(
          "rgb(255, 255, 255)",
        ),
      );
      await expect(focused.backgroundColor).not.toBe("rgba(0, 0, 0, 0)");
      await expect(link.getBoundingClientRect().height).toBe(initial.height);
      await expect(link.getBoundingClientRect().width).toBe(initial.width);
      await userEvent.unhover(link);
    }
  } finally {
    beforeBadges.remove();
  }
};

export const FocusWithButtonClasses = () =>
  badge({
    ...data,
    label: "Badge with button classes",
    url: "#badge-example",
    attributes: new DrupalAttribute().addClass([
      "btn",
      "btn-warning",
      "active",
    ]),
  });
FocusWithButtonClasses.storyName = "Focus with an incorrect button class";
FocusWithButtonClasses.tags = ["badge-test"];
FocusWithButtonClasses.play = InteractiveVariants.play;
