import Carousel from "@openeuropa/bcl-bootstrap/js/src/carousel";
import { isRTL } from "@openeuropa/bcl-bootstrap/js/src/util/index";

const SELECTOR = ".bcl-carousel-v2";
const instances = new Map();

/** Bootstrap owns navigation and its timer; BCL adds rotation intent and progress. */
class CarouselV2 extends Carousel {
  constructor(element) {
    // Replace an earlier Bootstrap instance so every navigation path uses BCL timing.
    const previous = Carousel.getInstance(element);
    if (previous) {
      previous.pause();
      element
        .querySelector(".carousel-item.active")
        ?.dispatchEvent(new Event("transitionend"));
      previous.dispose();
    }
    // Hover pause is handled by BCL. Do not change data-bs-pause.
    super(element, { ride: false, pause: false });
    this.element = element;
    this.slides = Array.from(element.querySelectorAll(".carousel-item"));
    this.media = new Map(
      this.slides.map((slide) => [
        slide,
        {
          image: slide.querySelector(".bcl-carousel-v2__image"),
          credit: slide.querySelector(".bcl-carousel-v2__copyright"),
          bar: slide.querySelector(".bcl-carousel-v2__progress"),
        },
      ]),
    );
    this.inner = element.querySelector(".carousel-inner");
    this.controls = element.querySelector(".bcl-carousel-v2__controls");
    this.rotation = element.querySelector("[data-bcl-rotation]");
    this.counter = element.querySelector("[data-bcl-current]");
    this.playIcon = this.rotation?.querySelector("[data-bcl-play-icon]");
    this.pauseIcon = this.rotation?.querySelector("[data-bcl-pause-icon]");
    this.navigation = {
      prev: element.querySelector('[data-bs-slide="prev"]'),
      next: element.querySelector('[data-bs-slide="next"]'),
    };
    this.motion = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    this.paused =
      element.dataset.bclAutoplay === "false" || !!this.motion?.matches;
    this.pauseOnHover = element.dataset.bclPauseOnHover !== "false";
    this.hovered =
      this.pauseOnHover &&
      element.matches(":hover") &&
      !!window.matchMedia?.("(any-hover: hover)").matches;
    this.events = new AbortController();
    this.isImageLayout = element.classList.contains("bcl-carousel-v2--split");
    this.setupSlides();
    this.setupEvents();
    element.setAttribute("data-bcl-initialized", "true");
    this.updateSlides();
    this.updateRotation();
    instances.set(element, this);
  }

  setupSlides() {
    const defaultInterval = Number(this.element.dataset.bsInterval) || 10000;
    this.slides.forEach((slide) => {
      const content = slide.querySelector(".bcl-carousel-v2__content");
      const text = content
        ? Array.from(content.children, (child) => child.textContent).join(" ")
        : "";
      const words = text.trim().split(/\s+/u).filter(Boolean).length;
      // Respect reading time, the configured interval and the 8s minimum.
      slide.dataset.bsInterval = String(
        Math.max(
          8000,
          Number(slide.dataset.bsInterval) || defaultInterval,
          3000 + 400 * words,
        ),
      );
    });
    if (!this.isImageLayout) {
      this.creditFooter = document.createElement("div");
      this.creditFooter.className = "bcl-carousel-v2__credits";
      this.footerCredits = this.slides.map((slide) => {
        const copy = this.media.get(slide).credit?.cloneNode(true);
        if (copy) this.creditFooter.append(copy);
        return copy;
      });
      this.inner.after(this.creditFooter);
    } else if (this.controls && window.ResizeObserver) {
      this.resizeObserver = new ResizeObserver(() => this.updateImageLayout());
      [
        this.controls,
        ...Array.from(this.media.values()).flatMap(({ image, credit }) => [
          image,
          credit,
        ]),
      ]
        .filter(Boolean)
        .forEach((node) => this.resizeObserver.observe(node));
    }
  }

  setupEvents() {
    this.listen(this.element, "slid.bs.carousel", (event) => {
      if (event.target === this.element) this.updateSlides(event.direction);
    });
    if (!this.rotation) return;
    this.listen(this.rotation, "click", () => {
      this.paused = !this.paused;
      this.updateRotation();
    });
    for (const type of ["pointerenter", "pointerleave"]) {
      this.listen(this.element, type, (event) => {
        if (!this.pauseOnHover || event.pointerType !== "mouse") return;
        this.hovered = type === "pointerenter";
        this.updateRotation();
      });
    }
    if (this.motion) {
      this.listen(this.motion, "change", (event) => {
        if (!event.matches) return;
        this.paused = true;
        this.updateRotation();
      });
    }
    this.controls.hidden = false;
  }

