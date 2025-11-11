const { DrupalAttribute } = require("drupal-attribute");

/**
 * Storybook-specific DrupalAttribute variant.
 *
 * Aligns the JS implementation with Drupal's PHP Attribute behavior by keeping
 * empty-string attribute values (e.g. `hidden=""`) instead of dropping them.
 */
class StorybookDrupalAttribute extends DrupalAttribute {
  toString() {
    const components = [];

    for (const key of this.keys()) {
      let value = this.get(key);

      if (value === null || value === undefined || value === false) {
        continue;
      }

      if (value === true) {
        components.push(key);
        continue;
      }

      if (Array.isArray(value)) {
        const filtered = value
          .filter((v) => v !== null && v !== undefined && v !== "")
          .map(String);

        if (filtered.length === 0) {
          continue;
        }

        value = filtered.join(" ");
      }

      if (value === key) {
        components.push(key);
        continue;
      }

      if (value === "") {
        components.push(`${key}=""`);
        continue;
      }

      components.push(`${key}="${String(value)}"`);
    }

    return components.length ? ` ${components.join(" ")}` : "";
  }
}

module.exports = {
  StorybookDrupalAttribute,
};
