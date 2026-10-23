import { expect, waitFor } from "storybook/test";
import { correctPaths } from "@openeuropa/bcl-story-utils";
import layout from "@openeuropa/bcl-base-templates/data/layout";
import carouselData from "@openeuropa/bcl-carousel-v2/data.js";
import page from "@openeuropa/bcl-page/carousel-v2-page.html.twig";

export default {
  title: "Features/Carousel V2 page",
  render: (args) =>
    page(
      correctPaths({
        header: {
          ...layout.headerSimple,
          site_name: "OE Showcase Agency (OESA)",
          breadcrumbs: {
            ...layout.headerSimple.breadcrumbs,
            links: [
              { label: "Home", path: "/example.html" },
              { label: "Carousel testing" },
            ],
          },
        },
        footer: layout.footer,
        banner: true,
        landing: true,
        page_title: "Carousel testing",
        carousel: { ...carouselData, ...args },
      }),
    ),
  args: {
    id: "oesa-carousel-v2",
    layout: "split",
    full_bleed: false,
    title_tag: "h2",
    autoplay: true,
  },
  argTypes: {
    layout: {
      name: "Carousel type",
      control: {
        type: "select",
        labels: { split: "Carousel image", full_width: "Carousel hero" },
      },
      options: ["split", "full_width"],
    },
    full_bleed: { name: "Full width", control: "boolean" },
    autoplay: { control: "boolean" },
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Carousel V2 in an OESA-style page using the shared header, breadcrumbs, page template and footer. Compare carousel types and widths in the same page context.",
      },
    },
  },
};

const checkPageAlignment = async ({ canvasElement }) => {
  const root = canvasElement.querySelector(".bcl-carousel-v2");
  const heading = canvasElement.querySelector("h1");
  await waitFor(() => {
    expect(root).toHaveAttribute("data-bcl-initialized", "true");
    const pageLeft = heading.getBoundingClientRect().left;
    for (const selector of [
      ".active .bcl-carousel-v2__title",
      "[data-bcl-rotation]",
    ]) {
      expect(
        Math.abs(
          root.querySelector(selector).getBoundingClientRect().left - pageLeft,
        ),
      ).toBeLessThan(1);
    }
  });
};

export const ImageContentWidth = {
  name: "Carousel image / Content width",
  play: checkPageAlignment,
};
export const ImageFullWidth = {
  name: "Carousel image / Full width",
  args: { full_bleed: true },
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector(".bcl-carousel-v2");
    const page = canvasElement.querySelector("main");
    await waitFor(() => {
      expect(root).toHaveAttribute("data-bcl-initialized", "true");
      const bounds = root.getBoundingClientRect();
      const available = page.getBoundingClientRect();
      if (root.ownerDocument.defaultView.innerWidth < 992) {
        const container = root.closest(".container");
        const grid = container.getBoundingClientRect();
        const style = getComputedStyle(container);
        available.x = grid.left + parseFloat(style.paddingLeft);
        available.width =
          grid.width -
          parseFloat(style.paddingLeft) -
          parseFloat(style.paddingRight);
      }
      expect(Math.abs(bounds.left - available.left)).toBeLessThan(1);
      expect(Math.abs(bounds.right - available.right)).toBeLessThan(1);
      const title = root.querySelector(".active .bcl-carousel-v2__title");
      const rotation = root.querySelector("[data-bcl-rotation]");
      expect(
        Math.abs(
          title.getBoundingClientRect().left -
            rotation.getBoundingClientRect().left,
        ),
      ).toBeLessThan(1);
    });
  },
};
export const HeroContentWidth = {
  name: "Carousel hero / Content width",
  args: { layout: "full_width" },
};
export const HeroFullWidth = {
  name: "Carousel hero / Full width",
  args: { layout: "full_width", full_bleed: true },
};
