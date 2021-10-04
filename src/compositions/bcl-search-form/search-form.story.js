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
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=43%3A0",
      },
    ],
  },
};

const correctPaths = (data) => {
  data.icon.path = defaultSprite;

  return data;
};

export const Default = () => searchForm(correctPaths(demoData));

Default.storyName = "Default";

export const Pill = () => searchForm(correctPaths({ ...demoData, pill: true }));

Pill.storyName = "Pill";
