const getDummyText = (
  count = 1,
  paragraph = true,
  paragraphs = false,
  classes = ""
) => {
  let p = "";
  let selector = "";
  let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";

  if (classes) {
    selector = `class="${classes}`;
  }

  if (paragraphs || paragraph) {
    p = `<p${selector}>###</p>`;
  }

  if (paragraphs) {
    lorem = p.replace("###", lorem);
  }

  let dummyText = lorem.repeat(count).replace(/(.*?\.){4}/g, "$& <br>");

  if (paragraph && !paragraphs) {
    dummyText = p.replace("###", dummyText);
  }

  return dummyText;
};

module.exports = {
  getDummyText,
};
