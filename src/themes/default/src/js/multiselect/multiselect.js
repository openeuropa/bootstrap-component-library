if (typeof SlimSelect !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    function setAccessibility(el) {
      el.setAttribute('tabindex', '0');
    }

    function findValueById(data, id) {
      // Use array methods to traverse nested data
      return data.reduce((found, item) => {
        if (found) return found;
        if (item.options && Array.isArray(item.options)) {
          return findValueById(item.options, id);
        }
        if (item.id === id) return item;
        return null;
      }, null);
    }

    // Use event delegation
    document.addEventListener('keydown', (event) => {
      if (event.target.classList.contains('ss-value-delete') && event.key === 'Enter') {
        event.preventDefault();
        const deleteEl = event.target;
        const selectedValId = deleteEl.closest('[data-id]').dataset.id;
        const slimElDataId = deleteEl.closest('.ss-main[data-id]').getAttribute('data-id');
        const select = document.querySelector(`select[data-id="${slimElDataId}"]`);
        const element = select.slim; // Assumes only one SlimSelect instance

        if (!element) return;

        const selectedVal = findValueById(element.store.data, selectedValId);
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
