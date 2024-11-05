import Modal from "@openeuropa/bcl-bootstrap/js/src/modal";
import Offcanvas from "@openeuropa/bcl-bootstrap/js/src/offcanvas";
import EventHandler from "@openeuropa/bcl-bootstrap/js/src/dom/event-handler";
import SelectorEngine from "@openeuropa/bcl-bootstrap/js/src/dom/selector-engine";

/**
 * AccessibleToggle enhances Bootstrap Modal and Offcanvas components by:
 * - Adding ARIA attributes for improved accessibility.
 * - Updating `aria-expanded` on trigger elements based on visibility.
 * Automatically initializes all modal and offcanvas triggers on the page.
 */
class AccessibleToggle {
  constructor(triggerElement, type) {
    this.triggerElement = triggerElement;
    this.type = type;

    const target = triggerElement.getAttribute("data-bs-target") || triggerElement.getAttribute("href");
    this.targetElement = SelectorEngine.findOne(target);

    if (this.type === "modal") {
      this.instance = Modal.getOrCreateInstance(this.targetElement);
    } else if (this.type === "offcanvas") {
      this.instance = Offcanvas.getOrCreateInstance(this.targetElement);
    }

    this.addAriaAttributes();
    this.addEventListeners();
  }

  addAriaAttributes() {
    if (this.triggerElement) {
      this.triggerElement.setAttribute("aria-haspopup", "true");
      this.triggerElement.setAttribute("aria-expanded", "false");
    }
  }

  addEventListeners() {
    const showEvent = this.type === "modal" ? "show.bs.modal" : "show.bs.offcanvas";
    const hideEvent = this.type === "modal" ? "hide.bs.modal" : "hide.bs.offcanvas";

    EventHandler.on(this.targetElement, showEvent, () => {
      this.triggerElement.setAttribute("aria-expanded", "true");
    });

    EventHandler.on(this.targetElement, hideEvent, () => {
      this.triggerElement.setAttribute("aria-expanded", "false");
    });
  }

  static init(toggles) {
    toggles.forEach(toggle => {
      const triggerElements = SelectorEngine.find(toggle.selector);
      triggerElements.forEach(triggerElement => new AccessibleToggle(triggerElement, toggle.type));
    });
  }
}

export default AccessibleToggle;
