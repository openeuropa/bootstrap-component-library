import { correctPaths } from "@openeuropa/bcl-story-utils";
import dataDefault from "@openeuropa/bcl-content-banner/data/data";
import contentBanner from "@openeuropa/bcl-content-banner/content-banner.html.twig";

export default {
  title: "Compositions/Content banner",
};

export const LargeImage = () =>
  contentBanner(correctPaths({ ...dataDefault, image_size: "lg" }));

LargeImage.storyName = "Large image";

export const SmallImage = () =>
  contentBanner(correctPaths({ ...dataDefault, image_size: "sm" }));

SmallImage.storyName = "Small image";
