const drupalAttribute = require("drupal-attribute");

module.exports = {
  attributes: new drupalAttribute(),
  toasts: [
    {
      role: "alert",
      aria_live: "assertive",
      with_close: false,
      attributes: new drupalAttribute(),
      body: `Hello, world! This is a toast message.
            <div class="mt-2 pt-2 border-top">
              <button type="button" class="btn btn-primary btn-sm me-1">Take action</button>
              <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
            </div>`,
    },
  ],
};
