const drupalAttribute = require("drupal-attribute");

module.exports = {
  message: "A simple alert. check it out!",
  heading: "Thank you",
  message: `<p>Your informations were sent successfully</p><hr>
  <dl class="d-md-grid grid-3-9">
    <dt class="d-flex"><p class="mb-0 d-inline-block">The sender’s name</p></dt>
    <dd>John Doe</dd>
    <dt><p class="mb-0">The sender’s email</p></dt>
    <dd>John.doe@gmail.com</dd>
    <dt class="d-flex"><p class="mb-0 d-inline-block">Subject</p></dt>
    <dd><p class="mb-0">My feedback</p></dd>
    <dt>Message</dt>
    <dd>Etiam interdum, orci at sagittis luctus, lorem libero tempus mauris...</dd>
    <dt>Topic</dt>
    <dd>Website issue</dd>
    <dt class="d-flex">Country of residence</dt>
    <dd>France</dd>
    <dt>Phone</dt>
    <dd>(+33)123456789</dd>
  </dl>`,
  icons_path: "/icons.svg",
  variant: "success",
};
