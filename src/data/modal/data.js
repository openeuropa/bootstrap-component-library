const { getDummyText } = require("@openeuropa/bcl-data-utils");
const drupalAttribute = require("drupal-attribute");

module.exports = {
  id: "exampleModal",
  header:
    '<h5 class="modal-title" id="exampleModalLabel">Modal title</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>',
  header_attributes: new drupalAttribute().addClass("test-class"),
  body: getDummyText(7, true),
  body_attributes: new drupalAttribute().addClass("test-class"),
  footer:
    '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button><button type="button" class="btn btn-primary">Save changes</button>',
  footer_attributes: new drupalAttribute().addClass("test-class"),
};
