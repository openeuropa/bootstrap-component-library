import Carousel from "@openeuropa/bcl-bootstrap/js/src/carousel";
import { isRTL } from "@openeuropa/bcl-bootstrap/js/src/util/index";

const SELECTOR = ".bcl-carousel-v2";
const instances = new Map();

/** Bootstrap owns transitions, gestures and timing; V2 owns rotation intent. */
class CarouselV2 {
  constructor(element) {
    this.element = element;
    this.slides = Array.from(element.querySelectorAll(".carousel-item"));
    this.inner = element.querySelector(".carousel-inner");
    this.controls = element.querySelector(".bcl-carousel-v2__controls");
    this.rotation = element.querySelector("[data-bcl-rotation]");
    this.counter = element.querySelector("[data-bcl-current]");
    this.motion = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    this.paused =
      element.dataset.bclAutoplay !== "true" || !!this.motion?.matches;
    this.hovered =
      element.matches(":hover") &&
      !!window.matchMedia?.("(any-hover: hover)").matches;
    this.listeners = [];
    this.isImageLayout = element.classList.contains("bcl-carousel-v2--split");

    this.credits = this.slides.map((slide) =>
      slide.querySelector(".bcl-carousel-v2__copyright"),
    );

    if (!this.isImageLayout) {
      this.creditFooter = document.createElement("div");
      this.creditFooter.className = "bcl-carousel-v2__credits";
      // Desktop keeps its stationary footer; mobile uses the original below the image.
      this.footerCredits = this.credits.map((credit) => {
        const copy = credit?.cloneNode(true);
        if (copy) this.creditFooter.append(copy);
        return copy;
      });
      this.inner.after(this.creditFooter);
    }

    // No Bootstrap auto-resume on mouseleave, touchend or data-API navigation.
    this.carousel = Carousel.getOrCreateInstance(element, {
      ride: false,
      pause: false,
    });
    this.carousel.pause();
    this.listen(element, "slid.bs.carousel", (event) => {
      if (event.target === element) this.updateSlides(event.direction);
    });
    if (this.rotation) {
      this.listen(this.rotation, "click", () => {
        this.paused = !this.paused;
        this.updateRotation();
      });
      this.listen(element, "pointerenter", (event) => {
        if (event.pointerType !== "mouse") return;
        this.hovered = true;
        this.updateRotation();
      });
      this.listen(element, "pointerleave", (event) => {
        if (event.pointerType !== "mouse") return;
        this.hovered = false;
        this.updateRotation();
      });
      this.listen(element, "focusin", (event) => {
        // Keyboard focus always stops rotation. A pointer click on the
        // rotation button must retain its pending Play/Pause action.
        if (
          !this.rotation.contains(event.target) ||
          this.rotation.matches(":focus-visible")
        ) {
          this.paused = true;
          this.updateRotation();
        }
      });
      // A preference change stops rotation; only an explicit Play restarts it.
      if (this.motion) {
        this.listen(this.motion, "change", (event) => {
          if (event.matches) {
            this.paused = true;
            this.updateRotation();
          }
        });
      }
      this.controls.hidden = false;
    }

    element.setAttribute("data-bcl-initialized", "true");
    this.updateSlides();
    this.updateRotation();
    if (this.isImageLayout && this.controls && window.ResizeObserver) {
      // Images, translated credits and wrapped controls can change height.
      this.resizeObserver = new ResizeObserver(() => this.updateImageLayout());
      this.resizeObserver.observe(this.controls);
      this.slides.forEach((slide) => {
        const image = slide.querySelector(".bcl-carousel-v2__image");
        if (image) this.resizeObserver.observe(image);
      });
      this.credits.forEach((credit) => {
        if (credit) this.resizeObserver.observe(credit);
      });
    }
    instances.set(element, this);
  }

  updateImageLayout() {
    if (!this.isImageLayout || !this.controls) return;
    const active = this.slides.find((slide) => slide.classList.contains("active"));
    const image = active?.querySelector(".bcl-carousel-v2__image");
    const credit = active?.querySelector(".bcl-carousel-v2__copyright");
    this.element.style.setProperty(
      "--bcl-carousel-media-height",
      `${(image?.offsetHeight || 0) + (credit?.offsetHeight || 0)}px`,
    );
    this.element.style.setProperty(
      "--bcl-carousel-controls-height",
      `${this.controls.offsetHeight}px`,
    );
  }

