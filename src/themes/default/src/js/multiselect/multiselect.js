if (typeof SlimSelect !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    const select = [];
    function setAccessibility(el, selectedVal, i) {
      el.setAttribute('tabindex', '0')
      el.addEventListener("keyup", (event) => {
          event.preventDefault();
          if (event.keyCode === 13) {
            document.querySelector(`[data-id='${selectedVal.id}']`).remove();
            const values = select[i].getSelected();
            const newValues = values.filter(value => value !== selectedVal.value);
            select[i].setSelected(newValues);
          }
      });
    }
    document.querySelectorAll('.multi-select').forEach((element, i) => {
      if(!element.hasAttribute('data-id')) {
        element.classList.add(`multi-select-${i}`);
        select[i] = new SlimSelect({ // eslint-disable-line
          select: `.multi-select-${i}`,
          selectByGroup: true,
          placeholder: "Please select a value",
          events: {
            afterChange: (values) => {
              if(values.length) {
                const lastVal = values[values.length - 1]
                const el = document.querySelector(`[data-id='${lastVal.id}'] .ss-value-delete`);
                setAccessibility(el, lastVal, i)
              }
            }
          }
        });
        const selectedValues = select[i].store.data.filter(value => value.selected);
        selectedValues.forEach(selectedVal => {
          const el = document.querySelector(`[data-id='${selectedVal.id}'] .ss-value-delete`);
          setAccessibility(el, selectedVal, i)
        });
      }
    });
  })
}
