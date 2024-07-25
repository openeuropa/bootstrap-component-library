if (typeof SlimSelect !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    function setAccessibility(el) {
      el.setAttribute('tabindex', '0');
    }

    // Use event delegation
    document.addEventListener('keydown', (event) => {
      if (event.target.classList.contains('ss-value-delete') && event.key === 'Enter') {
        event.preventDefault();
        const deleteEl = event.target;
        const selectedValId = deleteEl.closest('[data-id]').dataset.id;
        const slimElDataId  = deleteEl.closest('.ss-main[data-id]').getAttribute('data-id');
        const select = document.querySelector(`select[data-id="${slimElDataId}"]`);
        const element = select.slim; // Assumes only one SlimSelect instance

        if (!element) return;

        const selectedVal = element.store.data.find(val => val.id === selectedValId);
        if (selectedVal) {
          document.querySelector(`[data-id='${selectedValId}']`).remove();
          const values = element.getSelected();
          const newValues = values.filter(value => value !== selectedVal.value);
          element.setSelected(newValues);
        }
      }
    });

    document.querySelectorAll('select').forEach((element) => {
      if (element.slim && element.slim.store.selectType === 'multiple') {
        const selectedValues = element.slim.store.data.filter(value => value.selected);
        selectedValues.forEach(selectedVal => {
          const deleteEl = document.querySelector(`[data-id='${selectedVal.id}'] .ss-value-delete`);
          if (deleteEl) {
            setAccessibility(deleteEl);
          }
        });

        element.slim.render.callbacks.afterChange = (values) => {
          const lastVal = values[values.length - 1];
          const deleteEl = document.querySelector(`[data-id='${lastVal.id}'] .ss-value-delete`);
          if (deleteEl) {
            setAccessibility(deleteEl);
          }
        };
      }
    });
  });
}
