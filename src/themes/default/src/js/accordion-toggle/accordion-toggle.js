import Collapse from "@openeuropa/bcl-bootstrap/js/src/collapse";
import EventHandler from "@openeuropa/bcl-bootstrap/js/src/dom/event-handler";
import SelectorEngine from "@openeuropa/bcl-bootstrap/js/src/dom/selector-engine";

class AccordionToggle {
  static isInitialized = false;

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

  static init() {
    if (AccordionToggle.isInitialized) {
      return;
    }

    const toggleButtons = SelectorEngine.find('[data-action][data-target]');
    toggleButtons.forEach(buttonElement => new AccordionToggle(buttonElement));

    AccordionToggle.isInitialized = true;
  }
}

export default AccordionToggle;
