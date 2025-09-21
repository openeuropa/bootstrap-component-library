import SelectorEngine from "@openeuropa/bcl-bootstrap/js/src/dom/selector-engine";

class FocusIsland {

  constructor() {
    this.addFocusTrap();
  }

  addFocusTrap() {
    let lastTabDirection = null;
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        lastTabDirection = e.shiftKey ? -1 : 1;
      }
    });
    document.addEventListener('focusin', (event) => {
      this.focusin(event.target, lastTabDirection);
      lastTabDirection = null;
    });
  }

  focusin(target, tabDirection) {
    if (this.isElementFocusable(target)) {
      // The element is a valid focus target, so nothing to do.
      return;
    }
    if (tabDirection === null) {
      // The focus change did not come from tab key.
      return;
    }
    // The focused element is not focusable, find the next valid target.
    const focusables = this.getAllDocumentFocusables(target);
    const currentIndex = focusables.indexOf(target);
    const nextIndex = (currentIndex + tabDirection) % focusables.length;
    const nextTarget = focusables.at(nextIndex);
    nextTarget.focus();
  }

  isElementTabbable(element) {
    return element.offsetParent !== null
      && !this.isElementInert(element);
  }

  isElementFocusable(element) {
    const island = this.getClosestMatchingAncestorOrSelf(element, '.bcl-focus-island') ?? document.body;
    if (this.isFocusIslandCursed(island)) {
      return false;
    }
    return true;
  }

  isElementInert(element) {
    return getComputedStyle(element).getPropertyValue('--bcl-inert') === 'true';
  }

  getAllDocumentFocusables(elementToInclude) {
    const islands = this.getFocusIslands();
    const tmpCurrentElementClass = '__tmp-bcl-include__';
    const tmpIslandClass = '__tmp-bcl-focus-island-active__';
    if (elementToInclude) {
      elementToInclude.classList.add(tmpCurrentElementClass);
    }
    let focusableSelector = `a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])`;
    // const bodyIsInert = this.isElementInert(document.body);
    if (islands !== null) {
      // Focus is restricted to some focus islands.
      islands.forEach((island) => island.classList.add(tmpIslandClass));
      focusableSelector = `.${tmpIslandClass} :is(${focusableSelector}), .${tmpIslandClass}:is(${focusableSelector})`;
    }
    if (elementToInclude) {
      focusableSelector = `${focusableSelector}, .${tmpCurrentElementClass}`;
    }
    const focusables = SelectorEngine
      .find(focusableSelector)
      .filter((el) => {
        // Always include the provided element.
        if (el === elementToInclude) {
          return true;
        }
        // Don't include hidden elements.
        return el.offsetParent !== null;
      });
    if (elementToInclude) {
      elementToInclude.classList.remove(tmpCurrentElementClass);
    }
    if (islands !== null) {
      islands.forEach((island) => island.classList.remove(tmpIslandClass));
    }
    return focusables;
  }

  getFocusIslands() {
    // Always consider the body an island.
    const islandsAll = SelectorEngine
      .find('.bcl-focus-island, body');
    // Exclude islands with display: none.
    const islandsVisible = islandsAll
      .filter(island => island.offsetParent !== null);
    // Exclude islands that contain a visible sink.
    const islandsNotCursed = islandsVisible
      .filter(island => !this.isFocusIslandCursed(island));

    // If the body is in the list, all other islands would be removed in the
    // next step. Simply return null, to let calling code deal with this case
    // separately.
    if (islandsNotCursed.includes(document.body)) {
      return null;
    }
    // Exclude islands where an ancestor is already in the list.
    const mainIslands = islandsNotCursed
      .filter(island => !islandsNotCursed.some(other => other !== island && other.contains(island)));
    return mainIslands;
  }

  isFocusIslandCursed(island) {
    const curses = SelectorEngine
      // Only consider curses that are at least two levels below.
      // This allows to place a curse in a child island, while only cursing the
      // parent island.
      .find(':scope * .bcl-focus-island-curse', island)
      .filter(curse => curse.offsetParent !== null);
    return curses.length !== 0;
  }

  getClosestMatchingAncestorOrSelf(element, selector) {
    for (
      let ancestor = element;
      ancestor;
      ancestor = ancestor.parentElement
    ) {
      if (ancestor.matches(selector)) {
        return ancestor;
      }
    }
    return null;
  }

  static init() {
    (new FocusIsland());
  }

}

document.addEventListener("DOMContentLoaded", () => {
  FocusIsland.init();
});

export default FocusIsland;
