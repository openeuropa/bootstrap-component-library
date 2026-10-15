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
    full_bleed: false,
    autoplay: true,
    interval: 10000,
    active_item: 1,
  },
  argTypes: {
    layout: {
      control: {
        type: "select",
        labels: { split: "Carousel image", full_width: "Carousel hero" },
      },
      options: ["split", "full_width"],
    },
    title_tag: {
      control: "select",
      options: ["p", "h2", "h3", "h4", "h5", "h6"],
    },
    full_bleed: { name: "Span page width", control: "boolean" },
    autoplay: { control: "boolean" },
    interval: { control: { type: "number", min: 8000, step: 1000 } },
    active_item: {
      control: { type: "number", min: 1, max: data.items.length },
    },
    disable_touch: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Carousel image displays the image beside the content. Carousel hero displays a full-width image with content overlaid from the lg breakpoint and stacked below it on mobile. Both share rotation controls. Autoplay is enabled by default; reduced motion starts paused. Hero desktop images are capped at 28rem high and cropped without stretching; its content and footer backgrounds remain white.",
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
  const slideLink = root.querySelector(".carousel-item.active a");
  // Enter from immediately before the carousel to verify its first tab stop.
  const beforeCarousel = root.ownerDocument.createElement("button");
  beforeCarousel.textContent = "Before carousel";
  root.before(beforeCarousel);
  try {
    beforeCarousel.focus();
    for (const name of ["Play slides", "Previous slide", "Next slide"]) {
      await userEvent.tab();
      await expect(canvas.getByRole("button", { name })).toHaveFocus();
    }
    await userEvent.tab();
    await expect(slideLink).toHaveFocus();
    await userEvent.tab();
    await expect(root.contains(root.ownerDocument.activeElement)).toBe(false);
  } finally {
    beforeCarousel.remove();
  }
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

export const Split = { name: "Carousel image" };
export const SplitInContainer = {
  name: "Carousel image / Page container",
  args: { id: "carousel-v2-page-container" },
  decorators: [
    async (story) => `<div class="container">${await story()}</div>`,
  ],
  parameters: { layout: "fullscreen" },
};
export const FullWidth = {
  name: "Carousel hero",
  args: { id: "carousel-v2-full-width", layout: "full_width" },
};
export const FullWidthInContainer = {
  name: "Carousel hero / Page container",
  args: { id: "carousel-v2-hero-page-container", layout: "full_width" },
  decorators: [
    async (story) => `<div class="container">${await story()}</div>`,
  ],
  parameters: { layout: "fullscreen" },
};
export const SplitFullBleed = {
  ...SplitInContainer,
  name: "Carousel image / Span page width",
  args: { id: "carousel-v2-split-full-bleed", full_bleed: true },
};
export const HeroFullBleed = {
  ...FullWidthInContainer,
  name: "Carousel hero / Span page width",
  args: {
    id: "carousel-v2-hero-full-bleed",
    layout: "full_width",
    full_bleed: true,
  },
};
export const SplitControlsTest = {
  name: "Tests / Carousel image controls",
  args: { id: "carousel-v2-split-controls-test", autoplay: false },
  tags: ["!autodocs", "carousel-v2-test"],
  play: async (context) => {
    await testControls(context);
    const root = context.canvasElement.querySelector(".bcl-carousel-v2");
    await waitFor(() => {
      const controls = root
        .querySelector(".bcl-carousel-v2__controls")
        .getBoundingClientRect();
      const image = root
        .querySelector(".active .bcl-carousel-v2__image")
        .getBoundingClientRect();
      const heading = root
        .querySelector(".active .bcl-carousel-v2__content > :first-child")
        .getBoundingClientRect();
      expect(controls.bottom).toBeLessThanOrEqual(heading.top);
      if (window.matchMedia("(min-width: 992px)").matches) {
        expect(controls.right).toBeLessThanOrEqual(image.left);
      } else {
        expect(image.bottom).toBeLessThanOrEqual(controls.top);
      }
    });
  },
};
export const FullWidthControlsTest = {
  name: "Tests / Carousel hero controls",
  args: {
    id: "carousel-v2-full-width-controls-test",
    layout: "full_width",
    autoplay: false,
  },
  tags: ["!autodocs", "carousel-v2-test"],
  play: testControls,
};
export const ImageOnlyControlsTest = {
  name: "Tests / Carousel image without text",
  args: {
    id: "carousel-v2-image-only",
    layout: "split",
    items: data.items.map(({ image, copyright }) => ({ image, copyright })),
  },
  tags: ["!autodocs", "carousel-v2-test"],
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector(".bcl-carousel-v2");
    await waitFor(() => {
      expect(root).toHaveAttribute("data-bcl-initialized", "true");
      const controls = root.querySelector(".bcl-carousel-v2__controls");
      expect(controls.getBoundingClientRect().bottom).toBeLessThanOrEqual(
        root.getBoundingClientRect().bottom,
      );
    });
  },
};
export const Autoplay = {
  tags: ["carousel-v2-test"],
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
    const progress = root.querySelector(".active .bcl-carousel-v2__progress");
    if (reducedMotion) {
      await expect(progress).not.toBeVisible();
    } else {
      await expect(progress).toBeVisible();
      const image = root
        .querySelector(".active .bcl-carousel-v2__image")
        .getBoundingClientRect();
      const bar = progress.getBoundingClientRect();
      // The transform shows elapsed progress; its untransformed box spans the image.
      await expect(progress.offsetWidth).toBeCloseTo(image.width, 0);
      await expect(bar.height).toBe(3);
      await expect(bar.top).toBeCloseTo(image.top, 0);
      await expect(getComputedStyle(progress).backgroundColor).toBe(
        "rgb(37, 62, 190)",
      );
    }
  },
};
export const SingleSlide = {
  name: "Carousel image / Single slide",
  tags: ["carousel-v2-test"],
  args: { id: "carousel-v2-single", items: data.items.slice(0, 1) },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.queryByRole("button", { name: "Next slide" }),
    ).not.toBeInTheDocument();
    await expect(
      canvas.getByText(data.items[0].caption_title, {
        selector: ".bcl-carousel-v2__title",
      }),
    ).toBeVisible();
  },
};

export const FullWidthSingleSlide = {
  ...SingleSlide,
  name: "Carousel hero / Single slide",
  args: {
    ...SingleSlide.args,
    id: "carousel-v2-full-width-single",
    layout: "full_width",
  },
};
