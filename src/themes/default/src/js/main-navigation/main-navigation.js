import SelectorEngine from "@openeuropa/bcl-bootstrap/js/src/dom/selector-engine";
import EventHandler from "@openeuropa/bcl-bootstrap/js/src/dom/event-handler";

class MainNavigation {
  constructor(toggler) {
    this.toggler = toggler;
    this.top = 0;

    this.target = this.getTargetFromToggler(toggler);
    if (!this.target) return;

    this.addListeners();
  }

  getTargetFromToggler(toggler) {
    const selector = toggler.getAttribute("data-bs-target");
    if (!selector) return null;
    try {
      return document.querySelector(selector);
    } catch {
      return null;
    }
  }

  addListeners() {
    EventHandler.on(this.target, "show.bs.collapse", () => {
      window.scrollTo(0, this.top);
    });
  }

  static init(selector = ".bcl-toggler", options) {
    const togglers = SelectorEngine.find(selector);
    togglers.forEach((toggler) => new MainNavigation(toggler, options));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Run for all .bcl-toggler buttons
  MainNavigation.init(".bcl-toggler");
});

export default MainNavigation;
