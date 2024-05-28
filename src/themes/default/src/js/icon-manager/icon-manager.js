/**
 * --------------------------------------------------------------------------
 * IconManager Class Documentation
 * --------------------------------------------------------------------------
 *
 * Overview:
 * The `IconManager` class is a utility for dynamically setting the `mask-image`
 * of HTML elements based on custom data attributes. It uses CSS custom properties
 * and JavaScript to ensure the correct SVG icon is applied to elements with the class `.icon`.
 *
 */

import { defineJQueryPlugin } from '@openeuropa/bcl-bootstrap/js/src/util/index'

class IconManager {
  initializeIcons() {
    this.iconPath = getComputedStyle(document.body).getPropertyValue('--icon-path').trim().replace(/['"]/g, '');
    document.querySelectorAll('.icon[data-icon]').forEach(icon => {
      const iconId = icon.getAttribute('data-icon');
      this.setIconMask(icon, iconId);
    });
  }

  setIconMask(icon, iconId) {
    icon.style.maskImage = `url(${this.iconPath}#${iconId}-view)`;
    icon.style.webkitMaskImage = `url(${this.iconPath}#${iconId}-view)`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const iconManager = new IconManager();
  iconManager.initializeIcons();
});

defineJQueryPlugin(IconManager);

export default IconManager;
