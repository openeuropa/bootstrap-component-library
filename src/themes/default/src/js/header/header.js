import EventHandler from "@openeuropa/bcl-bootstrap/js/src/dom/event-handler";
import SelectorEngine from "@openeuropa/bcl-bootstrap/js/src/dom/selector-engine";

const HEADER_SELECTOR = ".bcl-header";
const TOGGLER_SELECTOR = ".bcl-navbar-toggler";
const OFFSET_VARIABLE = "--oel-mega-menu-offset-top";

class Header {
  constructor(element) {
    this.element = element;
    this.frameRequest = null;
    this.resizeObserver = null;

    this.boundScheduleUpdate = this.scheduleUpdate.bind(this);

    this.init();
  }

  init() {
    this.updateOffset();

    EventHandler.on(window, "resize", this.boundScheduleUpdate);
    EventHandler.on(window, "orientationchange", this.boundScheduleUpdate);
    EventHandler.on(window, "scroll", this.boundScheduleUpdate);

    const togglers = SelectorEngine.find(TOGGLER_SELECTOR, this.element);
    togglers.forEach((toggler) => {
      EventHandler.on(toggler, "click", this.boundScheduleUpdate);
    });

    if (typeof window !== "undefined" && "ResizeObserver" in window && document.body) {
      this.resizeObserver = new ResizeObserver(() => this.scheduleUpdate());
      this.resizeObserver.observe(document.body);
    }
  }

  scheduleUpdate() {
    if (this.frameRequest) {
      return;
    }

    this.frameRequest = window.requestAnimationFrame(() => {
      this.frameRequest = null;
      this.updateOffset();
    });
  }

  updateOffset() {
    if (!this.element) {
      return;
    }

    const rect = this.element.getBoundingClientRect();
    const offset = Math.max(0, rect.top);
    const value = `${offset}px`;

    if (this.element.style.getPropertyValue(OFFSET_VARIABLE) === value) {
      return;
    }

    this.element.style.setProperty(OFFSET_VARIABLE, value);
  }

  static init(root) {
    if (typeof document === "undefined" || typeof window === "undefined") {
      return;
    }

    const resolvedRoot = root || document;
    const context =
      resolvedRoot instanceof Element
        ? resolvedRoot
        : resolvedRoot.documentElement || document.documentElement;

    const headers = SelectorEngine.find(HEADER_SELECTOR, context);

    headers.forEach((headerElement) => {
      if (headerElement.dataset.headerOffsetInitialized === "true") {
        return;
      }

      headerElement.dataset.headerOffsetInitialized = "true";
      new Header(headerElement);
    });
  }
}

if (typeof document !== "undefined") {
  const initializeHeaderOffset = () => Header.init();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeHeaderOffset);
  } else {
    initializeHeaderOffset();
  }
}

export default Header;
