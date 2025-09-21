import Dropdown from "@openeuropa/bcl-bootstrap/js/src/dropdown";
import SelectorEngine from "@openeuropa/bcl-bootstrap/js/src/dom/selector-engine";
import EventHandler from "@openeuropa/bcl-bootstrap/js/src/dom/event-handler";

class MegaMenu {

  constructor(root) {
    this.root = root;

    this.backButton = SelectorEngine.findOne(".back-button", this.root);
    this.trigger = SelectorEngine.findOne(':scope > .dropdown-toggle[data-bs-toggle="dropdown"]', this.root);
    this.ul = SelectorEngine.findOne('.bcl-mega-menu__items.__level-1', this.root);

    this.addSubmenuTriggerListeners();
    this.addBackButtonListener();
  }

  addTriggerListeners() {
    this.trigger.addEventListener('hide.bs.dropdown', () => {
      // Close submenus, so that next time it opens at the root.
      this.closeAllSubmenus();
    })
  }

  addSubmenuTriggerListeners() {
    // Clicking a parent item button toggles the aria-expanded attribute.
    SelectorEngine
      .find(':scope li > button[aria-expanded]', this.root)
      .forEach((trigger) => {
        EventHandler.on(trigger, "click", () => {
          if (trigger.getAttribute('aria-expanded') === 'true') {
            // Close the current submenu.
            this.closeSubmenu(trigger);
          }
          else {
            this.openSubmenu(trigger);
            // The back button is only visible in mobile / narrow viewport.
            if (this.backButton.offsetParent !== null) {
              this.backButton.focus();
            }
          }
        });
      });
  }

  addBackButtonListener() {
    // Clicking a back button closes the submenu or the menu itself.
    if (!this.backButton) {
      return;
    }
    EventHandler.on(this.backButton, "click", () => {
      const submenusThatWereOpen = this.closeAllSubmenus();
      if (submenusThatWereOpen.length > 0) {
        // Focus the submenu trigger, to allow quick reopen by keystroke.
        submenusThatWereOpen[0].focus();
        return;
      }
      // Close the mega menu itself.
      if (this.trigger) {
        // Close using the Bootstrap dropdown API.
        Dropdown.getOrCreateInstance(this.trigger).hide();
        // Focus the main trigger, to allow quick reopen by keystroke.
        this.trigger.focus();
      }
    });
  }

  openSubmenu(trigger) {
    // Close all submenus, then open the current submenu.
    this.closeAllSubmenus();
    trigger.setAttribute('aria-expanded', 'true');
  }

  /**
   * Closes all submenus.
   *
   * This is simple while there is only one submenu level.
   *
   * @returns {HTMLElement[]}
   *   Triggers for submenus that were closed.
   *   Usually this is either exactly one, or none.
   */
  closeAllSubmenus() {
    const triggers = SelectorEngine
      .find(':scope > li > button[aria-expanded="true"]', this.ul);
    triggers.forEach(this.closeSubmenu);
    return triggers;
  }

  closeSubmenu(trigger) {
    trigger.setAttribute('aria-expanded', 'false');
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
