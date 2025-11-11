import Collapse from "@openeuropa/bcl-bootstrap/js/src/collapse";
import EventHandler from "@openeuropa/bcl-bootstrap/js/src/dom/event-handler";
import SelectorEngine from "@openeuropa/bcl-bootstrap/js/src/dom/selector-engine";

class AccordionToggle {
  constructor(buttonElement) {
    this.buttonElement = buttonElement;
    this.targetAccordionId = buttonElement.getAttribute("data-target");
    this.action = buttonElement.getAttribute("data-action");

    this.accordionElement = SelectorEngine.findOne(`#${this.targetAccordionId}`);
    this.accordionItems = SelectorEngine.find(".accordion-collapse", this.accordionElement);

    this.addEventListeners();
  }

  addEventListeners() {
    EventHandler.on(this.buttonElement, "click", (event) => this.handleAccordionAction(event));
  }

  handleAccordionAction(event) {
    const item = event.target;
    const action = item.getAttribute('data-action');
    const accordionItems = this.accordionItems;

    accordionItems.forEach((accordionItem) => {
      const collapseInstance = Collapse.getOrCreateInstance(accordionItem, { toggle: false });

      if (action === 'expand') {
        collapseInstance.show();
      } else if (action === 'collapse') {
        collapseInstance.hide();
      }
    });
  }

  static init(root = document.documentElement) {
    const context = root instanceof Document ? root.documentElement : root;

    const toggleButtons =
      context instanceof Element
        ? SelectorEngine.find('[data-action][data-target]', context)
        : context && typeof context.querySelectorAll === "function"
          ? Array.from(context.querySelectorAll('[data-action][data-target]'))
          : SelectorEngine.find('[data-action][data-target]');

    toggleButtons.forEach((buttonElement) => {
      if (buttonElement.dataset.accordionToggleInitialized === "true") {
        return;
      }

      new AccordionToggle(buttonElement);
      buttonElement.dataset.accordionToggleInitialized = "true";
    });
  }
}

const initializeAccordionToggle = () => AccordionToggle.init();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeAccordionToggle);
} else {
  initializeAccordionToggle();
}

export default AccordionToggle;
