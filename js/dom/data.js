(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Data = factory());
}(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta2): dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  const mapData = (() => {
    const storeData = {};
    let id = 1;
    return {
      set(element, key, data) {
        if (typeof element.bsKey === 'undefined') {
          element.bsKey = {
            key,
            id
          };
          id++;
        }

        storeData[element.bsKey.id] = data;
      },

      get(element, key) {
        if (!element || typeof element.bsKey === 'undefined') {
          return null;
        }

        const keyProperties = element.bsKey;

        if (keyProperties.key === key) {
          return storeData[keyProperties.id];
        }

        return null;
      },

      delete(element, key) {
        if (typeof element.bsKey === 'undefined') {
          return;
        }

        const keyProperties = element.bsKey;

        if (keyProperties.key === key) {
          delete storeData[keyProperties.id];
          delete element.bsKey;
        }
      }

    };
  })();

  const Data = {
    setData(instance, key, data) {
      mapData.set(instance, key, data);
    },

    getData(instance, key) {
      return mapData.get(instance, key);
    },

    removeData(instance, key) {
      mapData.delete(instance, key);
    }

  };

  return Data;

})));
//# sourceMappingURL=data.js.map
