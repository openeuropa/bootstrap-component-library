import Dropdown from "@openeuropa/bcl-bootstrap/js/src/dropdown";
import SelectorEngine from "@openeuropa/bcl-bootstrap/js/src/dom/selector-engine";
import EventHandler from "@openeuropa/bcl-bootstrap/js/src/dom/event-handler";

class MegaMenu {
  constructor(root) {
    this.root = root;
    this.parentToggle = SelectorEngine.findOne('[data-bs-toggle="dropdown"]', this.root);
    if (!this.parentToggle) return;
    this.backButton = SelectorEngine.findOne('.back-button', this.root);
    this.addEventListeners();
  }

  addEventListeners() {
    if (this.backButton) {
      EventHandler.on(this.backButton, "click", () => {
        this.hideMostInnerDropdown();
      });
    }
  }

  hideMostInnerDropdown() {
    const dropdownToggles = SelectorEngine.find('.dropdown-toggle.show', this.root);
    if (dropdownToggles.length) {
      const mostInnerToggle = dropdownToggles[dropdownToggles.length - 1];
      Dropdown.getOrCreateInstance(mostInnerToggle).hide();
    }
  }

  static init(selector = ".bcl-mega-menu") {
    const megaMenus = SelectorEngine.find(selector);
    megaMenus.forEach((menuEl) => new MegaMenu(menuEl));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  MegaMenu.init();
});

export default MegaMenu;
