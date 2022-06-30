import { correctPaths } from "@openeuropa/bcl-story-utils";
import dataDefault from "@openeuropa/bcl-content-banner/data/data";
import dataLinks from "@openeuropa/bcl-content-banner/data/data--links";
import dataActionButton from "@openeuropa/bcl-content-banner/data/data--action-button";
import dataDate from "@openeuropa/bcl-date-block/data/data";
import contentBanner from "@openeuropa/bcl-content-banner/content-banner.html.twig";

const demoData = { ...dataDefault, ...dataLinks, ...dataActionButton };

demoData.image.classes = "chromatic-ignore";

export default {
  title: "Compositions/Content banner",
};

export const LargeImage = () =>
  contentBanner(correctPaths({ ...demoData, image_size: "lg" }));

LargeImage.storyName = "Large image";

export const ExtraLargeImage = () =>
  contentBanner(correctPaths({ ...demoData, image_size: "xl" }));

ExtraLargeImage.storyName = "Extra large image";

export const WithDate = () =>
  contentBanner(correctPaths({ ...demoData, image: {}, date: dataDate }));

WithDate.storyName = "With a date block";
