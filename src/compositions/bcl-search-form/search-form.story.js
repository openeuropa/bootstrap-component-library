import demoData from "@openeuropa/bcl-search-form/dataSearch.js";
import searchForm from "@openeuropa/bcl-search-form/search-form.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

export default {
  title: "Compositions/Search Form",
  parameters: {
    controls: { disable: true },
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=3973%3A35941",
      },
    ],
  },
};

const correctPaths = (data) => {
  data.icon.path = defaultSprite;

  return data;
};

export const Default = () => searchForm(correctPaths(demoData));

export const Pill = () => searchForm(correctPaths({ ...demoData, pill: true }));
