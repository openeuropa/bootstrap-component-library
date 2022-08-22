const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = `
  <div class="bcl-section">
    <p id="content">${getDummyText(5, false)}</p>
    <p>${getDummyText(5, false)}</p>
    <ul>
      <li>${getDummyText(1, false)}</li>
      <li>${getDummyText(1, false)}</li>
      <li>${getDummyText(1, false)}</li>
    </ul>
    <h2 id="subheading">Sub heading</h2>
    ${getDummyText(4, true)}
    ${getDummyText(6, true)}
  </div>`;
