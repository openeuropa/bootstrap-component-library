import Tab from "@openeuropa/bcl-bootstrap/js/src/tab";
import Dropdown from "@openeuropa/bcl-bootstrap/js/src/dropdown";
import SelectorEngine from "@openeuropa/bcl-bootstrap/js/src/dom/selector-engine";
import EventHandler from "@openeuropa/bcl-bootstrap/js/src/dom/event-handler";

class MegaMenu {
  constructor(root) {
    this.root = root;

    this.parentToggle = SelectorEngine.findOne('.bcl-header__navbar [data-bs-toggle="tab"]', this.root);
    if (!this.parentToggle) return;

    this.backButton = SelectorEngine.findOne(".back-button", this.root);
    this.tablist = SelectorEngine.findOne('.navigation-items[role="tablist"]', this.root);
    this.tabs = SelectorEngine.find('[role="tab"]', this.root);
    this.trigger = SelectorEngine.findOne('.dropdown-toggle[data-bs-toggle="dropdown"]', this.root);

    this.linearTabbingTabs = true;

    this.addEventListeners();

    if (this.linearTabbingTabs) this.makeAllTabsTabbable();
  }

  addEventListeners() {
    if (this.backButton) {
      EventHandler.on(this.backButton, "click", () => this.hideMostInnerTabOrBaseDropdown());
    }

    if (this.tablist && this.tabs.length) {
      this.tabs.forEach((tab) => {
        EventHandler.on(tab, "keydown", (e) => this.onTabKeydown(e, tab));
        EventHandler.on(tab, "blur", () => { delete tab.dataset.deferPanelTab; });
      });

      EventHandler.on(this.root, "keydown", (e) => this.onRootKeydown(e));
    }

    EventHandler.on(this.root, "shown.bs.tab", (e) => {
      if (this.linearTabbingTabs) this.makeAllTabsTabbable();
      this.updateBackButtonLabel(e.target);
    });

    EventHandler.on(window, "load.bs.tab.data-api", () => {
      if (this.linearTabbingTabs) this.makeAllTabsTabbable();
    });
  }

  makeAllTabsTabbable() {
    if (!this.tabs || !this.tabs.length) return;
    this.tabs.forEach((t) => {
      t.setAttribute("tabindex", "0");
    });
  }

  getNavItems() {
    const list = this.root.querySelector(".navigation-items");
    if (!list) return [];
    return Array.from(list.querySelectorAll("a, [role='tab']")).filter(
      (el) =>
        !el.hasAttribute("disabled") &&
        el.getAttribute("aria-hidden") !== "true" &&
        el.getAttribute("tabindex") !== "-1"
    );
  }

  getNextNavItemAfterTab(tab) {
    if (!tab) return null;
    const items = this.getNavItems();
    const i = items.indexOf(tab);
    if (i === -1) return null;
    return items[i + 1] || null;
  }

  isLastNavItemFocused() {
    const items = this.getNavItems();
    return items.length && document.activeElement === items[items.length - 1];
  }

  getPanelFromTab(tab) {
    const sel =
      tab.getAttribute("data-bs-target") ||
      (tab.getAttribute("aria-controls") ? "#" + tab.getAttribute("aria-controls") : "");
    return sel ? this.root.querySelector(sel) : null;
  }

  getTabFromPanel(panel) {
    const id = panel.getAttribute("aria-labelledby");
    return id ? this.root.querySelector("#" + id) : null;
  }

  getFocusable(root) {
    if (!root) return [];
    return Array.from(
      root.querySelectorAll(
        'a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => !el.hasAttribute("disabled") && el.getAttribute("aria-hidden") !== "true");
  }

  getAllDocumentFocusables() {
    return Array.from(document.querySelectorAll('a[href], button, input, select, textarea, [tabindex]')).filter(
      (el) =>
        !el.hasAttribute("disabled") &&
        el.getAttribute("tabindex") !== "-1" &&
        el.getAttribute("aria-hidden") !== "true"
    );
  }

  getNextFocusableAfter(el, skipWithin) {
    const all = this.getAllDocumentFocusables();
    const idx = all.indexOf(el);
    if (idx === -1) return null;
    for (let i = idx + 1; i < all.length; i++) {
      const c = all[i];
      if (skipWithin && skipWithin.contains(c)) continue;
      return c;
    }
    return null;
  }

  updateBackButtonLabel(tab) {
    if (!this.backButton || !tab) return;
    const label = tab.textContent.trim();
    const backText = `Back to ${label}`;

    this.backButton.setAttribute("aria-label", backText);
  }

  onTabKeydown(e, tab) {
    const { key } = e;
    if (key === "Enter" || key === " ") {
      tab.dataset.deferPanelTab = "1";
      return;
    }
    if (key === "Tab" && !e.shiftKey && tab.dataset.deferPanelTab === "1") {
      const panel = this.getPanelFromTab(tab);
      const focusables = this.getFocusable(panel);
      if (focusables.length) {
        e.preventDefault();
        focusables[0].focus();
      } else if (panel) {
        e.preventDefault();
        if (!panel.hasAttribute("tabindex")) panel.setAttribute("tabindex", "0");
        panel.focus();
      }
      delete tab.dataset.deferPanelTab;
    }
  }

  onRootKeydown(e) {
    if (e.key !== "Tab") return;

    if (!e.shiftKey && this.isLastNavItemFocused()) {
      const next = this.trigger ? this.getNextFocusableAfter(this.trigger, this.root) : null;
      if (next) {
        e.preventDefault();
        next.focus();
        return;
      }
    }

    const activePanel = this.root.querySelector(".tab-pane.active.show");
    if (!activePanel) return;

    const focusables = this.getFocusable(activePanel);
    if (!focusables.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        const owningTab = this.getTabFromPanel(activePanel);
        if (owningTab) {
          e.preventDefault();
          owningTab.focus();
        }
      }
    } else {
      if (document.activeElement === last) {
        const owningTab = this.getTabFromPanel(activePanel);
        const nextNav = this.getNextNavItemAfterTab(owningTab);
        if (nextNav) {
          e.preventDefault();
          nextNav.focus();
          return;
        }

        const next = this.trigger ? this.getNextFocusableAfter(this.trigger, this.root) : null;
        if (next) {
          e.preventDefault();
          next.focus();
        }
      }
    }
  }

  hideMostInnerTabOrBaseDropdown() {
    const tabToggles = SelectorEngine.find('.tab-toggle.active[data-bs-toggle="tab"]', this.root);
    const dropdownToggle = SelectorEngine.findOne(
      '.bcl-header__navbar .dropdown-toggle.show[data-bs-toggle="dropdown"]'
    );

    if (tabToggles.length) {
      const mostInnerToggle = tabToggles[tabToggles.length - 1];
      const tabPane = document.querySelector(".tab-pane.active.show");
      mostInnerToggle.classList.remove("active");
      mostInnerToggle.setAttribute("aria-selected", "false");
      if (tabPane) {
        tabPane.classList.remove("active", "show");
      }
      mostInnerToggle.focus();
    } else if (dropdownToggle) {
      Dropdown.getOrCreateInstance(dropdownToggle).hide();
      dropdownToggle.focus();
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
