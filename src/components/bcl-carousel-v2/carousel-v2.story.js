import { expect, userEvent, waitFor, within } from "storybook/test";
import { correctPaths } from "@openeuropa/bcl-story-utils";
import carousel from "@openeuropa/bcl-carousel-v2/carousel.html.twig";
import data from "@openeuropa/bcl-carousel-v2/data.js";

export default {
  title: "Paragraphs/Carousel V2",
  render: (args) => carousel(correctPaths(structuredClone(args))),
  args: {
    ...data,
    layout: "split",
    autoplay: false,
    interval: 5000,
    active_item: 1,
  },
  argTypes: {
    layout: { control: "select", options: ["split", "full_width"] },
    autoplay: { control: "boolean" },
    interval: { control: { type: "number", min: 1000, step: 1000 } },
    active_item: {
      control: { type: "number", min: 1, max: data.items.length },
    },
    disable_touch: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Responsive split and full-width layouts with shared rotation controls. Autoplay is opt-in; reduced motion starts paused. Images retain their aspect ratio. Full-width content overlays the image from the lg breakpoint and stacks below it on mobile.",
      },
    },
  },
};

const testControls = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const root = canvasElement.querySelector(".bcl-carousel-v2");
  await waitFor(() =>
    expect(root).toHaveAttribute("data-bcl-initialized", "true"),
  );
  const counter = root.querySelector("[data-bcl-current]");
  const initial = Number(counter.textContent);
  const total = root.querySelectorAll(".carousel-item").length;
  const inner = root.querySelector(".carousel-inner");
  await userEvent.click(canvas.getByRole("button", { name: "Next slide" }));
  await waitFor(() =>
    expect(counter).toHaveTextContent(String((initial % total) + 1)),
  );
  await expect(root.querySelector(".carousel-item.active")).toHaveAttribute(
    "aria-hidden",
    "false",
  );
  await userEvent.click(canvas.getByRole("button", { name: "Previous slide" }));
  await waitFor(() => expect(counter).toHaveTextContent(String(initial)));
  await userEvent.click(canvas.getByRole("button", { name: "Play slides" }));
  const pause = canvas.getByRole("button", { name: "Pause slides" });
  await expect(pause).toBeVisible();
  await userEvent.click(pause);
  await expect(
    canvas.getByRole("button", { name: "Play slides" }),
  ).toBeVisible();
  await expect(inner).toHaveAttribute("aria-live", "polite");
};

export const Split = { play: testControls };
export const FullWidth = {
  args: { id: "carousel-v2-full-width", layout: "full_width" },
  play: testControls,
};
export const Autoplay = {
  args: { id: "carousel-v2-autoplay", autoplay: true },
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector(".bcl-carousel-v2");
    await waitFor(() =>
      expect(root).toHaveAttribute("data-bcl-initialized", "true"),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    await expect(
      within(canvasElement).getByRole("button", {
        name: reducedMotion ? "Play slides" : "Pause slides",
      }),
    ).toBeVisible();
  },
};
export const SingleSlide = {
  args: { id: "carousel-v2-single", items: data.items.slice(0, 1) },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.queryByRole("button", { name: "Next slide" }),
    ).not.toBeInTheDocument();
    await expect(
      canvas.getByRole("heading", { name: data.items[0].caption_title }),
    ).toBeVisible();
  },
};
