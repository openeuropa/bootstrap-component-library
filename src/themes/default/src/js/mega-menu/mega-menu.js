import Dropdown from "@openeuropa/bcl-bootstrap/js/src/dropdown";
import SelectorEngine from "@openeuropa/bcl-bootstrap/js/src/dom/selector-engine";
import EventHandler from "@openeuropa/bcl-bootstrap/js/src/dom/event-handler";

class MegaMenu {
  constructor(root) {
    this.root = root;
    this.parentToggle = SelectorEngine.findOne('[data-bs-toggle="dropdown"]', this.root);
    if (!this.parentToggle) return;
    this.parentInstance = Dropdown.getOrCreateInstance(this.parentToggle);
    this.childToggles = SelectorEngine.find('.dropdown > [data-bs-toggle="dropdown"]', this.root);
    this.backButton = SelectorEngine.findOne('.back-button', this.root);
    this.addEventListeners();
  }

  addEventListeners() {
    EventHandler.on(this.parentToggle, "shown.bs.dropdown", () => {
      if (!this.childToggles.length) return;
      if (!window.matchMedia("(min-width: 992px)").matches) return;
      const firstToggle = this.childToggles[0];
      if (firstToggle.parentElement.classList.contains("show")) return;
      Dropdown.getOrCreateInstance(firstToggle).show();
    });
    this.childToggles.forEach((toggle) => {
      const dropdownInstance = Dropdown.getOrCreateInstance(toggle);
      EventHandler.on(toggle, "click", (e) => {
        e.preventDefault();
        this.childToggles.forEach((other) => {
          Dropdown.getOrCreateInstance(other).hide();
        });
        dropdownInstance.show();
      });
    });
    if (this.backButton) {
      EventHandler.on(this.backButton, "click", () => {
        this.childToggles.forEach((toggle) => {
          Dropdown.getOrCreateInstance(toggle).hide();
        });
      });
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
