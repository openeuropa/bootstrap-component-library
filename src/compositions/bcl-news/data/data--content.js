const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = `<p id="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet eleifend tortor. In facilisis eros vitae turpis ullamcorper, a euismod dolor lacinia. Nam facilisis ipsum et sollicitudin imperdiet. Curabitur a efficitur ante. Phasellus non felis laoreet, posuere ante ut, rhoncus tortor. Proin sed erat vel nisl luctus vulputate. Nunc tristique ultricies turpis, eu dictum enim ultrices vel. Sed posuere at leo sit amet placerat. Sed dapibus viverra urna ac pretium. Praesent et laoreet erat, eget volutpat metus. Duis ac augue sed tortor elementum dignissim in sit amet velit. Nullam nec viverra mi.</p>
    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras facilisis enim non nisi hendrerit laoreet. Vestibulum id facilisis augue, vitae faucibus justo. Etiam congue malesuada urna vitae suscipit. Mauris a varius leo. Nulla vel facilisis lacus. Suspendisse semper velit sit amet purus egestas, sit amet ullamcorper enim egestas. Vestibulum at lacus at purus ornare auctor nec consequat velit. Pellentesque iaculis sit amet nulla at rutrum.</p>
    <ul>
      <li>${getDummyText(1, false)}</li>
      <li>${getDummyText(1, false)}</li>
      <li>${getDummyText(1, false)}</li>
    </ul>
    <h2 class="my-4" id="subheading">Sub heading</h2>
    ${getDummyText(4)}
    ${getDummyText(6)}`;
