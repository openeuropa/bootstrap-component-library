const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  content: getDummyText(2, true),
  image: {
    path: "https://picsum.photos/255/255?random=6",
    alt: "alt img",
  },
  image_size: "sm",
};
