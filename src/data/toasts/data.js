const { DrupalAttribute } = require("drupal-attribute");

module.exports = {
  toasts: [
    {
      role: "alert",
      aria_live: "assertive",
      with_close: true,
      header: "Toast title",
      header_attributes: new DrupalAttribute().addClass("test-class"),
      button_attributes: new DrupalAttribute().addClass("test-class"),
      body: `Hello, world! This is a toast message.
            <div class="mt-2 pt-2 border-top">
              <button type="button" class="btn btn-primary btn-sm me-1">Take action</button>
              <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
            </div>`,
      body_attributes: new DrupalAttribute().addClass("test-class"),
      custom_content: "<p>Toast custom content.</p>",
    },
  ],
};
