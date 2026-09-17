import { renderTwigFileAsHtml } from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";
import Carousel from "@openeuropa/bcl-bootstrap/js/src/carousel";
import CarouselV2 from "@openeuropa/bcl-theme-default/src/js/carousel-v2/carousel-v2";
import data from "./data";

expect.extend(toHaveNoViolations);
const template = "@oe-bcl/bcl-carousel-v2/carousel.html.twig";
let motion;
const mounted = [];

function pointerEvent(type, pointerType = "mouse") {
  const event = new Event(type);
  Object.defineProperty(event, "pointerType", { value: pointerType });
  return event;
}

async function mount(options = {}) {
  const container = document.createElement("div");
  container.innerHTML = await renderTwigFileAsHtml(template, {
    ...data,
    ...options,
  });
  document.body.append(container);
  const element = container.querySelector("section");
  // Timer tests use immediate transitions; a separate test exercises animation.
  element.classList.remove("slide");
  // jsdom has no layout. Bootstrap's visibility check requires a client rect.
  element.getClientRects = () => [{ width: 100, height: 100 }];
  const controller = CarouselV2.getOrCreateInstance(element);
  mounted.push(controller);
  return {
    element,
    controller,
    rotation: element.querySelector("[data-bcl-rotation]"),
  };
}

beforeEach(() => {
  motion = new EventTarget();
  motion.matches = false;
  window.matchMedia = jest.fn(() => motion);
});

afterEach(() => {
  mounted.splice(0).forEach((controller) => {
    if (controller.element.hasAttribute("data-bcl-initialized"))
      controller.dispose();
  });
  document.body.innerHTML = "";
  jest.useRealTimers();
  jest.restoreAllMocks();
  delete window.matchMedia;
});

