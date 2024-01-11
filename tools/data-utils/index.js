/**
 * @param count {integer} How many periods to generate.
 * @param paragraph {boolean} Wrap the generated periods in a <p></p> tag
 * @param paragraphs {boolean} Wrap each period in a <p></p> tag
 * @param classes {String} css classes for the paragraph(s)
 */
const getDummyText = (
  count = 1,
  paragraph = false,
  paragraphs = false,
  classes = "",
) => {
  let p = "";
  let selector = "";
  let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
  const ipsum = "Duis fermentum facilisis ex, ac porta massa. ";

  if (count > 1) {
    lorem = `${lorem} ${ipsum}`;
  }

  if (classes) {
    selector = ` class="${classes}"`;
  }

  if (paragraphs || paragraph) {
    p = `<p${selector}>###</p>`;
  }

  if (paragraphs) {
    lorem = p.replace("###", lorem.trim());
  }

  let dummyText = lorem
    .repeat(count)
    .trim()
    .replace(/(.*?\.){3}/g, "$& <br>")
    .replace(/(.*?\.){9}/g, "$& <br>");

  if (paragraph && !paragraphs) {
    dummyText = p.replace("###", dummyText);
  }

  return dummyText;
};

module.exports = {
  getDummyText,
};
