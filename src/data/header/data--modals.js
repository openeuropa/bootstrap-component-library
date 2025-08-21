import { getDummyText } from "@openeuropa/bcl-data-utils";

const data = [
  {
    id: "loginModal",
    header: `<h5 class="modal-title" id="loginModalLabel">Log in</h5>
	    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`,
    body: `<h5>Disclaimer 1</h5>
	    ${getDummyText(3, true)}
	    <h5>Disclaimer 2</h5>
	    ${getDummyText(3, true)}`,
    footer: `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
	     <button type="button" class="btn btn-primary">Access EU login</button>`,
  },
];

export default data;
