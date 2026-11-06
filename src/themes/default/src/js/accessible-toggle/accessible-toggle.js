import Modal from "@openeuropa/bcl-bootstrap/js/src/modal";
import Offcanvas from "@openeuropa/bcl-bootstrap/js/src/offcanvas";
import EventHandler from "@openeuropa/bcl-bootstrap/js/src/dom/event-handler";
import SelectorEngine from "@openeuropa/bcl-bootstrap/js/src/dom/selector-engine";

// Offcanvas elements that already have the role restore listener.
const offcanvasWithRole = new WeakSet();

/**
 * AccessibleToggle enhances Bootstrap Modal and Offcanvas components by:
 * - Adding ARIA attributes for improved accessibility.
 * - Updating `aria-expanded` on trigger elements based on visibility.
 * - Restoring the offcanvas role from the markup after Bootstrap removes it on hide.
 * Automatically initializes all modal and offcanvas triggers on the page.
 */
class AccessibleToggle {
  constructor(triggerElement, type) {
    this.triggerElement = triggerElement;
    this.type = type;

    const target = triggerElement.getAttribute("data-bs-target") || triggerElement.getAttribute("href");
    if (!target || target === "#") {
      return;
    }

    this.targetElement = SelectorEngine.findOne(target);
    if (!this.targetElement) {
      return;
    }

    if (this.type === "modal") {
      this.instance = Modal.getOrCreateInstance(this.targetElement);
    } else if (this.type === "offcanvas") {
      this.instance = Offcanvas.getOrCreateInstance(this.targetElement);
    }

    this.addAriaAttributes();
    this.addEventListeners();
  }

  addAriaAttributes() {
    if (this.type === 'modal') {
      if (this.triggerElement) {
        this.triggerElement.setAttribute('aria-haspopup', 'dialog');
      }
    }
  
    if (this.type === 'offcanvas') {
      if (this.triggerElement) {
        this.triggerElement.setAttribute('aria-haspopup', 'dialog');
        this.triggerElement.setAttribute('aria-expanded', 'false');
      }
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

    if (this.type === "offcanvas") {
      this.restoreRoleOnHidden();
    }
  }

  restoreRoleOnHidden() {
    // Init can run many times, keep the first role read from the markup.
    if (offcanvasWithRole.has(this.targetElement)) {
      return;
    }

    const role = this.targetElement.getAttribute("role");
    if (!role) {
      return;
    }

    offcanvasWithRole.add(this.targetElement);
    EventHandler.on(this.targetElement, "hidden.bs.offcanvas", () => {
      this.targetElement.setAttribute("role", role);
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
