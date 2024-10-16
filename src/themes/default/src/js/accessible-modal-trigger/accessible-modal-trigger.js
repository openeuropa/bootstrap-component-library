import Modal from "@openeuropa/bcl-bootstrap/js/src/modal";
import EventHandler from "@openeuropa/bcl-bootstrap/js/src/dom/event-handler";
import SelectorEngine from "@openeuropa/bcl-bootstrap/js/src/dom/selector-engine";

class AccessibleModalTrigger {
  constructor(triggerElement) {
    this.triggerElement = triggerElement;
    this.modalElement = SelectorEngine.findOne(triggerElement.getAttribute("data-bs-target") || triggerElement.getAttribute("href"));
    this.modal = Modal.getOrCreateInstance(this.modalElement);

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
    // When the modal is shown, update aria-expanded to true
    EventHandler.on(this.modalElement, "show.bs.modal", () => {
      this.triggerElement.setAttribute("aria-expanded", "true");
    });

    // When the modal is hidden, update aria-expanded to false
    EventHandler.on(this.modalElement, "hide.bs.modal", () => {
      this.triggerElement.setAttribute("aria-expanded", "false");
    });

    // Handle the trigger click event
    EventHandler.on(this.triggerElement, "click", (event) => {
      event.preventDefault();
      this.modal.toggle();
    });
  }

  static init() {
    const triggers = SelectorEngine.find('[data-bs-toggle="modal"]');
    triggers.forEach(triggerElement => new AccessibleModalTrigger(triggerElement));
  }
}

// Initialize all modal triggers on the page
document.addEventListener("DOMContentLoaded", () => {
  AccessibleModalTrigger.init();
});

export default AccessibleModalTrigger;