  listen(target, event, listener) {
    target.addEventListener(event, listener);
    this.listeners.push(() => target.removeEventListener(event, listener));
  }

  updateSlides(direction) {
    const activeIndex = this.slides.findIndex((slide) =>
      slide.classList.contains("active"),
    );
    // Arrow-key/swipe/API navigation can hide a slide that still owns focus.
    // Move focus to navigation before making the outgoing content inert, and
    // keep it following the direction while it already sits on a nav button.
    const focused = document.activeElement;
    if (
      this.slides.some(
        (slide, index) => index !== activeIndex && slide.contains(focused),
      ) ||
      focused?.matches?.('[data-bs-slide="prev"], [data-bs-slide="next"]')
    ) {
      const order = (direction === "left") !== isRTL() ? "next" : "prev";
      this.element
        .querySelector(`[data-bs-slide="${order}"]`)
        ?.focus({ preventScroll: true });
    }
    this.slides.forEach((slide, index) => {
      slide.setAttribute("aria-hidden", String(index !== activeIndex));
      slide.toggleAttribute("inert", index !== activeIndex);
    });
    if (this.counter) this.counter.textContent = String(activeIndex + 1);
    if (this.creditFooter) {
      this.footerCredits.forEach((credit, index) => {
        if (credit) credit.hidden = index !== activeIndex;
      });
      this.creditFooter.hidden = !this.footerCredits[activeIndex];
    }
    this.updateImageLayout();
  }

  updateRotation() {
    const rotating = !this.paused && !this.hovered && this.slides.length > 1;
    this.carousel.pause();
    if (rotating) this.carousel.cycle();
    this.inner.setAttribute("aria-live", rotating ? "off" : "polite");
    if (!this.rotation) return;
    this.rotation.setAttribute(
      "aria-label",
      this.paused
        ? this.rotation.dataset.bclPlayLabel
        : this.rotation.dataset.bclPauseLabel,
    );
    this.rotation.querySelector("[data-bcl-play-icon]").hidden = !this.paused;
    this.rotation.querySelector("[data-bcl-pause-icon]").hidden = this.paused;
  }

  dispose() {
    this.resizeObserver?.disconnect();
    this.element.style.removeProperty("--bcl-carousel-media-height");
    this.element.style.removeProperty("--bcl-carousel-controls-height");
    this.listeners.forEach((remove) => remove());
    this.carousel.pause();
    // Finish Bootstrap's queued transition before disposing its instance.
    if (
      this.element.querySelector(".carousel-item-next, .carousel-item-prev")
    ) {
      this.element
        .querySelector(".carousel-item.active")
        ?.dispatchEvent(new Event("transitionend"));
    }
    this.carousel.dispose();
    this.element.removeAttribute("data-bcl-initialized");
    this.inner.setAttribute("aria-live", "off");
    if (this.controls) this.controls.hidden = true;
    this.slides.forEach((slide) => {
      slide.removeAttribute("aria-hidden");
      slide.removeAttribute("inert");
    });
    this.creditFooter?.remove();
    instances.delete(this.element);
  }

  static getOrCreateInstance(element) {
    return instances.get(element) || new CarouselV2(element);
  }

  /** Call after inserting markup (e.g. Drupal AJAX); safe to call repeatedly. */
  static init(root = document) {
    instances.forEach((instance, element) => {
      if (!element.isConnected) instance.dispose();
    });
    const elements = Array.from(root.querySelectorAll(SELECTOR));
    if (root.matches?.(SELECTOR)) elements.unshift(root);
    elements.forEach((element) => CarouselV2.getOrCreateInstance(element));
  }
}

// Storybook dispatches these events again when it renders a new story.
document.addEventListener("DOMContentLoaded", () => CarouselV2.init());
window.addEventListener("load", () => CarouselV2.init());
if (document.readyState !== "loading") CarouselV2.init();

export default CarouselV2;
