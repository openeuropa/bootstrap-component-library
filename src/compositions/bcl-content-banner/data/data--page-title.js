import { getDummyText } from "@openeuropa/bcl-data-utils";

const data = {
  content: getDummyText(4, true),
  image: {
    path: "https://picsum.photos/255/255?random=6",
    alt: "alt img",
  },
};

export default data;
