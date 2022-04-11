import demoData from "@openeuropa/bcl-data-blockquote/data.js";
import blockquote from "@openeuropa/bcl-blockquote/blockquote.html.twig";

export default {
  title: "Paragraphs/Blockquote",
  parameters: {
    controls: { disable: true },
  },
};

export const Top = () => blockquote({ ...demoData, alignment: "center" });

Top.storyName = "Centered";

export const Right = () => blockquote({ ...demoData, alignment: "end" });

Right.storyName = "Aligned right";
