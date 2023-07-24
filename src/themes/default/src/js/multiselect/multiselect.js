if (typeof SlimSelect !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    function setAccessibility(el, selectedVal, slim) {
      el.setAttribute('tabindex', '0')
      el.addEventListener("keyup", (event) => {
          event.preventDefault();
          if (event.keyCode === 13) {
            document.querySelector(`[data-id='${selectedVal.id}']`).remove();
            const values = slim.getSelected();
            const newValues = values.filter(value => value !== selectedVal.value);
            slim.setSelected(newValues);
          }
      });
    }
    document.querySelectorAll('select').forEach((element) => {
      if(element.slim && element.slim.store.selectType === 'multiple') {
        const selectedValues = element.slim.store.data.filter(value => value.selected);
        selectedValues.forEach(selectedVal => {
          const deleteEl = document.querySelector(`[data-id='${selectedVal.id}'] .ss-value-delete`);
          setAccessibility(deleteEl, selectedVal, element.slim)
        });
        element.slim.render.callbacks.afterChange = (values) => {
          const lastVal = values[values.length - 1];
          const deleteEl = document.querySelector(`[data-id='${lastVal.id}'] .ss-value-delete`);
          setAccessibility(deleteEl, lastVal, element.slim)
        }
      }
    })
  })
}
