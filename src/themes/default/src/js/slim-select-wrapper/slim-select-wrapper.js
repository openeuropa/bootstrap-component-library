function wrapSlimSelect() {
  const ActualSlimSelect = window.SlimSelect;

  function SlimSelectWrapper(config) {
    const selectEl =
      typeof config.select === 'string'
        ? document.querySelector(config.select)
        : config.select;

    const offcanvasContainer =
      selectEl?.closest('.offcanvas-body') || selectEl?.closest('.offcanvas');

    const enhancedConfig = {
      ...config,
      settings: {
        ...(config.settings || {}),
        ...(offcanvasContainer && { contentLocation: offcanvasContainer }),
      },
    };

    const instance = new ActualSlimSelect(enhancedConfig);

    instance.render.main.main.classList.add('ss-2');
    instance.render.content.main.classList.add('ss-content-2');

    return instance;
  }

  window.SlimSelect = SlimSelectWrapper;
  return SlimSelectWrapper;
}

let SlimSelectWrapper = null;

if (window.SlimSelect) {
  SlimSelectWrapper = wrapSlimSelect();
} else {
  // Fallback if SlimSelect isn't loaded yet
  document.addEventListener('DOMContentLoaded', () => {
    if (window.SlimSelect) {
      SlimSelectWrapper = wrapSlimSelect();
    } else {
      console.warn('SlimSelect is still not available.');
    }
  });
}

export default SlimSelectWrapper;
