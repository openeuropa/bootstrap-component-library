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
    autoplay: false,
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
  document.documentElement.removeAttribute("dir");
  jest.useRealTimers();
  jest.restoreAllMocks();
  delete window.matchMedia;
});

describe("Carousel V2 Bootstrap integration", () => {
  test("omitted autoplay starts rotation and progress by default", async () => {
    jest.useFakeTimers();
    const { element, rotation } = await mount({ autoplay: undefined });
    expect(rotation.getAttribute("aria-label")).toBe("Pause slides");
    expect(
      element.querySelector(".active .bcl-carousel-v2__progress").hidden,
    ).toBe(false);
    element.querySelector(".active a").focus();
    jest.advanceTimersByTime(10000);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
  });

  test.each([false, undefined])(
    "reduced motion starts paused with autoplay %s",
    async (autoplay) => {
      motion.matches = true;
      jest.useFakeTimers();
      const { element, rotation } = await mount({ autoplay });
      expect(rotation.getAttribute("aria-label")).toBe("Play slides");
      jest.advanceTimersByTime(20000);
      expect(element.querySelector("[data-bcl-current]").textContent).toBe("1");
    },
  );

  test("progress freezes on hover and shares the remaining slide timer", async () => {
    const animations = [];
    const animate = jest.fn((frames, options) => {
      const animation = { cancel: jest.fn(), frames, options };
      animations.push(animation);
      return animation;
    });
    Object.defineProperty(Element.prototype, "animate", {
      configurable: true,
      value: animate,
    });
    try {
      const { element, rotation, controller } = await mount();
      const bars = element.querySelectorAll(".bcl-carousel-v2__progress");
      expect(bars[0].hidden).toBe(true);
      jest.useFakeTimers();
      rotation.click();
      expect(bars[0].hidden).toBe(false);
      expect(animations[0].options.duration).toBe(10000);
      jest.advanceTimersByTime(4000);
      element.dispatchEvent(pointerEvent("pointerenter"));
      expect(bars[0].hidden).toBe(false);
      expect(bars[0].style.transform).toBe("scaleX(0.4)");
      expect(animations[0].cancel).toHaveBeenCalled();
      jest.advanceTimersByTime(20000);
      expect(element.querySelector("[data-bcl-current]").textContent).toBe("1");
      element.dispatchEvent(pointerEvent("pointerleave"));
      expect(animations[1].options.duration).toBe(6000);
      expect(animations[1].frames[0].transform).toBe("scaleX(0.4)");
      jest.advanceTimersByTime(5999);
      expect(element.querySelector("[data-bcl-current]").textContent).toBe("1");
      jest.advanceTimersByTime(1);
      expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
      expect(bars[0].hidden).toBe(true);
      expect(bars[1].hidden).toBe(false);
      expect(animations.at(-1).options.duration).toBe(10000);
      jest.advanceTimersByTime(2000);
      rotation.click();
      expect(Array.from(bars).every((bar) => bar.hidden)).toBe(true);
      expect(controller.progressElapsed).toBe(2000);
      jest.advanceTimersByTime(20000);
      element.querySelector(".active a").focus();
      element.dispatchEvent(pointerEvent("pointerenter"));
      element.dispatchEvent(pointerEvent("pointerleave"));
      expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
      rotation.click();
      expect(animations.at(-1).frames[0].transform).toBe("scaleX(0.2)");
      expect(animations.at(-1).options.duration).toBe(8000);
      expect(bars[1].hidden).toBe(false);
      jest.advanceTimersByTime(7999);
      expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
      jest.advanceTimersByTime(1);
      expect(element.querySelector("[data-bcl-current]").textContent).toBe("3");
      const last = animations.at(-1);
      controller.dispose();
      expect(last.cancel).toHaveBeenCalled();
      expect(jest.getTimerCount()).toBe(0);
      expect(Array.from(bars).every((bar) => bar.hidden)).toBe(true);
    } finally {
      delete Element.prototype.animate;
    }
  });

  test("navigation resets progress to the next slide's own interval, including while hovered", async () => {
    const { element, rotation, controller } = await mount({
      items: [data.items[0], { ...data.items[1], interval: 16000 }],
    });
    jest.useFakeTimers();
    rotation.click();
    jest.advanceTimersByTime(4000);
    element.querySelector('[data-bs-slide="next"]').click();
    expect(controller.progressDuration).toBe(16000);
    expect(controller.progressElapsed).toBe(0);
    jest.advanceTimersByTime(5000);
    element.dispatchEvent(pointerEvent("pointerenter"));
    element.querySelector('[data-bs-slide="prev"]').click();
    expect(controller.progressElapsed).toBe(0);
    element.dispatchEvent(pointerEvent("pointerleave"));
    expect(controller.progressDuration).toBe(10000);
    jest.advanceTimersByTime(9999);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("1");
    jest.advanceTimersByTime(1);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
  });

  test("reduced motion keeps progress hidden even when Play is chosen", async () => {
    motion.matches = true;
    const { element, rotation } = await mount({ autoplay: true });
    jest.useFakeTimers();
    rotation.click();
    expect(
      Array.from(element.querySelectorAll(".bcl-carousel-v2__progress")).every(
        (bar) => bar.hidden,
      ),
    ).toBe(true);
    jest.advanceTimersByTime(10000);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
  });

  test("hero credits stay immediately after their image through navigation and disposal", async () => {
    const { element, controller } = await mount({ layout: "full_width" });
    const credits = Array.from(
      element.querySelectorAll(
        ".bcl-carousel-v2__layout > .bcl-carousel-v2__copyright",
      ),
    );
    expect(credits.length).toBeGreaterThan(0);
    const checkPosition = () => {
      credits.forEach((credit) => {
        expect(
          credit.previousElementSibling.classList.contains(
            "bcl-carousel-v2__image",
          ),
        ).toBe(true);
        expect(
          credit.nextElementSibling.classList.contains(
            "bcl-carousel-v2__content",
          ),
        ).toBe(true);
      });
    };
    checkPosition();
    const footer = element.querySelector(".bcl-carousel-v2__credits");
    expect(footer.parentElement).toBe(element);
    expect(footer.querySelector(":scope > :not([hidden])").textContent).toBe(
      credits[0].textContent,
    );
    controller.carousel.next();
    checkPosition();
    expect(footer.querySelector(":scope > :not([hidden])").textContent).toBe(
      credits[1].textContent,
    );
    controller.dispose();
    expect(element.querySelector(".bcl-carousel-v2__credits")).toBeNull();
    checkPosition();
  });

  test("image layout keeps credits beside each image and restores sizing on disposal", async () => {
    const { element, controller } = await mount({ layout: "split" });
    expect(element.querySelector(".bcl-carousel-v2__credits")).toBeNull();
    expect(
      element.querySelector(".carousel-item .bcl-carousel-v2__copyright"),
    ).not.toBeNull();
    expect(
      element.style.getPropertyValue("--bcl-carousel-controls-height"),
    ).toBe("0px");
    controller.carousel.next();
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
    controller.dispose();
    expect(
      element.style.getPropertyValue("--bcl-carousel-controls-height"),
    ).toBe("");
  });

  test.each([false, true])(
    "image layout measures media and wrapped controls, then disconnects its observer (credit=%s)",
    async (withCredit) => {
      let notifyResize;
      const observe = jest.fn();
      const disconnect = jest.fn();
      const previousObserver = window.ResizeObserver;
      window.ResizeObserver = jest.fn((callback) => {
        notifyResize = callback;
        return { observe, disconnect };
      });
      try {
        const { element, controller } = await mount({
          layout: "split",
          items: data.items.map((item) => ({
            ...item,
            copyright: withCredit ? "Credit" : "",
          })),
        });
        const image = element.querySelector(".active .bcl-carousel-v2__image");
        const credit = element.querySelector(
          ".active .bcl-carousel-v2__copyright",
        );
        const controls = element.querySelector(".bcl-carousel-v2__controls");
        Object.defineProperty(image, "offsetHeight", {
          configurable: true,
          value: 300,
        });
        if (credit)
          Object.defineProperty(credit, "offsetHeight", { value: 24 });
        Object.defineProperty(controls, "offsetHeight", {
          configurable: true,
          value: 44,
        });
        notifyResize();
        expect(
          element.style.getPropertyValue("--bcl-carousel-media-height"),
        ).toBe(withCredit ? "324px" : "300px");
        expect(
          element.style.getPropertyValue("--bcl-carousel-controls-height"),
        ).toBe("44px");
        expect(observe).toHaveBeenCalledWith(image);
        expect(observe).toHaveBeenCalledWith(controls);
        if (credit) expect(observe).toHaveBeenCalledWith(credit);
        Object.defineProperty(image, "offsetHeight", { value: 200 });
        Object.defineProperty(controls, "offsetHeight", { value: 96 });
        notifyResize();
        expect(
          element.style.getPropertyValue("--bcl-carousel-media-height"),
        ).toBe(withCredit ? "224px" : "200px");
        expect(
          element.style.getPropertyValue("--bcl-carousel-controls-height"),
        ).toBe("96px");
        controller.dispose();
        expect(disconnect).toHaveBeenCalledTimes(1);
        expect(
          element.style.getPropertyValue("--bcl-carousel-media-height"),
        ).toBe("");
      } finally {
        window.ResizeObserver = previousObserver;
      }
    },
  );

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

  test.each([
    ["ltr", "ArrowLeft", "prev", "3"],
    ["ltr", "ArrowRight", "next", "2"],
    ["rtl", "ArrowLeft", "next", "2"],
    ["rtl", "ArrowRight", "prev", "3"],
  ])(
    "%s %s moves focus to %s after the outgoing slide is hidden",
    async (dir, key, control, current) => {
      document.documentElement.dir = dir;
      const { element } = await mount();
      element.classList.add("slide");
      jest.useFakeTimers();
      const link = element.querySelector(".active a");
      link.focus();
      link.dispatchEvent(new KeyboardEvent("keydown", { key, bubbles: true }));
      expect(document.activeElement).toBe(link);
      element
        .querySelector(".carousel-item.active")
        .dispatchEvent(new Event("transitionend"));
      expect(element.querySelector("[data-bcl-current]").textContent).toBe(
        current,
      );
      expect(document.activeElement).toBe(
        element.querySelector(`[data-bs-slide="${control}"]`),
      );
      expect(link.closest(".carousel-item").hasAttribute("inert")).toBe(true);
    },
  );

  test.each([
    ["ltr", "prev", "ArrowRight", "next"],
    ["ltr", "next", "ArrowLeft", "prev"],
    ["rtl", "prev", "ArrowLeft", "next"],
    ["rtl", "next", "ArrowRight", "prev"],
  ])("%s focus on %s follows %s to %s", async (dir, start, key, expected) => {
    document.documentElement.dir = dir;
    const { element } = await mount();
    element.classList.add("slide");
    jest.useFakeTimers();
    element.querySelector(`[data-bs-slide="${start}"]`).focus();
    element.dispatchEvent(new KeyboardEvent("keydown", { key, bubbles: true }));
    element
      .querySelector(".carousel-item.active")
      .dispatchEvent(new Event("transitionend"));
    expect(document.activeElement).toBe(
      element.querySelector(`[data-bs-slide="${expected}"]`),
    );
  });

  test("autoplay starts through Bootstrap and uses per-slide intervals", async () => {
    jest.useFakeTimers();
    const cycle = jest.spyOn(Carousel.prototype, "cycle");
    const { element, rotation } = await mount({
      autoplay: true,
      interval: 10000,
      items: [data.items[0], { ...data.items[1], interval: 30000 }],
    });
    expect(cycle).toHaveBeenCalled();
    expect(rotation.getAttribute("aria-label")).toBe("Pause slides");
    jest.advanceTimersByTime(10000);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
    jest.advanceTimersByTime(29999);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
    jest.advanceTimersByTime(1);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("1");
  });

  test("long slide text extends the interval using the reading-time rule", async () => {
    const { element, rotation } = await mount({
      interval: 1000,
      items: [
        {
          ...data.items[0],
          caption_title: "Title",
          caption: `<p>${"word ".repeat(49)}</p>`,
          link: null,
        },
        { ...data.items[1], caption_title: "Short", caption: "", link: null },
      ],
    });
    expect(element.querySelector(".active").dataset.bsInterval).toBe("23000");
    jest.useFakeTimers();
    rotation.click();
    jest.advanceTimersByTime(22999);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("1");
    jest.advanceTimersByTime(1);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
    jest.advanceTimersByTime(8000);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("1");
  });

  test("Pause while hovered stays stopped after mouse leave until Play", async () => {
    const { element, rotation } = await mount();
    jest.useFakeTimers();
    rotation.click();
    element.dispatchEvent(pointerEvent("pointerenter"));
    rotation.click();
    element.dispatchEvent(pointerEvent("pointerleave"));
    element.dispatchEvent(new MouseEvent("mouseleave"));
    element.dispatchEvent(new Event("touchend"));
    jest.advanceTimersByTime(60000);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("1");
    expect(rotation.getAttribute("aria-label")).toBe("Play slides");
    rotation.click();
    jest.advanceTimersByTime(10000);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
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
    const { element, rotation } = await mount({ interval: 10000 });
    jest.useFakeTimers();
    rotation.click();
    expect(rotation.getAttribute("aria-label")).toBe("Pause slides");
    expect(
      element.querySelector(".carousel-inner").getAttribute("aria-live"),
    ).toBe("off");
    jest.advanceTimersByTime(10000);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
    rotation.click();
    element.querySelector('[data-bs-slide="next"]').click();
    element.dispatchEvent(pointerEvent("pointerenter"));
    element.dispatchEvent(pointerEvent("pointerleave"));
    jest.advanceTimersByTime(50000);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("3");
    expect(rotation.getAttribute("aria-label")).toBe("Play slides");
    expect(
      element.querySelector(".carousel-inner").getAttribute("aria-live"),
    ).toBe("polite");
  });

  test("hover temporarily suspends rotation without clearing the user's intent", async () => {
    const { element, rotation } = await mount({ interval: 10000 });
    jest.useFakeTimers();
    rotation.click();
    element.dispatchEvent(pointerEvent("pointerenter"));
    jest.advanceTimersByTime(20000);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("1");
    element.dispatchEvent(pointerEvent("pointerleave"));
    jest.advanceTimersByTime(10000);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
  });

  test("touch-generated hover does not block Play", async () => {
    const { element, rotation } = await mount({ interval: 10000 });
    jest.useFakeTimers();
    element.dispatchEvent(pointerEvent("pointerenter", "touch"));
    element.dispatchEvent(new MouseEvent("mouseenter"));
    rotation.click();
    jest.advanceTimersByTime(10000);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
    expect(rotation.getAttribute("aria-label")).toBe("Pause slides");
  });

  test.each([".active a", '[data-bs-slide="next"]', "[data-bcl-rotation]"])(
    "rotation continues while focus is inside on %s",
    async (selector) => {
      const { element, rotation } = await mount({ interval: 10000 });
      jest.useFakeTimers();
      rotation.click();
      element.querySelector(selector).focus();
      expect(rotation.getAttribute("aria-label")).toBe("Pause slides");
      jest.advanceTimersByTime(10000);
      expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
      expect(element.contains(document.activeElement)).toBe(true);
      jest.advanceTimersByTime(10000);
      expect(element.querySelector("[data-bcl-current]").textContent).toBe("3");
    },
  );

  test("focus changes do not restart an explicitly paused carousel", async () => {
    const { element, rotation } = await mount({ interval: 10000 });
    jest.useFakeTimers();
    rotation.click();
    rotation.click();
    element.querySelector(".active a").focus();
    rotation.focus();
    rotation.blur();
    jest.advanceTimersByTime(20000);
    expect(rotation.getAttribute("aria-label")).toBe("Play slides");
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("1");
  });

  test("reduced motion overrides autoplay, supports explicit Play and subsequent preference changes", async () => {
    motion.matches = true;
    const { element, rotation } = await mount({
      autoplay: true,
      interval: 10000,
    });
    jest.useFakeTimers();
    jest.advanceTimersByTime(20000);
    expect(rotation.getAttribute("aria-label")).toBe("Play slides");
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("1");
    rotation.click();
    jest.advanceTimersByTime(10000);
    expect(element.querySelector("[data-bcl-current]").textContent).toBe("2");
    const change = new Event("change");
    Object.defineProperty(change, "matches", { value: true });
    motion.dispatchEvent(change);
    jest.advanceTimersByTime(20000);
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

  test.each(
    ["split", "full_width"].flatMap((firstLayout) =>
      ["split", "full_width"].flatMap((secondLayout) =>
        ["prev", "next"].map((direction) => [
          firstLayout,
          secondLayout,
          direction,
        ]),
      ),
    ),
  )(
    "autoplay in %s stays active while navigating %s with %s",
    async (firstLayout, secondLayout, direction) => {
      const first = await mount({
        id: "autoplay-carousel",
        layout: firstLayout,
        autoplay: true,
        interval: 10000,
      });
      const second = await mount({
        id: "manual-carousel",
        layout: secondLayout,
      });
      jest.useFakeTimers();
      first.controller.updateRotation();
      const button = second.element.querySelector(
        `[data-bs-slide="${direction}"]`,
      );
      button.focus();
      button.click();
      expect(
        second.element.querySelector("[data-bcl-current]").textContent,
      ).toBe(direction === "next" ? "2" : "3");

      jest.advanceTimersByTime(10000);
      expect(document.activeElement).toBe(button);
      expect(first.rotation.getAttribute("aria-label")).toBe("Pause slides");
      expect(
        first.element
          .querySelector(".carousel-inner")
          .getAttribute("aria-live"),
      ).toBe("off");
      expect(
        first.element.querySelector("[data-bcl-current]").textContent,
      ).toBe("2");
      jest.advanceTimersByTime(10000);
      expect(
        first.element.querySelector("[data-bcl-current]").textContent,
      ).toBe("3");
      expect(document.activeElement).toBe(button);
    },
  );

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
    const { element, controller, rotation } = await mount({ interval: 10000 });
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