describe("Carousel V2 Bootstrap integration", () => {
  test("credits stay outside the moving slides and update after the transition", async () => {
    const { element, controller } = await mount({
      items: [
        { ...data.items[0], copyright: "First credit" },
        { ...data.items[1], copyright: "Second credit" },
        { ...data.items[2], copyright: "" },
      ],
    });
    const footer = element.querySelector(".bcl-carousel-v2__credits");
    expect(footer.parentElement).toBe(element);
    expect(
      element.querySelector(".carousel-item .bcl-carousel-v2__copyright"),
    ).toBeNull();
    element.classList.add("slide");
    jest.useFakeTimers();
    controller.carousel.next();
    expect(
      footer.querySelector(":scope > :not([hidden])").textContent,
    ).toContain("First credit");
    element
      .querySelector(".carousel-item.active")
      .dispatchEvent(new Event("transitionend"));
    expect(
      footer.querySelector(":scope > :not([hidden])").textContent,
    ).toContain("Second credit");
    controller.carousel.next();
    element
      .querySelector(".carousel-item.active")
      .dispatchEvent(new Event("transitionend"));
    expect(footer.hidden).toBe(true);
    controller.dispose();
    expect(element.querySelector(".bcl-carousel-v2__credits")).toBeNull();
    expect(
      element.querySelectorAll(".carousel-item > .bcl-carousel-v2__copyright"),
    ).toHaveLength(2);
    expect(element.querySelector(".bcl-carousel-v2__copyright").hidden).toBe(
      false,
    );
  });

  test.each([false, true])(
    "Bootstrap swipe respects disable_touch=%s",
    async (disable_touch) => {
      Object.defineProperty(navigator, "maxTouchPoints", {
        configurable: true,
        value: 1,
      });
      const { element } = await mount({ disable_touch });
      for (const [type, x] of [
        ["touchstart", 200],
        ["touchmove", 100],
        ["touchend", 100],
      ]) {
        const event = new Event(type, { bubbles: true });
        Object.defineProperty(event, "touches", { value: [{ clientX: x }] });
        element.dispatchEvent(event);
      }
      expect(element.querySelector("[data-bcl-current]").textContent).toBe(
        disable_touch ? "1" : "2",
      );
      delete navigator.maxTouchPoints;
    },
  );

  test("disposal during animation leaves no pending callback against a disposed instance", async () => {
    const { element, controller } = await mount();
    element.classList.add("slide");
    jest.useFakeTimers();
    element.querySelector('[data-bs-slide="next"]').click();
    controller.dispose();
    expect(() => jest.runOnlyPendingTimers()).not.toThrow();
  });

  test("initializing a replacement disposes disconnected carousels", async () => {
    const { element, rotation } = await mount();
    jest.useFakeTimers();
    rotation.click();
    element.remove();
    CarouselV2.init();
    expect(jest.getTimerCount()).toBe(0);
    expect(Carousel.getInstance(element)).toBeNull();
  });

  test("cancelled slide events keep the current slide accessible", async () => {
    const { element } = await mount();
    element.addEventListener("slide.bs.carousel", (event) =>
      event.preventDefault(),
    );
    element.querySelector('[data-bs-slide="next"]').click();
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("1");
    expect(element.querySelector(".active").hasAttribute("inert")).toBe(false);
  });

  test("keyboard navigation moves focus out of the hidden slide", async () => {
    const { element } = await mount();
    const link = element.querySelector(".active a");
    link.focus();
    link.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true }),
    );
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
    expect(document.activeElement).toBe(
      element.querySelector('[data-bs-slide="next"]'),
    );
  });

  test("autoplay starts through Bootstrap and uses per-slide intervals", async () => {
    const cycle = jest.spyOn(Carousel.prototype, "cycle");
    const { element, rotation } = await mount({
      autoplay: true,
      interval: 100,
      items: [data.items[0], { ...data.items[1], interval: 300 }],
    });
    expect(cycle).toHaveBeenCalled();
    expect(rotation.getAttribute("aria-label")).toBe("Pause slides");
    rotation.click();
    jest.useFakeTimers();
    rotation.click();
    jest.advanceTimersByTime(100);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
    jest.advanceTimersByTime(299);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
    jest.advanceTimersByTime(1);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("1");
  });

  test("V1 and Gallery carousels are not initialized by the V2 controller", () => {
    document.body.innerHTML =
      '<div class="carousel"><div class="carousel-item active"></div></div><div class="bcl-gallery"><div class="carousel"><div class="carousel-item active"></div></div></div>';
    CarouselV2.init();
    expect(document.querySelector("[data-bcl-initialized]")).toBeNull();
    document
      .querySelectorAll(".carousel")
      .forEach((element) => expect(Carousel.getInstance(element)).toBeNull());
  });

  test("data-API navigation wraps and updates count and accessible slides", async () => {
    const { element } = await mount();
    element.querySelector('[data-bs-slide="prev"]').click();
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("3");
    element.querySelector('[data-bs-slide="next"]').click();
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("1");
    expect(
      element.querySelectorAll('.carousel-item[aria-hidden="true"][inert]'),
    ).toHaveLength(2);
    expect(element.querySelector(".active").hasAttribute("inert")).toBe(false);
  });

  test("keyboard navigation is supplied by Bootstrap", async () => {
    const { element } = await mount();
    element.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true }),
    );
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
  });

  test("pause survives data-API navigation and hover; Play resumes real Bootstrap cycling", async () => {
    const { element, rotation } = await mount({ interval: 100 });
    jest.useFakeTimers();
    rotation.click();
    expect(rotation.getAttribute("aria-label")).toBe("Pause slides");
    expect(
      element.querySelector(".carousel-inner").getAttribute("aria-live"),
    ).toBe("off");
    jest.advanceTimersByTime(100);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
    rotation.click();
    element.querySelector('[data-bs-slide="next"]').click();
    element.dispatchEvent(pointerEvent("pointerenter"));
    element.dispatchEvent(pointerEvent("pointerleave"));
    jest.advanceTimersByTime(500);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("3");
    expect(rotation.getAttribute("aria-label")).toBe("Play slides");
    expect(
      element.querySelector(".carousel-inner").getAttribute("aria-live"),
    ).toBe("polite");
  });

  test("hover temporarily suspends rotation without clearing the user's intent", async () => {
    const { element, rotation } = await mount({ interval: 100 });
    jest.useFakeTimers();
    rotation.click();
    element.dispatchEvent(pointerEvent("pointerenter"));
    jest.advanceTimersByTime(200);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("1");
    element.dispatchEvent(pointerEvent("pointerleave"));
    jest.advanceTimersByTime(100);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
  });

  test("touch-generated hover does not block Play", async () => {
    const { element, rotation } = await mount({ interval: 100 });
    jest.useFakeTimers();
    element.dispatchEvent(pointerEvent("pointerenter", "touch"));
    element.dispatchEvent(new MouseEvent("mouseenter"));
    rotation.click();
    jest.advanceTimersByTime(100);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
    expect(rotation.getAttribute("aria-label")).toBe("Pause slides");
  });

  test("focus on content stops rotation until explicitly restarted", async () => {
    const { element, rotation } = await mount({ interval: 100 });
    jest.useFakeTimers();
    rotation.click();
    element.querySelector(".active a").focus();
    expect(rotation.getAttribute("aria-label")).toBe("Play slides");
    element.querySelector(".active a").blur();
    jest.advanceTimersByTime(200);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("1");
  });

  test("reduced motion overrides autoplay, supports explicit Play and subsequent preference changes", async () => {
    motion.matches = true;
    const { element, rotation } = await mount({
      autoplay: true,
      interval: 100,
    });
    jest.useFakeTimers();
    jest.advanceTimersByTime(200);
    expect(rotation.getAttribute("aria-label")).toBe("Play slides");
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("1");
    rotation.click();
    jest.advanceTimersByTime(100);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
    const change = new Event("change");
    Object.defineProperty(change, "matches", { value: true });
    motion.dispatchEvent(change);
    jest.advanceTimersByTime(200);
    expect(rotation.getAttribute("aria-label")).toBe("Play slides");
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
  });

  test("counter changes after the animated transition completes", async () => {
    const { element } = await mount();
    element.classList.add("slide");
    jest.useFakeTimers();
    element.querySelector('[data-bs-slide="next"]').click();
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("1");
    jest.advanceTimersByTime(20);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
    expect(element.querySelector(".active").getAttribute("aria-hidden")).toBe(
      "false",
    );
  });

  test("initial index is respected and multiple instances remain independent", async () => {
    const first = await mount({ id: "first", active_item: 2 });
    const second = await mount({ id: "second" });
    first.element.querySelector('[data-bs-slide="next"]').click();
    expect(first.element.querySelector("[data-bcl-current]").textContent).toBe(
      "3",
    );
    expect(second.element.querySelector("[data-bcl-current]").textContent).toBe(
      "1",
    );
    CarouselV2.init(first.element);
    expect(CarouselV2.getOrCreateInstance(first.element)).toBe(
      first.controller,
    );
  });

  test("single slide never cycles, even with autoplay enabled", async () => {
    const cycle = jest.spyOn(Carousel.prototype, "cycle");
    const { element } = await mount({
      autoplay: true,
      items: data.items.slice(0, 1),
    });
    expect(cycle).not.toHaveBeenCalled();
    expect(element.querySelector("[data-bcl-rotation]")).toBeNull();
  });

  test("disposal clears timers, listeners and enhancement state", async () => {
    const { element, controller, rotation } = await mount({ interval: 100 });
    jest.useFakeTimers();
    rotation.click();
    controller.dispose();
    expect(jest.getTimerCount()).toBe(0);
    expect(Carousel.getInstance(element)).toBeNull();
    expect(element.querySelector("[inert]")).toBeNull();
    expect(element.querySelector(".bcl-carousel-v2__controls").hidden).toBe(
      true,
    );
    expect(() => motion.dispatchEvent(new Event("change"))).not.toThrow();
  });

  test("enhanced controls and slide semantics pass accessibility checks", async () => {
    const { element } = await mount();
    expect(await axe(element)).toHaveNoViolations();
  });
});