  listen(target, event, listener) {
    target.addEventListener(event, listener, { signal: this.events.signal });
  }

  updateImageLayout() {
    if (!this.isImageLayout || !this.controls) return;
    const { image, credit } = this.media.get(this.activeSlide) || {};
    this.element.style.setProperty(
      "--bcl-carousel-media-height",
      `${(image?.offsetHeight || 0) + (credit?.offsetHeight || 0)}px`,
    );
    this.element.style.setProperty(
      "--bcl-carousel-controls-height",
      `${this.controls.offsetHeight}px`,
    );
  }

  updateSlides(direction) {
    const activeIndex = this.slides.findIndex((slide) =>
      slide.classList.contains("active"),
    );
    this.activeSlide = this.slides[activeIndex];
    // Keep focus out of content that is about to become inert.
    const focused = document.activeElement;
    if (
      this.slides.some(
        (slide, index) => index !== activeIndex && slide.contains(focused),
      ) ||
      Object.values(this.navigation).includes(focused)
    ) {
      const order = (direction === "left") !== isRTL() ? "next" : "prev";
      this.navigation[order]?.focus({ preventScroll: true });
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
    this.selectProgress(this.activeSlide);
    this.updateImageLayout();
  }

  updateRotation() {
    const rotating = !this.paused && !this.hovered && this.slides.length > 1;
    this.pause();
    if (rotating)
      this.cycle(
        this.duration ? Math.max(1, this.duration - this.elapsed) : undefined,
      );
    this.showProgress();
    this.inner.setAttribute("aria-live", rotating ? "off" : "polite");
    if (!this.rotation) return;
    this.rotation.setAttribute(
      "aria-label",
      this.paused
        ? this.rotation.dataset.bclPlayLabel
        : this.rotation.dataset.bclPauseLabel,
    );
    this.playIcon.hidden = !this.paused;
    this.pauseIcon.hidden = this.paused;
  }

  // These hooks observe Bootstrap's actual timer, including internal restarts.
  _updateInterval() {
    super._updateInterval();
    if (this.remaining !== undefined) this._config.interval = this.remaining;
  }

  cycle(remaining) {
    this.selectProgress(this._activeElement || this.activeSlide);
    this.remaining = remaining;
    super.cycle();
    this.remaining = undefined;
    if (remaining === undefined) {
      this.duration = this._config.interval;
      this.elapsed = 0;
    }
    this.started = Date.now();
    this.running = true;
    this.animation?.cancel();
    this.showProgress();
    if (!this.bar || this.motion?.matches) return;
    // No independent progress timer or animation callback drives navigation.
    this.animation = this.bar.animate?.(
      [
        { transform: `scaleX(${this.elapsed / this.duration})` },
        { transform: "scaleX(1)" },
      ],
      { duration: this._config.interval, easing: "linear", fill: "forwards" },
    );
  }

  pause() {
    super.pause();
    if (this.running)
      this.elapsed = Math.min(
        this.duration,
        this.elapsed + Date.now() - this.started,
      );
    this.running = false;
    this.animation?.cancel();
    this.animation = null;
    if (this.bar)
      this.bar.style.transform = `scaleX(${this.elapsed / (this.duration || 1)})`;
  }

  selectProgress(slide) {
    if (slide === this.progressSlide) return;
    this.resetProgress();
    this.progressSlide = slide;
    this.bar = this.media.get(slide)?.bar;
    this.showProgress();
  }

  resetProgress() {
    this.animation?.cancel();
    this.animation = null;
    this.running = false;
    this.elapsed = 0;
    this.duration = 0;
    if (this.bar) {
      this.bar.hidden = true;
      this.bar.style.transform = "scaleX(0)";
    }
  }

  showProgress() {
    if (this.bar)
      this.bar.hidden =
        this.paused || !!this.motion?.matches || this.slides.length < 2;
  }

  dispose() {
    this.events.abort();
    this.pause();
    // Finish any queued Bootstrap transition before releasing its instance.
    this.element
      .querySelector(".carousel-item.active")
      ?.dispatchEvent(new Event("transitionend"));
    this.resetProgress();
    this.resizeObserver?.disconnect();
    this.element.style.removeProperty("--bcl-carousel-media-height");
    this.element.style.removeProperty("--bcl-carousel-controls-height");
    this.element.removeAttribute("data-bcl-initialized");
    this.inner.setAttribute("aria-live", "off");
    if (this.controls) this.controls.hidden = true;
    this.slides.forEach((slide) => {
      slide.removeAttribute("aria-hidden");
      slide.removeAttribute("inert");
    });
    this.creditFooter?.remove();
    instances.delete(this.element);
    super.dispose();
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
