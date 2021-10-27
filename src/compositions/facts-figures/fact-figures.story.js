import demoData from "@openeuropa/bcl-fact-figures/data/data.js";
import factFigures from "@openeuropa/bcl-fact-figures/fact-figures.html.twig";

export default {
  title: "Paragraphs/Fact & Figures",
  parameters: {
    controls: { disable: true },
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=1126%3A38732",
      },
    ],
  },
};

export const Default = () => factFigures(demoData);
