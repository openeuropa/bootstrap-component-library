import Tab from "@openeuropa/bcl-bootstrap/js/src/tab";
import Dropdown from "@openeuropa/bcl-bootstrap/js/src/dropdown";
import SelectorEngine from "@openeuropa/bcl-bootstrap/js/src/dom/selector-engine";
import EventHandler from "@openeuropa/bcl-bootstrap/js/src/dom/event-handler";

class MegaMenu {
  constructor(root) {
    this.root = root;
    this.parentToggle = SelectorEngine.findOne('.bcl-header__navbar [data-bs-toggle="tab"]', this.root);
    if (!this.parentToggle) return;
    this.backButton = SelectorEngine.findOne('.back-button', this.root);
    this.addEventListeners();
  }

  addEventListeners() {
    if (this.backButton) {
      EventHandler.on(this.backButton, "click", () => {
        this.hideMostInnerTabOrBaseDropdown();
      });
    }
  }

  hideMostInnerTabOrBaseDropdown() {
    const tabToggles = SelectorEngine.find('.tab-toggle.active[data-bs-toggle="tab"]', this.root);
    const dropdownToggle = SelectorEngine.findOne('.bcl-header__navbar .dropdown-toggle.show[data-bs-toggle="dropdown"]');
    if (tabToggles.length) {
      const mostInnerToggle = tabToggles[tabToggles.length - 1];
      const tabPane = document.querySelector(".tab-pane.active.show");
      mostInnerToggle.classList.remove("active");
      mostInnerToggle.setAttribute("aria-selected", "false");
      tabPane.classList.remove("active");
      tabPane.classList.remove("show");
    } else {
      Dropdown.getOrCreateInstance(dropdownToggle).hide();
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
