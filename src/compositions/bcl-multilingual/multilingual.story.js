import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";

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
  decorators: [withCode, withDesign, openModal],
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    badges: ["stable"],
    badgesConfig: {
      stable: {
        title: "v1",
      },
    },
  },
};

export const MultilingualNeutral = () => contentType(correctPaths(neutralData));
MultilingualNeutral.storyName = "Neutral";
MultilingualNeutral.parameters = {
  design: [
    {
      name: "Mockup - Desktop",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=5477%3A223304",
    },
    {
      name: "Mockup - Mobile",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=5506%3A225904",
    },
  ],
};

export const MultilingualEC = () => contentType(correctPaths(ECData));
MultilingualEC.storyName = "EC";
MultilingualEC.parameters = {
  design: [
    {
      name: "Mockup - Desktop",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=5537%3A225555",
    },
    {
      name: "Mockup - Mobile",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=5568%3A229991",
    },
  ],
};

export const MultilingualEU = () => contentType(correctPaths(EUData));
MultilingualEU.storyName = "EU";
MultilingualEU.parameters = {
  design: [
    {
      name: "Mockup - Desktop",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=5537%3A228461",
    },
    {
      name: "Mockup - Mobile",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=5537%3A228444",
    },
  ],
};
