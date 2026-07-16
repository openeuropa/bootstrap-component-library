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
        items: [
          {
            ...dataDefault.items[0],
            is_playable: true,
            thumbnail: `<img alt="16:9 video thumbnail"
                          src="https://picsum.photos/id/1005/800/450"
                        />`,
          },
          {
            ...dataDefault.items[1],
            thumbnail: `<img alt="Portrait thumbnail"
                          src="https://picsum.photos/id/101/400/600"
                        />`,
          },
          {
            ...dataDefault.items[2],
            thumbnail: `<img alt="16:9 landscape thumbnail"
                          src="https://picsum.photos/id/1012/800/450"
                        />`,
          },
          {
            ...dataDefault.items[3],
            thumbnail: `<img alt="Square thumbnail"
                          src="https://picsum.photos/id/1015/500/500"
                        />`,
          },
          {
            ...dataDefault.items[4],
            thumbnail: `<img alt="Tall portrait thumbnail"
                          src="https://picsum.photos/id/1081/450/800"
                        />`,
          },
        ],
        thumbnail_fit: "cover",
      },
      args,
    ),
  );

UniformThumbnails.storyName = "Uniform thumbnails";
UniformThumbnails.args = getArgs(dataDefault);
UniformThumbnails.argTypes = getArgTypes();
