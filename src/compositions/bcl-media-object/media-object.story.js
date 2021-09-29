import demoData from "@openeuropa/bcl-media-object/dataMediaObject.js";
import demoDataSmallUser from "@openeuropa/bcl-media-object/dataSmallUser.js";
import mediaObject from "@openeuropa/bcl-media-object/media-object.html.twig";

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: "Compositions/Media object",
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=4362%3A43580",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/utilities/flex/#media-object",
      },
    ],
  },
};

export const SmallUserView = (args) =>
  mediaObject(applyArgs(demoDataSmallUser, args));

export const VanillaMediaObject = (args) =>
  mediaObject(applyArgs(demoData, args));
