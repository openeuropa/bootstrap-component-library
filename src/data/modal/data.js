const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  id: "exampleModal",
  header:
    '<h5 class="modal-title" id="exampleModalLabel">Modal title</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>',
  body: getDummyText(7, true),
  footer:
    '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button><button type="button" class="btn btn-primary">Save changes</button>',
};
