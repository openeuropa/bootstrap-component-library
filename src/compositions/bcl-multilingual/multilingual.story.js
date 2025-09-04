import layout from "@openeuropa/bcl-base-templates/data/layout";
import {
  banner,
  share,
} from "@openeuropa/bcl-base-templates/data/content-page";
import { correctPaths } from "@openeuropa/bcl-story-utils";
import content from "@openeuropa/bcl-news/data/data--content";
import contentType from "@openeuropa/bcl-base-templates/content-type.html.twig";

import MultilingualDataEU from "@openeuropa/bcl-data-header/data";
import MultilingualDataEC from "@openeuropa/bcl-data-header/data--ec";
import MultilingualDataNeutral from "@openeuropa/bcl-data-header/data--neutral";

const openModal = (story) => {
  const demo = story();
  return `
    ${demo}
    <script>
      var backdrop = document.getElementsByClassName("modal-backdrop")[0];
      if (typeof backdrop != "undefined" && backdrop != null) {
        backdrop.remove();
        document.body.removeAttribute("style");
      }
      var languageModal = new bootstrap.Modal(
        document.getElementById("languageModal")
      );
      languageModal.show();
    </script>
    `;
};

const baseData = {
  content_type: "multilingual",
  title: "Demo page",
  footer: layout.footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  banner,
  content,
  share,
};

const neutralData = {
  ...baseData,
  header: MultilingualDataNeutral,
};

const ECData = {
  ...baseData,
  header: MultilingualDataEC,
};

const EUData = {
  ...baseData,
  header: MultilingualDataEU,
};

export default {
  title: "Features/Multilingual",
  decorators: [openModal],
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    badges: ["stable", "deprecated"],
    badgesConfig: {
      stable: {
        title: "v1",
      },
    },
  },
};

export const MultilingualNeutral = () => contentType(correctPaths(neutralData));
MultilingualNeutral.storyName = "Neutral";

export const MultilingualEC = () => contentType(correctPaths(ECData));
MultilingualEC.storyName = "EC";

export const MultilingualEU = () => contentType(correctPaths(EUData));
MultilingualEU.storyName = "EU";
