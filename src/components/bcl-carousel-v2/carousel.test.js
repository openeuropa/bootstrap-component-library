import { axe, toHaveNoViolations } from "jest-axe";
import {
  renderTwigFileAsHtml,
  renderTwigFileAsNode,
  DrupalAttribute,
} from "@openeuropa/bcl-test-utils";
import data from "./data";

expect.extend(toHaveNoViolations);
const template = "@oe-bcl/bcl-carousel-v2/carousel.html.twig";

describe("Carousel V2 markup", () => {
  test.each(["split", "full_width"])("renders %s layout", async (layout) => {
    const node = await renderTwigFileAsNode(template, { ...data, layout });
    expect(node).toMatchSnapshot();
    expect(node.querySelectorAll("[data-bcl-rotation]")).toHaveLength(1);
    expect(node.querySelectorAll("[data-bs-slide]")).toHaveLength(2);
    expect(node.querySelector("section").getAttribute("data-bs-ride")).toBe(
      "false",
    );
  });

  test.each(["split", "full_width"])(
    "%s passes accessibility checks",
    async (layout) => {
      const markup = await renderTwigFileAsHtml(template, { ...data, layout });
      expect(await axe(markup)).toHaveNoViolations();
    },
  );

  test("renders an empty carousel as nothing", async () => {
    expect((await renderTwigFileAsHtml(template, { items: [] })).trim()).toBe(
      "",
    );
  });

  test("one slide has no navigation or rotation controls", async () => {
    const node = await renderTwigFileAsNode(template, {
      ...data,
      items: data.items.slice(0, 1),
    });
    expect(node.querySelector(".bcl-carousel-v2__controls")).toBeNull();
    expect(node.querySelectorAll(".carousel-item")).toHaveLength(1);
  });

  test("initial slide and translated control/slide labels", async () => {
    const node = await renderTwigFileAsNode(template, {
      ...data,
      active_item: 2,
      play_label: "Redă",
      pause_label: "Pauză",
      prev_label: "Anterior",
      next_label: "Următor",
      slide_label: "%current% din %total%",
      carousel_role_label: "carusel",
      slide_role_label: "diapozitiv",
    });
    expect(
      node.querySelector("section").getAttribute("aria-roledescription"),
    ).toBe("carusel");
    expect(
      node.querySelector(".active").getAttribute("aria-roledescription"),
    ).toBe("diapozitiv");
    expect(node.querySelector(".active").getAttribute("aria-label")).toBe(
      "2 din 3",
    );
    expect(node.querySelector("[data-bcl-current]").textContent).toBe("2");
    expect(
      node.querySelector("[data-bcl-rotation]").getAttribute("aria-label"),
    ).toBe("Redă");
    expect(
      node.querySelector("[data-bcl-rotation]").dataset.bclPauseLabel,
    ).toBe("Pauză");
    expect(
      node.querySelector('[data-bs-slide="prev"]').getAttribute("aria-label"),
    ).toBe("Anterior");
    expect(
      node.querySelector('[data-bs-slide="next"]').getAttribute("aria-label"),
    ).toBe("Următor");
  });

  test("invalid options fall back and custom attributes are retained", async () => {
    const node = await renderTwigFileAsNode(template, {
      ...data,
      active_item: 99,
      layout: "unknown",
      title_tag: "script",
      interval: -1,
      attributes: new DrupalAttribute().addClass("custom-carousel"),
    });
    expect(
      node.querySelector("section").classList.contains("custom-carousel"),
    ).toBe(true);
    expect(
      node
        .querySelector("section")
        .classList.contains("bcl-carousel-v2--split"),
    ).toBe(true);
    expect(node.querySelector("section").dataset.bsInterval).toBe("5000");
    expect(node.querySelector(".active").getAttribute("aria-label")).toBe(
      "1 of 3",
    );
    expect(node.querySelector("h2")).not.toBeNull();
  });

  test("keeps responsive image markup and does not hide content before enhancement", async () => {
    const image =
      '<picture><source srcset="large.webp" media="(min-width: 992px)"><img src="small.jpg" width="600" height="300" alt="Coastline"></picture>';
    const node = await renderTwigFileAsNode(template, {
      ...data,
      items: [{ image, caption: "Always readable" }],
    });
    expect(node.querySelector("picture source").getAttribute("srcset")).toBe(
      "large.webp",
    );
    expect(
      node.querySelector("[inert], [aria-hidden='true'].carousel-item"),
    ).toBeNull();
    expect(
      node.querySelector(".bcl-carousel-v2__content").textContent,
    ).toContain("Always readable");
  });
});
