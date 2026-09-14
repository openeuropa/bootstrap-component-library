import { correctPaths, getTitleControls } from "@openeuropa/bcl-story-utils";

import dataDefault from "@openeuropa/bcl-gallery/data/data.js";
import gallery from "@openeuropa/bcl-gallery/gallery.html.twig";

const getArgs = (data) => ({
  title: data.title,
  title_tag: "h2",
});

const getArgTypes = () => ({
  ...getTitleControls(),
});

const applyArgs = (data, args) => {
  correctPaths(data);

  return Object.assign(data, args);
};

const mixedThumbnailSizes = [
  [800, 450, "16:9 landscape"],
  [800, 600, "4:3 landscape"],
  [900, 600, "3:2 landscape"],
  [900, 400, "panoramic"],
  [1000, 500, "2:1 landscape"],
  [720, 480, "3:2 landscape"],
  [960, 540, "16:9 landscape"],
  [1000, 400, "wide landscape"],
  [1200, 500, "panoramic"],
  [700, 500, "landscape"],
];

const mixedThumbnailIds = [
  1005, 101, 1012, 1015, 1081, 1018, 1026, 1043, 1050, 1071, 1077, 1035, 1039,
  1040, 1041, 1044, 1052, 1057, 1060, 1069,
];

export default {
  title: "Paragraphs/Gallery",
  parameters: {
    badges: ["deprecated"],
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit---Components?node-id=8654%3A83333",
      },
    ],
  },
};

export const Default = (args) => gallery(applyArgs(dataDefault, args));

Default.storyName = "Default";
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes();

export const UniformThumbnails = (args) =>
  gallery(
    applyArgs(
      {
        ...dataDefault,
        items: mixedThumbnailIds.map((id, index) => {
          const [width, height, ratio] =
            mixedThumbnailSizes[index % mixedThumbnailSizes.length];

          return {
            ...dataDefault.items[index % dataDefault.items.length],
            is_playable:
              index === 0 ||
              dataDefault.items[index % dataDefault.items.length].is_playable,
            thumbnail: `<img alt="${ratio} thumbnail"
                          src="https://picsum.photos/id/${id}/${width}/${height}"
                        />`,
          };
        }),
        thumbnail_fit: "cover",
      },
      args,
    ),
  );

UniformThumbnails.storyName = "Uniform thumbnails";
UniformThumbnails.args = getArgs(dataDefault);
UniformThumbnails.argTypes = getArgTypes();
