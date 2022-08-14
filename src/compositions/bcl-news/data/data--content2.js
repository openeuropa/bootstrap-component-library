const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = `<div class="bcl-text">
<h3>Rich text top heading level 3</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet eleifend tortor. In facilisis eros vitae turpis ullamcorper, a euismod dolor lacinia. Nam facilisis ipsum et sollicitudin imperdiet. Curabitur a efficitur ante. Phasellus non felis laoreet, posuere ante ut, rhoncus tortor. Proin sed erat vel nisl luctus vulputate. Nunc tristique ultricies turpis, eu dictum enim ultrices vel. Sed posuere at leo sit amet placerat. Sed dapibus viverra urna ac pretium. Praesent et laoreet erat, eget volutpat metus. Duis ac augue sed tortor elementum dignissim in sit amet velit. Nullam nec viverra mi.</p>
    <h2>Sub heading level two</h2>
    ${getDummyText(4, true)}
    <h3>Sub heading level three</h3>
    ${getDummyText(1, true)}
    <h4>Sub heading level four</h4>
    ${getDummyText(1, true)}
    <h5>Sub heading level five</h5>
    ${getDummyText(1, true)}
</div>`;
