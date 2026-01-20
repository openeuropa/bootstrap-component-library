import Dropdown from "@openeuropa/bcl-bootstrap/js/src/dropdown";
import SelectorEngine from "@openeuropa/bcl-bootstrap/js/src/dom/selector-engine";
import EventHandler from "@openeuropa/bcl-bootstrap/js/src/dom/event-handler";

const SUBMENU_HEIGHT_VARIABLE = "--oel-mega-menu-submenu-height";
const SUBMENU_BODY_SELECTOR = ".__submenu_body";

class MegaMenu {
  scheduleSubmenuHeightUpdate = () => {
    if (this.submenuHeightFrame) {
      return;
    }

    this.submenuHeightFrame = window.requestAnimationFrame(() => {
      this.submenuHeightFrame = null;
      this.updateSubmenuHeight();
    });
  };

  constructor(root) {
    this.root = root;
    this.submenuHeightFrame = null;
    this.submenuBodies = SelectorEngine.find(SUBMENU_BODY_SELECTOR, this.root);

    this.backButton = SelectorEngine.findOne(".back-button", this.root);
    this.trigger = SelectorEngine.findOne(':scope > .dropdown-toggle[data-bs-toggle="dropdown"]', this.root);
    this.ul = SelectorEngine.findOne('.bcl-mega-menu__items.__level-1', this.root);

    EventHandler.on(window, "resize", this.scheduleSubmenuHeightUpdate);
    EventHandler.on(window, "orientationchange", this.scheduleSubmenuHeightUpdate);

    this.addSubmenuTriggerListeners();
    this.addBackButtonListener();
    this.addTriggerListeners();
    this.addEscapeKeyHandler();
  }

  getPanelForTrigger(trigger) {
    const id = trigger.getAttribute('aria-controls');
    return id ? document.getElementById(id) : null;
  }

  getFocusableChildren(container) {
    if (!container) return [];
    return Array.from(container.querySelectorAll(
      'a[href], button:not([disabled]):not(.back-button), [tabindex]:not([tabindex="-1"])'
    )).filter(el => !el.hasAttribute('disabled') && el.tabIndex !== -1);
  }

  focusFirstItemInPanel(trigger) {
    const panel = this.getPanelForTrigger(trigger);
    if (!panel) return;
    const list = SelectorEngine.findOne('ul.bcl-mega-menu__items', panel);
    if (!list) return;
    const first = this.getFocusableChildren(list)[0];
    if (first) first.focus();
  }

  addEscapeKeyHandler() {
    // Bootstrap attaches its dropdown keydown listener on `document` in the capture phase.
    // By listening on `window` in the capture phase, our handler runs *before* Bootstrap’s.
    // This lets us intercept Esc inside mega menu submenus and stop Bootstrap from closing
    // the entire dropdown.
    window.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;

      // Only act if Esc originated inside THIS mega menu's open submenu
      const panel = e.target.closest('.bcl-mega-menu__submenu');
      if (!panel || panel.hidden || !this.root.contains(panel)) {
        // Not our submenu: let Bootstrap handle it normally
        return;
      }

      // Stop the event BEFORE it reaches Bootstrap's document-capture handler
      e.preventDefault();
      e.stopImmediatePropagation();
      e.stopPropagation();

      // Close only this submenu and focus its trigger
      const triggerId = panel.getAttribute('aria-labelledby');
      const trigger = triggerId ? document.getElementById(triggerId) : null;
      if (trigger) {
        this.closeSubmenu(trigger);
        trigger.focus();
      }
    }, true);
  }

  addTriggerListeners() {
    if (!this.trigger) return;

    // When the mega menu is opened, focus the first item in the menu.
    EventHandler.on(this.trigger, 'shown.bs.dropdown', () => {
      this.scheduleSubmenuHeightUpdate();
      const panelId = this.trigger.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;
      const firstFocusable = panel ? this.getFocusableChildren(panel)[0] : null;
      if (firstFocusable) firstFocusable.focus();
    });

    // When the mega menu is closed, close all submenus.
    EventHandler.on(this.trigger, 'hide.bs.dropdown', () => {
      this.closeAllSubmenus();
    });
  }

  addSubmenuTriggerListeners() {
    // Clicking/activating a parent item button toggles the submenu.
    SelectorEngine
      .find(':scope li > button[aria-expanded]', this.root)
      .forEach((trigger) => {
        EventHandler.on(trigger, "click", () => {
          const expanded = trigger.getAttribute('aria-expanded') === 'true';
          if (expanded) {
            // Close this submenu.
            this.closeSubmenu(trigger);
          } else {
            this.openSubmenu(trigger);
            // The back button is only visible in mobile / narrow viewport.
            if (this.backButton && this.backButton.offsetParent !== null) {
              this.backButton.focus();
            } else {
              this.focusFirstItemInPanel(trigger);
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
    const panel = this.getPanelForTrigger(trigger);
    if (panel) panel.hidden = false;
    this.scheduleSubmenuHeightUpdate();
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
    if (!this.ul) {
      return;
    }
    const triggers = SelectorEngine
      .find(':scope > li > button[aria-expanded="true"]', this.ul);
    // Use arrow fn to keep `this` bound.
    triggers.forEach((t) => this.closeSubmenu(t));
    return triggers;
  }

  closeSubmenu(trigger) {
    trigger.setAttribute('aria-expanded', 'false');
    const panel = this.getPanelForTrigger(trigger);
    if (panel) panel.hidden = true;
  }

  updateSubmenuHeight() {
    if (!this.trigger || this.trigger.getAttribute('aria-expanded') !== 'true') {
      return;
    }

    if (!this.submenuBodies || this.submenuBodies.length === 0) {
      return;
    }

    const viewportHeight =
      (document.documentElement && document.documentElement.clientHeight) ||
      window.innerHeight ||
      0;

    if (!viewportHeight) {
      return;
    }

    this.submenuBodies.forEach((submenuBody) => {
      if (!submenuBody.isConnected || submenuBody.closest('[hidden]')) {
        return;
      }

      const rect = submenuBody.getBoundingClientRect();
      const visibleTop = Math.max(rect.top, 0);
      // Use the distance to the viewport bottom instead of the current element
      // height. Nested submenus inherit the parent max-height, so relying on
      // rect.bottom would keep the parent's value and never recalc for children.
      const availableHeight = Math.max(0, viewportHeight - visibleTop);
      const value = `${availableHeight}px`;

      if (submenuBody.style.getPropertyValue(SUBMENU_HEIGHT_VARIABLE) !== value) {
        submenuBody.style.setProperty(SUBMENU_HEIGHT_VARIABLE, value);
      }
    });
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
