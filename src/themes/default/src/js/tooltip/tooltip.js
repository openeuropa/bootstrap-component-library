/* eslint-disable no-underscore-dangle, no-undef, no-shadow */

if (bootstrap) {
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    const tooltip = bootstrap.Tooltip.getInstance(tooltipTriggerEl);
    tooltipTriggerEl.setAttribute('tabindex', 0);
    tooltipTriggerEl.addEventListener("focusin", () => {
      if (!tooltip._isShown()) {
        tooltip.show()
      }
    }, false);
    tooltipTriggerEl.addEventListener("focusout", () => {
      if (tooltip._isShown()) {
        tooltip.hide()
      }
    }, false);
  
    tooltipTriggerEl.addEventListener("mouseover", () => {
      if (tooltip._isShown() || tooltip._isHovered) {
        tooltip._isHovered = true
        return
      }
      tooltip._isHovered = true
      tooltip._setTimeout(() => {
        if (tooltip._isHovered) {
          tooltip.show()
          tooltip.tip.addEventListener("mouseleave", (event) => {
            const tooltip = bootstrap.Tooltip.getInstance(document.querySelector(`[aria-describedby="${event.target.id}"]`));
            tooltip.hide();
          })
        }
      }, tooltip._config.delay.show)
    }, false);
    tooltipTriggerEl.addEventListener("mouseout", () => {
      const elementsHovered = document.querySelectorAll(':hover');
      let lastHoveredElement = elementsHovered[elementsHovered.length - 1];
      if(lastHoveredElement.className === 'tooltip-arrow') {
        lastHoveredElement = lastHoveredElement.parentElement;
      }
      const isLastHoverTooltip = (lastHoveredElement.id !== tooltip.tip.id);
      if(tooltip.tip && isLastHoverTooltip) {
        if (tooltip._isWithActiveTrigger()) {
          return
        }
        tooltip._isHovered = false
        tooltip._setTimeout(() => {
          if (!this._isHovered) {
            tooltip.hide()
          }
        }, tooltip._config.delay.hide)
      }
    }, false);

  });
}
